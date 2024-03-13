import React from "react";
import ButtonComponent from "./ButtonComponent";
import {
  ai,
  flamingo,
  github,
  home,
  lists,
  messages,
  more,
  notifications,
  profile,
  search,
} from "./Icons/index";

const NavbarMain = () => {
  return (
    <div className="h-screen bg-black w-1/5 flex flex-col items-start fixed select-none">
      <div className="flex items-center font-bold">
        <img
          src={flamingo}
          alt="flamingo"
          className="w-12 h-12 m-4 filter invert"
        />
        <h1 className="text-white text-xl">FlamingoPost</h1>
      </div>
      <ButtonComponent title="Home" icon={home} />
      <ButtonComponent title="Explore" icon={search} />
      <ButtonComponent title="Notifications" icon={notifications} />
      <ButtonComponent title="Messages" icon={messages} />
      <ButtonComponent title="AI" icon={ai} />
      <ButtonComponent title="Lists" icon={lists} />
      <ButtonComponent title="Premium" icon={flamingo} />
      <ButtonComponent title="More" icon={more} />
    </div>
  );
};

export default NavbarMain;
