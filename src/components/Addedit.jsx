import React, { useState } from "react";
import Tags from "../components/Tags";
import { X } from "lucide-react";
import { axiosInstance } from "../helper/axiosInstance";
import { useEffect } from "react";

const Addedit = ({ data, type, handleClose, getAllNotes }) => {
  const [title, setTitle] = useState(data?.title || "");
  const [content, setContent] = useState(data?.content || "");
  const [tags, setTags] = useState(data?.tags || []);

  const [error, setError] = useState("");

  const addNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        getAllNotes();
        handleClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const editNote = async () => {
    const noteId = data._id;
    try {
      const response = await axiosInstance.put("/edit-note/"+noteId, {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        getAllNotes();
        handleClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAdd = () => {
    if (!title) {
      setError("add a title");
      return;
    }
    if (!content) {
      setError("add some content");
      return;
    }
    if (type === "edit") {
      editNote();
    } else {
      addNote();
    }
    setError("");
  };
  return (
    <div className="relative">
      <button
        className="absolute flex items-center justify-center w-10 h-10 rounded-full -top-3 -right-3 text-slate-500 hover:text-slate-600 cursor-pointer bg-"
        onClick={handleClose}
      >
        <X />
      </button>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-black/80">Title</label>
          <input
            value={title}
            placeholder="Title"
            className="outline-none text-slate-950 text-xl font-normal bg-slate-50 p-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-black/80 ">Content</label>
          <textarea
            value={content}
            placeholder="content"
            rows={10}
            className="outline-none text-xl bg-slate-50 p-2 font-medium"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Tags tags={tags} setTags={setTags} />
        </div>
        {error && <p className="text-red-400">{error}</p>}
        <button
          className="bg-blue-500 rounded-md font-medium text-white px-3 py-2"
          onClick={handleAdd}
        >
          {type === "add"? "ADD": "UPDATE "}
        </button>
      </div>
    </div>
  );
};

export default Addedit;
