import { load } from 'cheerio';
import { batchType , urlType } from '@/types/types';

const scrapeBatch = (html: string) => {
  const $ = load(html);
  
  const batch: batchType[] = [];
  const urlGroups = $('.download2 .batchlink ul li').toString().split('</li>');
  urlGroups.forEach((urlGroup) => {
    const $ = load(urlGroup);

    const urls: urlType[] = [];
        const urlsParse = $('a').toString().split('</a>');
        urlsParse.forEach(url => {
            const $url = load(url);
            urls.push({
                provider: $url('a').text(),
                url: $url('a').attr('href') || ''
            });
        });
        urls.splice(-1);

        batch.push({
            resolution: $('strong').text() || 'Unknown',
            size: $('i').text() || 'Unknown',
            urls
        });
  });

  const titleMatch = $('.animeinfo .kiri .data .infos').text().match(/Judul:\s*(.*?)Japanese:/);
  const title = titleMatch ? titleMatch[1].trim() : 'Batch Tidak Ditemukan';
  const slug = $('.animeinfo .kiri .data .totalepisode h3 a').attr('href')?.split('/')[4] || 'unknown';
  const totalEpisode = $('.animeinfo .kiri .data .totalepisode .total').text() || 'Unknown';

  if (batch.length === 0) {
    return {
      message: "Batch tidak tersedia untuk anime ini.",
      anime: {
        title,
        slug
      },
      total_episode: totalEpisode,
      download_urls: []
    };
  }

  return {
    anime: {
      title,
      slug
    },
    total_episode: totalEpisode,
    download_urls: batch
  };
};

export default scrapeBatch;
