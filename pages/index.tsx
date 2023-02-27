import Head from 'next/head';

import styles from '@/pages/index.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Roman numeral calculator</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
}
