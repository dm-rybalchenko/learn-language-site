import Head from 'next/head';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { ILayoutProps } from './Layout.types';

import style from './Layout.module.css';


function Layout({ children, keywords, title }: ILayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords}></meta>
        <title>{title}</title>
      </Head>
      <div className={style.wrapper}>
        <Header />
        <main className={style.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
