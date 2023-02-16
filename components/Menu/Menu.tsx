import Link from 'next/link';


function Menu(): JSX.Element {
  return (
    <div>
      <Link href="/">Главная</Link>
      <Link href="/about">О сайте</Link>
    </div>
  );
}

export default Menu;
