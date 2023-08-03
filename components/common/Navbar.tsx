import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 col-span-full">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <img src="/circonus-logo-full-color-for-light-background.svg" alt="logo" className="h-16" />
        </a>
      </div>
      
    </div>
  );
};
export default Navbar;