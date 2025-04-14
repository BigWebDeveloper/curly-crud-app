"use client"
import React from "react";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { RiEditBoxLine } from "react-icons/ri";

import { useGlobalContext } from "@context/globalContext";

const Footer = () => {
  const { setIsNewFolder, setIsAddNote, isAddNote} = useGlobalContext();
  return (
    <div className={`justify-between bottom-0 ${isAddNote?"hidden":"flex"}`}>
      <HiOutlineFolderAdd name="new folder" onClick={()=>  setIsNewFolder(()=>true)} size="20" className="cursor-pointer orange" />
      <RiEditBoxLine name="new note" size="19" className="cursor-pointer orange" onClick={()=>  setIsAddNote(()=>true)}/>
    </div>
  );
};

export default Footer;
