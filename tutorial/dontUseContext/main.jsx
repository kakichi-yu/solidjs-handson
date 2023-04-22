import { render } from "solid-js/web";
import counter from "./counter";

function Counter() {
  return (
    <button type="button" onClick={counter.increment}>
      {counter.count()} {counter.doubleCount()}
    </button>
  );
}

render(() => <Counter />, document.getElementById("app"));
