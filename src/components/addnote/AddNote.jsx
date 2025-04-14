"use client";
import { useGlobalContext } from "@context/globalContext";
import { MdKeyboardArrowLeft } from "react-icons/md";

const AddNote = () => {
  const { setIsFolderEdit, isAddNote, setIsAddNote} = useGlobalContext();
  return (
    <div
      className={`transition-all delay-30 ease-out ${
        isAddNote ? "w-sm" : "overflow-hidden w-0"
      }`}
    >
      <div className="flex items-center orange">
        <p onClick={() => setIsAddNote(false)} className="flex items-center cursor-pointer">
          <MdKeyboardArrowLeft size={25} />
          <span>Folder</span>
        </p>
        <p
          onClick={() => setIsFolderEdit((prev) => !prev)}
          className="flex orange cursor-pointer ml-auto"
        >
          Edit
        </p>
      </div>
      <div>fghfghfvgh</div>
    </div>
  );
};

export default AddNote;
