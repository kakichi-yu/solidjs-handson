import { render } from "solid-js/web";
import { createSignal, Show, Switch, Match } from "solid-js";

function App() {
  const [x] = createSignal(7);

  return (
    // <Show
    //   when={x() > 10}
    //   fallback={
    //     <Show
    //       when={5 > x()}
    //       fallback={<p>{x()} is between 5 and 10</p>}
    //     >
    //       <p>{x()} is less than 5</p>
    //     </Show>
    //   }
    // >
    //   <p>{x()} is greater than 10</p>
    // </Show>

    <Switch fallback={<p>{x()} is between 5 and 10</p>}>
      <Match when={x() > 10}>
        <p>{x()} is greater than 10</p>
      </Match>
      <Match when={5 > x()}>
        <p>{x()} is less than 5</p>
      </Match>
    </Switch>
  );
}

render(() => <App />, document.getElementById("app"));
