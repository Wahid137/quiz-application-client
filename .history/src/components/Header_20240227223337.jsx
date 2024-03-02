import React from "react";

const Header = () => {
  return (
    <header className="h-16 flex items-center shadow-sm">
      <nav className="flex justify-between items-center w-9/12 mx-auto">
        <div className="text-zinc-800 font-bold uppercase">
          <h1 className="text-lg">
            Quiz <span className="text-green-700">HERO</span>
          </h1>
          <p className="text-[10px] font-normal capitalize -mt-1">
            Get ready to Quiz and be amazed!
          </p>
        </div>
        <button className="bg-green-600 font-light text-sm px-5 py-1 rounded text-white">
          Blog
        </button>
      </nav>
    </header>
  );
};

export default Header;
