import Layout from '@/components/Layout/Layout';
import Filters from '@/components/Filters/Filters';


function AudioBooks(): JSX.Element {

  return (
    <Layout title="Аудиокниги">
      <div>
        <h1>Страница Аудиокниг</h1>
      </div>
      <Filters />
    </Layout>
  );
}

export default AudioBooks;
