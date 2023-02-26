import Filters from '@/components/Filters/Filters';
import Layout from '@/components/Layout/Layout';
import List from '@/components/List/List';
import mock from '../../../mock/mock.json';


function Films(): JSX.Element {
  return (
    <Layout title="Фильмы">
      <Filters />
      <List items={mock.films} />
    </Layout>
  );
}

export default Films;
