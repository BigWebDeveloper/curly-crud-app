"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useGlobalContext } from "@context/globalContext";
import { MdKeyboardArrowLeft } from "react-icons/md";

const page = () => {
  const {back} = useRouter();
  const { setIsFolderEdit } = useGlobalContext();
  const { noteId } = useParams();
  const [noteID, useNoteID] = useState(noteId);
  return (
    <div>
      <div className="flex items-center orange">
        <p onClick={()=>back()} className="flex items-center cursor-pointer">
          <MdKeyboardArrowLeft size={25}/>
          <span>Folder</span>
        </p>
        <p
          onClick={() => setIsFolderEdit((prev) => !prev)}
          className="flex orange cursor-pointer ml-auto"
        >
          Edit
        </p>
      </div>
      <div>{noteID}</div>
    </div>
  );
};

export default page;
