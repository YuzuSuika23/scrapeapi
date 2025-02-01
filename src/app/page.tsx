export default async function HomePage() {
  return (
    <div>
      <p>Billsky Otakudesu Backend API Fetching</p>
      <br />
      <code>
        <h1><strong>Routes</strong></h1>
        <ul>
          <li>/api/home</li>
          <li>/api/anime/sousou</li>
          <li>/api/anime/sousou-frieren-sub-indo/episodes/1</li>
          <li>/api/ongoing-anime/*pages ex: 1,2,3,dst...*</li>
          <li>/api/complete-anime/*pages ex: 1,2,3,dst...*</li>
          <li>/api/genre</li>
          <li>/api/genre/*slug?page=... ex:fantasy?page=1*</li>
          <li>/api/search/</li>
        </ul>
      </code>
    </div>
  );
}