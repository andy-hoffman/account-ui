import React from "react";
import Link from "next/link";
import { getLogger } from "../../components/logging/log-util";
import { useRouter } from "next/router";
import AccountSignupForm from "./AccountSignupForm"
import AccountSingupSuccess from "./AccountSignupSuccess";
import { NextResponse } from "next/server";



const AccountSignup = () => {
  const router = useRouter();
  const { success } = router.query;
  let content;
  const handleSubmit = async (event: any ) => {
    console.log("Handling submit");
    const logger = getLogger("Accoung-Signup");
    logger.debug("Handling submit", "event", event);
    // Prevent the default browser behavior of forms.
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      name: event.target.name.value,
      email: event.target.email.value,
      domain: event.target.domain.value,
      slug: event.target.name.value,
    }
    
    event.preventDefault()


    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
 
    // API endpoint where we send form data.
    const endpoint = '/api/account'
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
 
    // Send the form data to our forms API on Vercel and get a response.
    await fetch(endpoint, options).then((response) => {
      router.push('/signup?success=true')
    })
  };

  const form = 
  <>
  <h1 className="text-6xl">Sign Up</h1>
  <form
    className="flex flex-col gap-y-5 col-span-8 mt-1"
    onSubmit={handleSubmit}
  >
    <AccountSignupForm />
  </form>
  </>

  if( success == "true" ) {
    content = <AccountSingupSuccess />
  }
  else {
    content = form;
  }

  return (
    content
  );
};

export default AccountSignup;