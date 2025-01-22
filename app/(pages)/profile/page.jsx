"use client";
import Profile from "@components/elements/profile/Profile";
import LoadingWrapper from "@components/ui/loading-wrapper/LoadingWrapper";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const { data: session, status } = useSession();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const getMyPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setMyPosts(data);
    };
    if (session?.user.id) getMyPosts();
  }, [session?.user.id]);
  return (
    <section>
      <LoadingWrapper isLoading={status == "loading"}>
        <Profile
          image={session?.user.image}
          name={session?.user.name}
          email={session?.user.email}
          data={myPosts}
        />
      </LoadingWrapper>
    </section>
  );
};

export default MyProfile;
