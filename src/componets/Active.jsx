import NavActive from "./navActive";
import NavAll from "./navAll";
import NavInactive from "./navInactive";
const Active = ({ filter, onChangeFilter }) => {
  return (
    <>
      <div className="listOfActive p-5 m-5">
        <div className="grid grid-cols-2 items-center">
          <h1 className="text-lg font-bold">Extension List</h1>

          <div className="flex gap-3 justify-end">
            <NavActive isActive={filter === "active"} onClick={() => onChangeFilter("active")} />
            <NavAll isActive={filter === "all"} onClick={() => onChangeFilter("all")} />
            <NavInactive isActive={filter === "inactive"} onClick={() => onChangeFilter("inactive")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Active;
