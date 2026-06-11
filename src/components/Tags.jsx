import React, { useState } from "react";
import { Plus,X } from "lucide-react";
const Tags = ({tags,setTags}) => {
  const [tag, setTag] = useState("");
  

  const handleTag = () => {
    const formattedTag = tag.trim();
    if(!formattedTag) return;
    if (tags.includes("#"+formattedTag)) {
      setTag("");
      return;
    }
    setTags((prev) => [...prev,"#"+ tag]);
    setTag("");
  };

  const removeTag = (id)=>{
    setTags((prev)=>(
        prev.filter((_,index)=>index!==id)
    ))
  }
  return (
    <div className="flex justify-between flex-col gap-2">
        <div className="flex justify-start gap-2 flex-wrap">
      {tags.map((t,index) => (
        <div key={index} className="flex p-1 bg-slate-100 text-black/70 rounded-md gap-2">
        <p >{t}</p>
        <button className="cursor-pointer" onClick={()=>removeTag(index)}><X size={16}/></button>
        </div>
      ))}
      </div>

      <div className="flex justify-start items-center gap-16">
        <input
        value={tag}
          placeholder="Tags"
          className="border text-black/50 bg-white p-1"
          onChange={(e) => {
            setTag(e.target.value);
          }}
          onKeyDown={(e)=>{e.key==="Enter" && handleTag}}
        />
        <button
          className="text-white bg-blue-500 p-1 rounded-md cursor-pointer"
          onClick={handleTag}
          
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default Tags;
