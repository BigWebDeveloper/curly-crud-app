"use client"
import { useGlobalContext } from "@context/globalContext";
import { useParams } from "next/navigation";import { MdKeyboardArrowLeft } from "react-icons/md";

const Header = () => {
    const {setIsFolderEdit} = useGlobalContext()
    const {noteId} = useParams()
    console.log(noteId);
  return (
    <div className="flex items-center text-[#c57f17]">
      <p><MdKeyboardArrowLeft size={25} /></p>
      <p
        onClick={() => setIsFolderEdit((prev) => !prev)}
        className="flex text-[#c57f17] cursor-pointer ml-auto"
      >
        Edit
      </p>
    </div>
  );
};

export default Header;
