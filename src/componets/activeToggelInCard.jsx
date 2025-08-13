function ToggleButton({ active, onToggle, buttonId }) {
  return (
    <div className="activateButton">
      <button id={buttonId} className={active ? "toggelActivated" : ""} onClick={onToggle}>
        <span></span>
      </button>
    </div>
  );
}

export default ToggleButton;
