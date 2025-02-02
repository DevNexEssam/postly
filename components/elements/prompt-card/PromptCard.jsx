"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoCopy } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
const PromptCard = ({ post }) => {
  const [copied, setCopied] = useState("");
  const handelCopy = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopied(post.prompt);
    setTimeout(() => {
      setCopied("");
    }, 2000);
  };
  return (
    <div className=" prompt_card ">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handelCopy}>
          <span className="text-mainColor cursor-pointer">
            {copied === post.prompt ? <IoMdDoneAll /> : <IoCopy />}
          </span>
        </div>
      </div>

      <div>
        <p className="my-4 font-satoshi text-sm text-primary">{post.prompt}</p>
        <p
          className="font-inter text-sm text-mainColor cursor-pointer"
          onClick={() => {}}
        >
          {post.tag}
        </p>
      </div>
    </div>
  );
};

export default PromptCard;
