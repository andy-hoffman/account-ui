import "../styles/globals.css";
import { BaseAppProps } from "../components/common/types";
import { Layouts } from "../components/common/Layouts";
import { getLogger } from "../components/logging/log-util";

function BaseApp({ Component, pageProps }: BaseAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  const logger = getLogger("app");

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default BaseApp;