"use client";

import Profile from "@/components/Profile";

const UserProfile = () => {
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={[]}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  )
}

export default UserProfile;