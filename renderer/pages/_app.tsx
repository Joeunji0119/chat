import type { AppProps } from 'next/app';
import LayoutContainer from '../components/LayoutContainer';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<LayoutContainer>
			<Component {...pageProps} />
		</LayoutContainer>
	);
}
