import { render } from "solid-js/web";
import { lazy } from "solid-js";

// import Greeting from "./greeting"
const Greeting = lazy(async () => {
  // 遅延をシミュレート
  await new Promise((r) => setTimeout(r, 1000));
  return import("./greeting");
});

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Greeting name="Jake" />
    </>
  );
}

render(() => <App />, document.getElementById("app"));
