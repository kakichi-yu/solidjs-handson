import { render } from "solid-js/web";
import { createSignal, For } from "solid-js";

function App() {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat", text: "ab" },
    { id: "z_AbfPXTKms", name: "Maru", text: "bd" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat", text: "c" },
  ]);

  return (
    <ul>
      <Index each={cats()}>
        {(cat, i) => (
          <li>
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${cat.id}`}
            >
              {i() + 1}: {cat.name}
            </a>
            <input value={cat.text} />
          </li>
        )}
      </Index>
    </ul>
  );
}

render(() => <App />, document.getElementById("app"));
