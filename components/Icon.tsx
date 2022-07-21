import React from "react";
import styles from "../styles/Icon.module.css";

type Props = {
	as: any;
	color: string;
	link: string;
};

const Icon = ({ as, color, link }: Props) => {
	return (
		<a
			id="tweet-quote"
			target="_blank"
			rel="noopener noreferrer"
			href={link}
			className={styles.wrapper}
			style={{ backgroundColor: color }}
		>
			{as}
		</a>
	);
};

export default Icon;
