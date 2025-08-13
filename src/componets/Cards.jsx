import { useState } from "react";
import data from "./data.json";
import ToggleButton from "./activeToggelInCard";

const Cards = ({ filter }) => {
  const [activeByIndex, setActiveByIndex] = useState(() =>
    data.map(
      (_, index) => localStorage.getItem(`toggel${index}`) === "activated"
    )
  );

  const handleToggle = (index) => {
    setActiveByIndex((prev) => {
      const next = [...prev];
      next[index] = !prev[index];
      localStorage.setItem(
        `toggel${index}`,
        next[index] ? "activated" : "inActive"
      );
      return next;
    });
  };

  const shouldShow = (index) => {
    if (filter === "active") return !!activeByIndex[index];
    if (filter === "inactive") return !activeByIndex[index];
    return true;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-4">
      {data.map((item, index) => {
        if (!shouldShow(index)) return null;
        return (
          <div
            key={index}
            className="card p-4 flex flex-col justify-between rounded-lg shadow-lg fade-in"
          >
            <div className="cardContent flex items-center gap-3 ">
              <img src={item.logo} />
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="parargraph">{item.description}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="px-4 py-1 m-1 remove rounded-full hover:bg-gray-500 transition-colors duration-200">
                Remove
              </button>
              <ToggleButton
                active={!!activeByIndex[index]}
                onToggle={() => handleToggle(index)}
                buttonId={index + 1}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
