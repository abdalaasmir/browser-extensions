import NavActive from "./navActive";
import NavAll from "./navAll";
import NavInactive from "./navInactive";

const Active = ({ filter, onChangeFilter, onReset }) => {
  return (
    <>
      <div className="listOfActive p-5 m-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 items-center">
          <h1 className="text-lg font-bold text-center sm:text-left">
            Extension List
          </h1>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-end items-center">
            <NavActive
              isActive={filter === "active"}
              onClick={() => onChangeFilter("active")}
            />
            <NavAll
              isActive={filter === "all"}
              onClick={() => onChangeFilter("all")}
            />
            <NavInactive
              isActive={filter === "inactive"}
              onClick={() => onChangeFilter("inactive")}
            />

            {/* Reset Button */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Active;
