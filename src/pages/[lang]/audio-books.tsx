import Layout from '@/components/Layout/Layout';
import Filters from '@/components/Filters/Filters';
import mock from '../../../mock/mock.json';
import List from '@/components/List/List';


function AudioBooks(): JSX.Element {
  return (
    <Layout title="Аудиокниги">
      <Filters />
      <List items={mock['audio-books']} />
    </Layout>
  );
}

export default AudioBooks;
