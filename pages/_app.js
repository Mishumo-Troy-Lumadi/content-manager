import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SideBar from "../components/SideBar"


config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  return (
      <div className="bg-white">
        <Component {...pageProps}/>
      </div>
  );
}

export default MyApp;
