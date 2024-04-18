import Link from "next/link";
import React from "react";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex container">
      <div className="p-4 h-[85vh] bg-violet-400 w-[300px] flex flex-col gap-4">
        <Link href={`/users/profile`}>Profile</Link>
        <Link href={`/users/adress`}>Address</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
