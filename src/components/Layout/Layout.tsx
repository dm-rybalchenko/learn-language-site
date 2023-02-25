import Head from 'next/head';
import styled from 'styled-components';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { ILayoutProps } from './Layout.types';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding-top: 100px;
`;

function Layout({ children, keywords, title }: ILayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords}></meta>
        <title>{title}</title>
      </Head>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Layout;
