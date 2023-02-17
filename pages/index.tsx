import Button from '@/components/Button/Button';
import Layout from '@/components/Layout/Layout';
import Select from '@/components/Select/Select';


const optionsSelect = [
  { value: '1', name: 'один' },
  { value: '2', name: 'два' },
  { value: '3', name: 'три' },
];

export default function Home(): JSX.Element {
  return (
    <>
      <Layout title="Главная">
        <h1>Главная страница</h1>

        <div style={{ display: 'flex', gap: 30, margin: 30 }}>
          <Button view="primary">Кнопка</Button>
          <Button long view="secondary">
            Кнопка
          </Button>
          <Button view="secondary">Кнопка</Button>
          <Button lg view="secondary">
            Кнопка
          </Button>
          <Button>Кнопка</Button>
          <Button view="danger">Кнопка</Button>
          <Button view="warning">Кнопка</Button>
        </div>
        <div style={{ display: 'flex', gap: 30, margin: 30 }}>
          <Select
            options={optionsSelect}
            value={optionsSelect[0]}
            onChange={(v): void => console.log(v)}
          />
        </div>
      </Layout>
    </>
  );
}
