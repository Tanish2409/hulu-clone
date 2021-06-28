import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Hulu 2.0</title>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			</Head>

			{/* Header Component */}
			<Header />

			{/* Nav */}

			{/* Results */}
		</div>
	);
}
