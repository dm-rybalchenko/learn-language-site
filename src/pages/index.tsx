import Button from '@/components/Button/Button';
import Filters from '@/components/Filters/Filters';
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
          <Button rounded>Кнопка</Button>
          <Button rounded view="error">
            Ошибка
          </Button>
          <Button rounded view="warning">
            Внимание
          </Button>
        </div>
        <div
          style={{ background: 'red', display: 'flex', gap: 30, margin: 30 }}
        >
          <Select
            options={optionsSelect}
            value={optionsSelect[0]}
            onChange={(v): void => console.log(v)}
          />
          <Select
            short
            label="Уровень"
            options={optionsSelect}
            value={optionsSelect[0]}
            onChange={(v): void => console.log(v)}
          />
        </div>
		<Filters />
      </Layout>
    </>
  );
}
