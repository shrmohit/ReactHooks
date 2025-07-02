import { Button } from "@/components/ui/button"
import First from "./components/Hooks/first"
import { createContext } from "react"
import Second from "./components/Hooks/second";
import UseStateHook from "./components/Hooks/UseStateHook";
import Card from "./components/Hooks/Card";
import UseEffectHooks from "./components/Hooks/UseEffectHooks";

// create usecontext ko
export let myContext = createContext();

function App() {
  const name = [{ name: "mohit" }, { name: "rohit" }]
  const age = [{ age: 12 }, { age: 23 }];

  const valueBundle = { name, age };
  return (
    <div >
      {/* <myContext.Provider value={valueBundle}>
        <First />
        <Second />
      </myContext.Provider>
      <UseStateHook />
      <Card name="data">
        <h1>hello mohit</h1>
        <p>you leaning props as a children and function</p>
      </Card> */}
      {/* <UseEffectHooks /> */}
    </div>
  )
}

export default App