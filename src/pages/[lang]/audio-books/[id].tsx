import { useRouter } from 'next/router';

import Layout from '@/components/Layout/Layout';


function Book(): JSX.Element {
  const { query } = useRouter();
  
  return (
    <Layout title="Аудионига">
      <div>
        <h1>Аудионига c id</h1>
        {query.id}
      </div>
    </Layout>
  );
}

export default Book;
