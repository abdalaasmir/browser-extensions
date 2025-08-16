import DarkModeTogel from "./DarkModeToggel";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header flex items-center justify-between p-5 m-5">
        <div className="font-bold">Extensions</div>
        <DarkModeTogel />
      </header>
    </div>
  );
};

export default Header;
