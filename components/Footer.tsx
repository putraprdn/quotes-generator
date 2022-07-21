import React from "react";
import { RiGithubFill } from "react-icons/ri";
import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span>Crafted with ❤ by</span>
			<a
				className={styles.link}
				href="https://github.com/putraprdn"
				target="_blank"
				rel="noopener noreferrer"
			>
				<RiGithubFill />
			</a>
		</footer>
	);
};

export default Footer;
