import DarkModeTogel from "./DarkModeToggel";
const Header = () => {
  return (
    <header className="header mx-auto flex items-center justify-between p-5 m-5 ">
      <div className="font-bold">Extensions</div>
      <DarkModeTogel />
    </header>
  );
};

export default Header;
