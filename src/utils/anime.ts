import axios from 'axios';
import scrapeSingleAnime from '@/lib/scrapeSingleAnime';
import type { anime as animeType } from '@/types/types';

const { BASEURL } = process.env;
const anime = async (slug: string): Promise<animeType | undefined> => { 
  try {
    const { data } = await axios.get(`${BASEURL}/anime/${slug}`);
    const result = scrapeSingleAnime(data);
    return result;
  } catch (error) {
    console.error('Error fetching or processing anime data:', error);
    return undefined;
  }
};

export default anime;


// const { BASEURL } = process.env;
// const anime = async (slug: string): Promise<animeType | undefined> => { 
//   const { data } = await axios.get(`${BASEURL}/anime/${slug}`);
//   const result = scrapeSingleAnime(data);

//   return result;
// };

// export default anime;