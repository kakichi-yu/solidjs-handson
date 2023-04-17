import { render } from "solid-js/web";
import Info from "./info";

const pkg = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com",
};

function App() {
  return (
    <Info
      // name={pkg.name}
      // version={pkg.version}
      // speed={pkg.speed}
      // website={pkg.website}
      {...pkg}
    />
  );
}

render(() => <App />, document.getElementById("app"));
