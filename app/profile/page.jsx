"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
    const router = useRouter();
    const { data:session } = useSession();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        };
        if(session?.user.id) fetchPosts();
      }, []);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed = confirm(
        "Delete Prompt?"
      );
  
      if (hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: "DELETE",
          });
  
          const filteredPosts = myPosts.filter((item) => item._id !== post._id);
  
          setMyPosts(filteredPosts);
        } catch (error) {
          console.log(error); 
        }
      }
    };
    
    return (
    <>
      <Profile
        name="My"
        desc="View, edit or Delete your posts"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default MyProfile;
