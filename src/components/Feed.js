import React, { useEffect, useState } from "react";
import "../Css/Feed.css";
import db from "../firebase";
import Post from "./Post";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import QuoraBox from "./QuoraBox";

function Feed() {
  const [posts, setPosts] = useState([]);

  //➡️➡️ The useEffect hook is used to subscribe to the changes in the questions collection in the Firebase database. It uses the query function from Firebase to create a query that sorts the questions collection in descending order based on the timestamp field. It then uses the onSnapshot function from Firebase to listen for the changes in the questions collection and updates the posts array whenever there are changes. The useEffect hook returns a function that unsubscribes from the snapshot listener when the component unmounts.
  useEffect(() => {
    const q = query(collection(db, "questions"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          questions: doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);
  console.log(posts);

  return (
    <div className="feed">
      <QuoraBox />
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          image={questions.imageUrl ? questions.imageUrl : null}
          question={questions.question}
          timestamp={questions.timestamp}
          quoraUser={questions.user}
        />
      ))}
    </div>
  );
}

export default Feed;
