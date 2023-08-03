import React from "react";
import { BasePage } from "../components/common/types";
import { getLogger } from "../components/logging/log-util";

const HomePage: BasePage = () => {
  const logger = getLogger("home");


  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to NextJS Multiple Layouts Tutorial
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
HomePage.Layout = "Main";
