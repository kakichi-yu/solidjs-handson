import { render } from "solid-js/web";
import { ErrorBoundary } from "solid-js";

const Broken = (props) => {
  throw new Error("Oh No");
  return <>ここには到達しない</>;
};

function App() {
  return (
    <>
      <div>Before</div>
      // errを表示するfallback
      <ErrorBoundary fallback={(err) => err}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
}

render(() => <App />, document.getElementById("app"));
