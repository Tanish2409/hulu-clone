import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requestsObj from '../utils/requests';

export default function Home({ results }) {
	return (
		<div>
			<Head>
				<title>Hulu 2.0</title>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			</Head>

			<Header />

			<Nav />

			<Results results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3${
			requestsObj[genre]?.url || requestsObj.fetchTrending.url
		}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
}
