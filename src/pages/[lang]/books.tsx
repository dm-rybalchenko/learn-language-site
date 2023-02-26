import Filters from '@/components/Filters/Filters';
import Layout from '@/components/Layout/Layout';
import List from '@/components/List/List';
import mock from '../../../mock/mock.json';


function Books(): JSX.Element {
  return (
    <Layout title="Книги">
      <Filters />
      <List items={mock.books} />
    </Layout>
  );
}

export default Books;
