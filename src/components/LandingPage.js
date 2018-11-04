import React from "react";
import styles from "./styles/LandingPage.module.css";

const LandingPage = () => {
	return (
		<div className={styles.background}>
			<header className={styles.header}>
				<img
					className={styles.bikeIcon}
					src={require("../assets/bike.svg")}
					alt="bike icon"
				/>
				<h1 className={styles.h1_PDX}>
					PDX <span className={styles.h1_Rides}>Rides</span>
				</h1>
			</header>
			<div className={styles.verticalRule} />
			<p className={styles.introDescription}>
				Portland, OR is known to be one of the best cities in the US for
				bicyclists. Scroll to learn more about Portland bike culture and see why
				Portlanders love their two-wheeled friends.
			</p>
		</div>
	);
};

export default LandingPage;
