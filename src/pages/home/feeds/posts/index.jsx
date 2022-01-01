import Post from "./Post";

import React, { useEffect, useState } from "react";
import "./posts.css";
import { db } from "config/firebaseConfig";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscribe = db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return () => unsubscribe();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          profileSrc={post.data.profileSrc}
          username={post.data.username}
          timestamp={post.data.timestamp}
          content={post.data.content}
          imageSrc={post.data.imageSrc}
        />
      ))}
    </div>
  );
}

export default Posts;
