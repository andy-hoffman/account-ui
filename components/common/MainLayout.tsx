import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="col-span-full m-8 ">
      <Navbar/>
      </div>
      <main>{children}</main>
    </>
  );
};
export default MainLayout;