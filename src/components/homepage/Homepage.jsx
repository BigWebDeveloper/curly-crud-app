"use client";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFolderOutline } from "react-icons/io5";
import { useGlobalContext } from "@context/globalContext";
import { useState } from "react";
import { useEffect } from "react";
import { store, deleteFolder } from "@redux";
import Link from "next/link";
import Dropdown from "./Dropdown";


const Homepage = () => {
      const { isFolderEdit, setIsFolderEdit, isAddNote, setIsAddNote } =
        useGlobalContext();
      const [folder, setFolder] = useState([]);
    
      useEffect(() => {
        setFolder(store.getState());
      });
    
      const handleDelete = (f) => {
        store.dispatch(deleteFolder(f));
        setFolder(store.getState());
      };
  return (
    <div className={`grid gap-3 transition-all delay-30 ease-out ${isAddNote?"w-0 overflow-hidden":"w-sm"}`}>
    <div className="flex items-center orange">
      <p
        onClick={() => setIsFolderEdit((prev) => !prev)}
        className="flex orange cursor-pointer ml-auto"
      >
        Edit
      </p>
    </div>
    <p className="font-bold text-3xl">Folders</p>
    <label className="flex items-center rounded-md bg-[#bebebe] px-3 text-[#747474]">
      <FaSearch size={20} />
      <input
        placeholder="Search"
        type="text"
        name="search"
        id="search"
        className="text-black focus:outline-none py-2 px-2 w-full"
      />
      <FaMicrophone className="cursor-pointer" />
    </label>

    <div id="notes" className=" rounded-md bg-[#f1f1f1]">
      {folder.map((items, index) => {
        let last = index + 1 == folder.length;
        const title = items.title
          .replace(/[^a-zA-Z0-9\s]/g, "")
          .replace(/\s+/g, "-")
          .toLowerCase();
        return (
          <div key={index} className="relative">
            <Link
              href={title}
              className={`relative
          } flex gap-3 items-center ${
            last && "rounded-b-md"
          } overflow-hidden hover:bg-[#bebebe] py-3 px-4`}
            >
              <IoFolderOutline size={20} className="orange" />
              <p className="" style={{ textTransform: "capitalize" }}>
                {items.title}
              </p>
              <div className={`ml-auto`}>
                <div
                  className={`${
                    isFolderEdit ? "opacity-0" : "opacity-100"
                  } flex items-center`}
                >
                  <p>{items.notes.length}</p>
                  <MdKeyboardArrowRight size={25} />
                </div>
                {!last && (
                  <hr className="w-full left-12 border-[#a5a5a5] absolute bottom-0" />
                )}
              </div>
            </Link>
            <Dropdown title={items.title} handleDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Homepage