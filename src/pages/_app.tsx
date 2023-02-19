import { ThemeProvider } from 'styled-components';

import { Reset } from '@/styles/reset';
import { Common } from '@/styles/common';
import { theme } from '@/styles/theme';

import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Common />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
