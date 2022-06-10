import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Axios from "axios";
import React from "react";

const baseURL = "http://localhost:3100/src/json/";

type Post = {
  title: string;
  body: string;
};

const Sectors = () => {
  const [post, setPost] = React.useState<Post | null>(null);

  React.useEffect(() => {
    Axios.get(`${baseURL}/sectors.json`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    Axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return (
    <div>
      <h1>No post!</h1>
    </div>
  )

  return (
    <Box>
      <Typography variant="h3">Dashboard</Typography>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </Box>
  )
}

export default Sectors;