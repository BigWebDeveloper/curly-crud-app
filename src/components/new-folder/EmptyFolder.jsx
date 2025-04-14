

const EmptyFolder = (item) => {
    const {isEmptyData,setIsEmptyData,titleLogic,contentLogic} = item
  return (
    <div
    id="empty-folder"
    className={`w-full justify-center items-center bg-[#3f3f3f0c] h-full absolute -top-5 left-0 ${
      isEmptyData ? "flex" : "hidden"
    }`}
  >
    <div
      className={`bg-white w-2/3 text-center rounded-2xl overflow-hidden`}
    >
      <div className="p-4 px-9" style={{ lineHeight: "1.3rem" }}>
        <p className="font-bold">{titleLogic}</p>
        <span className="text-sm">{contentLogic}</span>
      </div>

      <button
        className="orange block w-full cursor-pointer m-auto p-2 border-t-1 border-[#97979744]"
        onClick={() => setIsEmptyData(() => false)}
      >
        Ok
      </button>
    </div>
  </div>
  )
}

export default EmptyFolder