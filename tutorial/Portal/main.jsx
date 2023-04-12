import { render, Portal } from "solid-js/web";
import "./styles.css";

function App() {
  return (
    <div class="app-container">
      <p>サイズが制限されている div の中にあるテキスト</p>
      <Portal>
        <div class="popup">
          <h1>Popup</h1>
          <p>何かの時に必要になるかもしれないテキスト</p>
        </div>
      </Portal>
    </div>
  );
}

render(() => <App />, document.getElementById("app"));
