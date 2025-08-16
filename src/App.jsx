import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import Active from "./componets/Active";
import Cards from "./componets/Cards";
import Header from "./componets/header";
import Reset from "./componets/Reset";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");
  const cardsRef = useRef(null);

  const handleReset = () => {
    if (cardsRef.current) {
      cardsRef.current.resetCards();
    }
  };

  return (
    <>
      <div className="container">
        <Header />

        <div className="content">
          <Active filter={filter} onChangeFilter={setFilter} />
          <Cards filter={filter} ref={cardsRef} />

          {/* Reset button right after cards */}
          <Reset onReset={handleReset} />
        </div>
      </div>
    </>
  );
}

export default App;
