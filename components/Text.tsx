import React from "react";
import styles from "../styles/Text.module.css";
import { ImQuotesLeft } from "react-icons/im";
import { BsDash } from "react-icons/bs";

type Props = {
	quotes: {
		text: string;
		author: string;
	};
	color: string;
};

const Text = ({ quotes, color }: Props) => {
	console.log(color);

	return (
		<div className={styles.quoteWrapper}>
			<h3 id="text" className={styles.quote} style={{ color: color }}>
				<span style={{ marginRight: "12px" }}>
					<ImQuotesLeft
						fontSize="2.2rem"
						style={{ marginBottom: "10px" }}
					/>
				</span>
				{quotes.text}
			</h3>
			<p id="author" className={styles.author}style={{ color: color }}>
				<span>
					<BsDash />
				</span>
				{quotes?.author || 'Some cool dude'}
			</p>
		</div>
	);
};

export default Text;
