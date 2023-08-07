import { NextApiRequest, NextApiResponse } from 'next'
import { getLogger } from "../../components/logging/log-util";
import { AccountService} from "../../lib/account-service/AccountService"
import { AddAccountRequest, AddAccountResponse } from '../../lib/buf/circonus/account/v2/service_pb';
import { Account } from '../../lib/buf/circonus/account/v2/account_pb';


const service = AccountService()
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  

  const logger = getLogger("account-handler-api");
  logger.debug('Handling Request')

  const { firstName, lastName, email, domain, slug } = req.body
  logger.debug(`firstName: ${firstName} | lastName: ${lastName} | email: ${email} | domain: ${domain} | slug: ${slug}`)


  const acct = new Account({
    name: name,
    email: email,
    adminFirstName: firstName,
    adminLastName: lastName,
    adminEmail: email,
    emailDomain: domain,
  })
  const a = new AddAccountRequest({
    account: acct
  })


  const addAccountRes = service.AddAccount(a)
  logger.debug(`addAccountRes: ${addAccountRes}`)
  res.status(200).json(addAccountRes)
}
 
export default handler