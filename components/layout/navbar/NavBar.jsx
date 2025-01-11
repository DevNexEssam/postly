"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";
import { useState } from "react";

const NavBar = () => {
  const [openPorfile, setOpenPorfile] = useState(false);
  const { data: session } = useSession();

  const toggleMenuPorfile = () => {
    setOpenPorfile(!openPorfile);
  };
  return (
    <nav className="py-5 fixed left-0 right-0 top-0">
      <div className="container">
        {/* FLEX */}
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div>
            <Link href="/" className="flex items-center gap-1">
              <span>
                <Image
                  src="/icon.png"
                  alt="logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </span>
              <span className="text-primary font-bold text-[22px]">Postly</span>
            </Link>
          </div>
          {/* LINKS LAGRE SCREEN */}
          <div className=" hidden md:flex items-center gap-5">
            <div className="flex gap-4 items-center">
              <Link
                href={session?.user ? "/create-prompt" : "/login"}
                className="bg-mainColor text-white text-[15px] py-[12px] px-[20px] rounded-full capitalize hover:bg-mainColor"
              >
                create prompet
              </Link>
              {session?.user ? (
                <button
                  className="bg-transparent text-black text-[15px] py-[12px] px-[20px] rounded-full capitalize border border-mainColor"
                  onClick={() => signOut()}
                >
                  sign out
                </button>
              ) : (
                <Link
                  href="/login"
                  className="bg-transparent text-black text-[15px] py-[12px] px-[20px] rounded-full capitalize border border-mainColor"
                >
                  sign in
                </Link>
              )}
            </div>
            {/* PROFLIE */}
            {session?.user && (
              <div className="relative">
                <Image
                  src={session?.user.image}
                  alt="profile image"
                  width={36}
                  height={36}
                  onClick={toggleMenuPorfile}
                  className="cursor-pointer rounded-full"
                />
                {openPorfile && (
                  <div className="flex flex-col gap-3 absolute left-0 top-10 w-max bg-white py-4 pb-0 rounded-md">
                    <span className="text-primary font-bold text-[15px] px-4">
                      {session?.user.name}
                    </span>
                    <Link
                      href="/profile"
                      className="text-text text-[12px] hover:bg-mainColor px-4 py-1"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/posts"
                      className="text-text text-[12px] hover:bg-mainColor px-4 py-1"
                    >
                      your posts
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* LINKS MOBILE SCREEN */}
          <div className="flex items-center gap-5 md:hidden">
            {/* PROFLIE */}
            <div className="relative">
              <Image
                src={session ? session?.user?.image : "/user.png"}
                alt="profile image"
                width={36}
                height={36}
                onClick={toggleMenuPorfile}
                className="cursor-pointer rounded-full"
              />
              {openPorfile && (
                <div className="flex flex-col gap-3 absolute left-[-100px] top-10 w-max bg-white py-4 rounded-md">
                  {session?.user && (
                    <div className="flex flex-col gap-3">
                      <span className="text-primary font-bold text-[15px] px-4">
                        {session?.user.name}
                      </span>
                      <Link
                        href="/profile"
                        className="text-text text-[12px] hover:bg-mainColor px-4 py-1"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/posts"
                        className="text-text text-[12px] hover:bg-mainColor px-4 py-1"
                      >
                        your posts
                      </Link>
                    </div>
                  )}
                  <div className="flex flex-col gap-4 items-center px-4">
                    <Link
                      href={session?.user ? "/create-prompt" : "/login"}
                      className="bg-mainColor text-white text-[15px] py-[12px] px-[20px] rounded-full capitalize hover:bg-mainColor"
                    >
                      create prompet
                    </Link>
                    {session?.user ? (
                      <button
                        className="bg-transparent text-black text-[15px] py-[12px] px-[20px] rounded-full capitalize border border-mainColor"
                        onClick={() => signOut()}
                      >
                        sign out
                      </button>
                    ) : (
                      <Link
                        href="/login"
                        className="bg-transparent text-black text-[15px] py-[12px] px-[20px] rounded-full capitalize border border-mainColor"
                      >
                        sign in
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
