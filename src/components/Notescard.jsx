import React from "react";
import { Pin, Pencil, Trash } from "lucide-react";
const Notescard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onPin,
  onEdit,
  onDelete,
}) => {
  return (
    <div className=" p-6  gap-2 border-0 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:scale-[1.02] m-4 transition-all duration-300 cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <h5 className="font-semibold">Meeting in 7th april</h5>
          <p className="text-sm text-slate-500">3rd april</p>
        </div>

        <Pin
          size={16}
          className={
            isPinned
              ? "text-blue-500 hover:text-blue-600"
              : "text-slate-700 hover:text-slate-800"
          }
        />
      </div>

      <div className="mt-4 flex justify-between items-center gap-8">
        <div>
          <p className="text-sm text-slate-700">Meeting on 7th april</p>
          <p className="text-sm text-slate-500">#Meetings</p>
        </div>
        <div className="flex justify-between items-center gap-3">
          <Pencil
            size={16}
            className="cursor-pointer text-slate-600 hover:text-blue-500 transition-colors"
          />
          <Trash
            size={16}
            className="cursor-pointer text-slate-600 hover:text-blue-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default Notescard;
