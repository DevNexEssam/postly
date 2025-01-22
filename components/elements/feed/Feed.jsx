"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "../prompt-card/PromptCard";

const PromptLists = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <PromptLists data={posts} />
    </section>
  );
};

export default Feed;
