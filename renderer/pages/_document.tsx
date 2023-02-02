import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<html>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</html>
	);
}
