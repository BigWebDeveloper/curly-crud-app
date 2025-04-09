import React from "react";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { RiEditBoxLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="flex justify-between bottom-0">
      <HiOutlineFolderAdd size="20" className="cursor-pointer text-[#c57f17]" />
      <RiEditBoxLine size="19" className="cursor-pointer text-[#c57f17]" />
    </div>
  );
};

export default Footer;
