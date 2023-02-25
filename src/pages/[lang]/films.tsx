import Filters from '@/components/Filters/Filters';
import Layout from '@/components/Layout/Layout';


function Films(): JSX.Element {

  return (
    <Layout title="Фильмы">
      <div>
        <h1>Страница Фильмов</h1>
		<Filters />
      </div>
    </Layout>
  );
}

export default Films;
