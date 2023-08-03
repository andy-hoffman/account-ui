import React from "react";
import Link from "next/link";
import { getLogger } from "../../components/logging/log-util";
 

const AccountSignupSuccess = () => {
  return (
    <>
    <div className="flex flex-col gap-y-5 col-span-8 mt-1">
      <h1>Welcome to Circonus!</h1>
      <p>
        Your account has been created. Please check your email for a
        confirmation link.
      </p>
    </div>
    </>
  );
};

export default AccountSignupSuccess;