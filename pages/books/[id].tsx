import { useRouter } from 'next/router';

import Layout from '@/components/Layout/Layout';


function Book(): JSX.Element {
  const { query } = useRouter();
  return (
    <Layout title="Книга">
      <div>
        <h1>Книга c id</h1>
        {query.id}
      </div>
    </Layout>
  );
}

export default Book;
