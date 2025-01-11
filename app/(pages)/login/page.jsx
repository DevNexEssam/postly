"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

  import React from 'react'
  
  const page = () => {
    return (
      <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-foreground">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-4 text-primary">
          Create Your Account!
        </h1>
        <p className="text-center text-sm mb-6 text-mainColor">
          Sign up to start your journey with us
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          {/* Google Sign-In Button */}
          <button
            onClick={() => signIn('google' , {redirect : true , callbackUrl : "/"})}
            className="bg-background flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium shadow transition border border-mainColor hover:scale-105"
          >
            <FcGoogle className="mr-3 text-lg" />
            <span className="text-primary">Sign in with Google</span>
          </button>

          {/* GitHub Sign-In Button */}
          <button className="bg-primary text-white flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium shadow transition hover:scale-105">
            <FaGithub className="mr-3 text-lg" />
            <span>Sign in with GitHub</span>
          </button>
        </div>
      </div>
    </div>
    )
  }
  
  export default page
