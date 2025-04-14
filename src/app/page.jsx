import Homepage from "@components/homepage/Homepage";
import AddNote from "@components/addnote/AddNote";

const page = () => {
  return (
    <div id="main" className="flex">
      <Homepage />
      <AddNote />
    </div>
  );
};

export default page;
