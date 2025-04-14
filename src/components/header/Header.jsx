"use client"
import { useGlobalContext } from "@context/globalContext";
import { useParams } from "next/navigation";import { MdKeyboardArrowLeft } from "react-icons/md";

const Header = () => {
    const {setIsFolderEdit} = useGlobalContext()
    const {noteId} = useParams()
  return (
    <div className="flex items-center orange">
      <p><MdKeyboardArrowLeft size={25} /></p>
      <p
        onClick={() => setIsFolderEdit((prev) => !prev)}
        className="flex orange cursor-pointer ml-auto"
      >
        Edit
      </p>
    </div>
  );
};

export default Header;
