
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Heading, Spinner, Center } from "@chakra-ui/react";
import PostCard from "../components/PostCard.jsx";

const HomePage = () => {
  const [posts, setPosts] = useState(null);
  
  async function getPosts(){
    axios.get('https://dummyjson.com/posts').then((res) => {
      setPosts(() => res.data.posts)
    })
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }
  
  return (
    posts?.map((post,key) =>(
      <PostCard post={post} setPosts={setPosts} key={key} />
    ))
  );
};

export default HomePage;
