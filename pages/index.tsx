import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

type Props = {
	quotes: {
		content: string;
		author: string;
	}; // array of object
};

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch("https://api.quotable.io/random");
	const quotes = await res.json();

	// Pass data to the page via props
	return { props: { quotes } };
}

const Home = ({ quotes }: Props) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Quotes Generator ❤ </title>
				<meta name="description" content="Generate random quotes" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Card quotes={quotes} />
			</main>
			<Footer />
			{/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" /> */}
		</div>
	);
};

export default Home;
