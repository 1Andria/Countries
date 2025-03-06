import { useState } from "react";
import Header from "../../__molecules/Header/Header";
import FindBar from "../../__molecules/FindBar/FindBar";

function Container() {
  const [DarkMode, setMode] = useState(false);

  function SwitchMode() {
    setMode(!DarkMode);
  }
  return (
    <>
      <div
        className={`w-full min-h-screen h-full ${
          DarkMode ? "bg-[#202C36]" : "bg-white"
        }`}
      >
        <Header SwitchMode={SwitchMode} DarkMode={DarkMode} />

        <FindBar DarkMode={DarkMode} />
      </div>
    </>
  );
}

export default Container;
