"use client";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { RiEditBoxLine } from "react-icons/ri";
import MainFolder from "@components/main-folder/MainFolder";

import { useParams } from "next/navigation";

const MainPage = () => {
  const paramId = useParams();
  console.log(paramId);

  return (
    <div>
      <MainFolder />
    </div>
  );
};

export default MainPage;
