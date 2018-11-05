import React from "react";
import styles from "./styles/Overview.module.css";

const Overview = () => {
	return (
		<section className={styles.background}>
			<div className={styles.rankingContent}>
				<h2 className={styles.cityName}>Portland, OR</h2>
				<p className={styles.rankingNumber}>
					5<span className={styles.rankingSuperscript}>th</span>
				</p>
				<p className={styles.rankingDescription}>Best City for Bikes</p>
			</div>
		</section>
	);
};

export default Overview;
