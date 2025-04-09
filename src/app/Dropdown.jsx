"use client";
import React from "react";
import { useGlobalContext } from "@context/globalContext";
import { FaPen } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { useState } from "react";

const Dropdown = () => {
  const { isFolderEdit, isDropdownHome } = useGlobalContext();
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div
      className={`absolute mr-4 ${
        isFolderEdit ? "right-0" : "hidden"
      } transition-all delay-30 top-0 ease-out w-12 h-12`}
    >
      <CiCircleMore
        size={50}
        className="p-[13px] text-[#c57f17] cursor-pointer"
        onClick={() => setIsDropdown((prev) => !prev)}
      />
      <div
        id="dropdown"
        className={`${
          isDropdown ? "block" : "hidden"
        } w-38 group-hover:block rounded-md z-2 top-12 shadow-2xl overflow-hidden right-0 absolute bg-white`}
        onClick={() => setIsDropdown(false)}
      >
        <div className="flex p-2 py-3 px-4 hover:bg-[#bebebe] relative items-center justify-between">
          <span>Rename</span>
          <span>
            <FaPen size={10} />
          </span>
          <hr className="absolute w-full bottom-0 left-0 border-[#bebebe]" />
        </div>
        <div className="flex p-2 relative py-3 hover:bg-[#bebebe] px-4 items-center justify-between ">
          <span>Group by date</span>
          <span>
            <FaPen size={10} />
          </span>
          <hr className="absolute w-full bottom-0 border-[#bebebe] left-0" />
        </div>
        <div className="flex p-2 relative py-3 hover:bg-[#bebebe] px-4 items-center justify-between ">
          <span>Delete</span>
          <span>
            <FaPen size={10} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
