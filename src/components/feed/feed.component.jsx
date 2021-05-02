import { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./feed.styles.scss";
import InputOption from "./input-option/input-option.component";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../post/post.component";
import { db } from "../../firebase/firebase";
import firebase from "firebase";

function Feed() {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				);
			});
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			name: "Talal Anwar",
			description: "this is a test",
			message: input,
			photoUrl: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div className="feed">
			{/* top input container */}
			<div className="input-container">
				<div className="input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={(e) => sendPost(e)} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="input-options">
					<InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
					<InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
					<InputOption
						Icon={CalendarViewDayIcon}
						title="Write Article"
						color="#7fc15e"
					/>
				</div>
			</div>
			{/* posts container */}
			{posts.map(
				({ id, data: { name, description, message, photoUrl, timestamp } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
						timestamp={timestamp}
					/>
				)
			)}
			{/* <Post
				name="Talal Anwar"
				description="This is a test."
				message="wow this workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis workedthis worked"
			/> */}
		</div>
	);
}

export default Feed;