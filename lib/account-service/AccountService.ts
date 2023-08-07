
import { emitterFor, HTTP, httpTransport, Mode, CloudEvent, Emitter } from "cloudevents";
import { getLogger } from "../../components/logging/log-util";
import axios from 'axios';
import * as AxiosLogger from 'axios-logger';


const instance = axios.create();
AxiosLogger.setGlobalConfig({
  prefixText: 'axios',
  dateFormat: 'HH:MM:ss',
  status: true,
  headers: true,
  data: true,
});

const logger = getLogger("account-service");



instance.interceptors.response.use(AxiosLogger.responseLogger);

const Account = require('../buf/circonus/account/v2/service_pb').Account;
const AddAccountRequest = require('../buf/circonus/account/v2/service_pb').AddAccountRequest

export const AccountService = () => {
  return {
    AddAccount: (request: typeof AddAccountRequest) : Boolean  => {
      let ce = new CloudEvent({ 
        type: "com.circonus.account.newAccountRequest",
        source: "github.com/circonus/account-ui",
        data: request,
        time: new Date().toISOString(),
        specversion: "1.0",
        mode: Mode.BINARY,

      });
      const message = HTTP.binary(ce); // Or HTTP.structured(ce)
      axios.request({
        method: "POST",
        url: "http://account-domain-handler-service.account.svc.cluster.local",
        data: message.body,
        headers: message.headers,
      }).then((response: any) => {
        logger.info(`response: ${response.data}`)
        return true;
      }).catch((error: any) => {
        logger.error(`error: ${error.response.data}`)
        return false;
      })

      return true;
    } 
  }
}
