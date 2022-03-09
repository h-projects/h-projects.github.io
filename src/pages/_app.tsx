import '../styles/normalize.css';
import '../styles/_app.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
