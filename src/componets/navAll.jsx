const NavAll = ({ onClick, isActive }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded ${isActive ? "bg-red-500" : ""}`}
      >
        All
      </button>
    </>
  );
};

export default NavAll;
