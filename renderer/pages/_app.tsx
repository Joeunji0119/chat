import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import LayoutContainer from '../components/LayoutContainer';
import { global } from '../styles/GlobalStyle';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={global} />
			<ThemeProvider theme={theme}>
				<LayoutContainer>
					<Component {...pageProps} />
				</LayoutContainer>
			</ThemeProvider>
		</>
	);
}
