"use client";
import { useGlobalContext } from "@context/globalContext";
import { useState } from "react";
import { store } from "@redux";
import { addFolder } from "@redux";
import EmptyFolder from "./EmptyFolder";

const NewFolder = () => {
  const { isNewFolder, setIsNewFolder } = useGlobalContext();
  const [isEmptyData, setIsEmptyData] = useState(false);
  const [data, setData] = useState("");
  const [titleLogic, setTitleLogic] = useState("");
  const [contentLogic, setContentLogic] = useState("");

  const handleData = (e) => {
    const { value } = e.target;
    setData(value);
  };
  const state = store.getState();

  const handleSubmit = () => {
    const a = data.toLowerCase();
    switch (a) {
      case "": {
        setTitleLogic("Please choose a different name.");
        setContentLogic("Folder names can't be blank.");
        setIsEmptyData(() => true);
        break;
      }
      default: {
        const hasData = state.some((item) => item.title.includes(a));
        if (hasData) {
          setTitleLogic("Name Taken");
          setContentLogic("Please choose a different name.");
          setIsEmptyData(() => true);
        } else {
          store.dispatch(addFolder(a));
          setIsNewFolder(() => false);
        }
        break;
      }
    }
  };

  return (
    <div
      className={`absolute top-0 shadow-2xl ${
        isNewFolder ? "top-5" : "top-300"
      } z-20 w-full left-0 h-full rounded-t-2xl p-2 bg-[#e0e0e0] flex flex-col gap-4 transition-all transit ease-out`}
    >
      <header className="flex justify-between">
        <p
          className="orange cursor-pointer"
          onClick={() => setIsNewFolder(() => false)}
        >
          Cancle
        </p>
        <p className="font-bold">New Folder</p>
        <p className="orange font-bold cursor-pointer" onClick={handleSubmit}>
          Done
        </p>
      </header>
      <div className="">
        <label className="flex items-center rounded-md bg-[#bebebe] px-3 text-[#747474]">
          <input
            placeholder="New Folder..."
            type="text"
            name="new folder"
            id="new-folder"
            value={data}
            onChange={handleData}
            className="text-black focus:outline-none py-2 px-2 w-full"
          />
        </label>
      </div>
      <EmptyFolder
        isEmptyData={isEmptyData}
        setIsEmptyData={setIsEmptyData}
        titleLogic={titleLogic}
        contentLogic={contentLogic}
      />
    </div>
  );
};

export default NewFolder;
