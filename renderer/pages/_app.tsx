import { Global, ThemeProvider } from '@emotion/react';
import { global } from '../styles/globalStyle';
import theme from '../styles/theme';

import LayoutContainer from '../components/LayoutContainer';
import { ContextWrapper } from '../components/contexts/ContextWrapper';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ContextWrapper>
			<Global styles={global} />
			<ThemeProvider theme={theme}>
				<LayoutContainer>
					<Component {...pageProps} />
				</LayoutContainer>
			</ThemeProvider>
		</ContextWrapper>
	);
}
