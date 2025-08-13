import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Active from "./componets/Active";
import Cards from "./componets/Cards";
import Header from "./componets/header";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div className="container ">
        <Header />

        <div className="content ">
          <Active filter={filter} onChangeFilter={setFilter} />
          <Cards filter={filter} />
        </div>
      </div>
    </>
  );
}

export default App;
