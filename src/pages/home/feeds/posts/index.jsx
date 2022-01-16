import { Snackbar, Stack } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { db } from "config/firebaseConfig";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./posts.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscribe = db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return () => unsubscribe();
  }, []);

  // snackbar post notification
  const [openSlackbar, setOpenSlackbar] = useState(false);
  const handleCloseSlackbar = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSlackbar(false);
  };

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
          setOpenSlackbar={setOpenSlackbar}
        />
      ))}
      {/* alter success delete post */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openSlackbar}
          autoHideDuration={3000}
          onClose={handleCloseSlackbar}
        >
          <Alert
            onClose={handleCloseSlackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Xóa bài viết thành công!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default Posts;
