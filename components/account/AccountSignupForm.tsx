import React from "react";
import Link from "next/link";
import { getLogger } from "../logging/log-util";
 


const AccountSignupForm = () => {
  return (
    <>
    <div className="flex flex-row gap-x-3 w-full">
    <label className="block">
    <input
      type="text"
      name="firstName"
      multiple
      className="form-input mt-1 h-12 block w-half border-2 sm:w-128 px-3"
      placeholder="First Name"
    />
    </label>
    <label className="block">
    <input
      type="text"
      name="lastName"
      className="form-input mt-1 h-12 block w-half border-2 sm:w-128 px-3"
      placeholder="Last Name"
    />
    </label>
    </div>
    <div className="row gap-x-3 w-full">
    <label className="block">
    <input
      type="email"
      name = "email"
      className="form-input mt-full h-12 w-full border-2 px-3"
      placeholder="Email"
    />
    </label>
    </div>
    <div className="row gap-x-3 w-full">
    <label className="block">
    <input
      type="text"
      name = "name"
      multiple
      className="form-input mt-full h-12 w-full border-2 px-3"
      placeholder="Account Name - (e.g. circ1)"
      pattern="[a-zA-Z0-9\-]{4,12}"
    />
    </label>
    </div>
    <div className="row gap-x-3 w-full">
    <label className="block">
    <input
      type="domain"
      name="domain"
      multiple
      className="form-input mt-full w-full border-2 px-3 h-12"
      placeholder="Company Domain (e.g. circonus.com)"
    />
    </label>
    </div>
    <div className="w-full">
      <button type="submit" name="submit" className="btn-primary h-16 col-span-3 border-2 w-full px-8 text-3xl text-white">
      Get Started
      </button>
    </div>
  </>
  );
};

export default AccountSignupForm;