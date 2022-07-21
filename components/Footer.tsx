import React from "react";
import { RiGithubFill } from "react-icons/ri";
import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			Crafted with 🤍 by
			<a className={styles.link} href="https://github.com/putraprdn" target="_blank">
				<RiGithubFill />
			</a>
		</footer>
	);
};

export default Footer;
