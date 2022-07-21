import { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { GrTumblr } from "react-icons/gr";
import styles from "../styles/Card.module.css";
import Icon from "./Icon";
import Text from "./Text";

type Props = {
	quotes: {
		text: string;
		author: string;
	}[];
};

const Card = ({ quotes }: Props) => {
	const [newQuotes, setNewQuotes] = useState({
		text: "You need some quotes? You must be depressed af lol",
		author: "jk, stay slay 💅🏻",
	});
	const [color, setColor] = useState("#16a085");

	const tumblrLink =
		"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
		encodeURIComponent(newQuotes.author) +
		"&content=" +
		encodeURIComponent(newQuotes.text) +
		"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
	const twitterLink =
		"https://twitter.com/intent/tweet?hashtags=quotes&text=" +
		encodeURIComponent('"' + newQuotes.text + '" ' + newQuotes.author);

	const colors = [
		"#16a085",
		"#27ae60",
		"#2c3e50",
		"#f39c12",
		"#e74c3c",
		"#9b59b6",
		"#FB6964",
		"#342224",
		"#472E32",
		"#BDBB99",
		"#77B1A9",
		"#73A857",
	];
	const getRandomQuotes = () => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // get a quote by random
		const randomColor = colors[Math.floor(Math.random() * colors.length)]; // get a color by random
		setColor(randomColor);
		setNewQuotes(randomQuote);
	};

	return (
		<div className={styles.card} id="quote-box">
			<Text color={color} quotes={newQuotes} />
			<div style={{ display: "flex", columnGap: "15px" }}>
				<Icon link={twitterLink} color={color} as={<BsTwitter />} />
				<Icon link={tumblrLink} color={color} as={<GrTumblr />} />
				<div style={{ marginLeft: "auto" }}>
					<button
						id="new-quote"
						className={styles.btn}
						onClick={getRandomQuotes}
						style={{ backgroundColor: color }}
					>
						New Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
