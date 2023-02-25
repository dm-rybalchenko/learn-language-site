import Filters from '@/components/Filters/Filters';
import Layout from '@/components/Layout/Layout';


function Books(): JSX.Element {
  return (
    <Layout title="Книги">
      <div>
        <h1>Страница Книг</h1>
      </div>
      <Filters />
    </Layout>
  );
}

export default Books;
