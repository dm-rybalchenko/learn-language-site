import { useRouter } from 'next/router';

import Layout from '@/components/Layout/Layout';


function Film(): JSX.Element {
  const { query } = useRouter();
  return (
    <Layout title="Фильм">
      <div>
        <h1>Фильм c id</h1>
        {query.id}
      </div>
    </Layout>
  );
}

export default Film;
