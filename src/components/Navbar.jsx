import React, { useState } from "react";
import { NotebookText, LogOut } from "lucide-react";
import Profile from "./Profile";
import { useNavigate } from "react-router";
import SearchBar from "./SearchBar";

const Navbar = ({ userInfo,onSearch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  const [search, setSearch] = useState("");

  const onchange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if(search){
      onSearch(search);
    }
  };

  const reset = () => {
    setSearch("");
  };

  return (
    <div className="grid grid-rows-2 gap-y-4 grid-col-2 md:flex bg-white drop-shadow-2xl w-full px-6 py-2 md:justify-between md:items-center fixed top-0 z-0">
      <div className="row-start-1 flex items-center">
        <NotebookText />
        <h1 className=" text-xl font-semibold text-black py-2">Notes</h1>
      </div>

        {
          userInfo && (<div className="row-start-2 col-span-2 md:block">
        <SearchBar
          value={search}
          handleSearch={handleSearch}
          reset={reset}
          onChange={onchange}
        />
      </div>
)
        }
      
      <div className="row-start-1 cols-start-2 justify-self-end md:block">
        <Profile userInfo={userInfo} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Navbar;
