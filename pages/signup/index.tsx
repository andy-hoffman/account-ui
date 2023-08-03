import React from "react";
import { BasePage } from "../../components/common/types";
import AccountSignup from "../../components/account/AccountSignup";
import AccountSignupSuccess from "../../components/account/AccountSignupSuccess";

import { getLogger } from "../../components/logging/log-util";
import { useSearchParams } from 'next/navigation'


const SignupPage: BasePage = () => {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')

  const logger = getLogger('signup');
  logger.debug('Loading signup')



  return (
    <div className="container">
      <div className="grid min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <AccountSignup />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
SignupPage.Layout = "Main";
