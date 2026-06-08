import React from "react";
import Tags from "../components/Tags"

const Addedit = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-black/80">Title</label>
        <input placeholder="Title" className="outline-none text-slate-950 text-xl font-semibold bg-white"/>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-black/80 ">Content</label>
        <textarea placeholder="content" rows={10} className="outline-none text-xl"/>
      </div>
      <div className="flex flex-col gap-4">
        <Tags/>
      </div>
      <button className="bg-blue-500 rounded-md font-medium text-white px-3 py-2" onClick={()=>{}}>ADD</button>
    </div>
  );
};

export default Addedit;
