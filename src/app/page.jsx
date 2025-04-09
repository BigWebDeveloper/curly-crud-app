"use client";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFolderOutline } from "react-icons/io5";
import { useGlobalContext } from "@context/globalContext";
import { configureStore } from "@reduxjs/toolkit";
import { allNotes } from "@context/Data";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { store } from "@redux";
import { useParams } from "next/navigation";

const page = () => {
  const { isFolderEdit, setIsFolderEdit } = useGlobalContext();
  const folder = store.getState();
  console.log(store.getState());

  return (
    <div id="main" className="grid gap-3 ">
      <div className="flex items-center text-[#c57f17]">
        <p
          onClick={() => setIsFolderEdit((prev) => !prev)}
          className="flex text-[#c57f17] cursor-pointer ml-auto"
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
        <div className="overflow-hidden">
          <Link
            href={`/`}
            className="relative flex gap-3 items-center rounded-t-md hover:bg-[#bebebe] py-3 px-4"
          >
            <IoFolderOutline size={20} className="text-[#c57f17]" />
            <p>Notes</p>
            <div className="ml-auto flex items-center">
              <p>14</p>
              <MdKeyboardArrowRight size={25} />
              <hr className="w-full border-[#bebebe] absolute left-10 bottom-0" />
            </div>
          </Link>
        </div>

        {folder.map((items, index) => {
          let last = index + 1 == folder.length;
          console.log(index==0);
          const title = items.title
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s+/g, "-")
            .toLowerCase();
          return (
            <div key={index} className="relative">
              <Link
                href={title}
                className={`relative
              } flex gap-3 items-center ${last&&"rounded-b-md"} overflow-hidden hover:bg-[#bebebe] py-3 px-4`}
              >
                <IoFolderOutline size={20} className="text-[#c57f17]" />
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
              <Dropdown />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
