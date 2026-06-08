import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Notescard from "../../components/Notescard";
import { Plus, LogOut } from "lucide-react";
import Modal from "react-modal";
import Addedit from "../../components/Addedit";

const Home = () => {
  const [addedit, setAddedit] = useState({
    isOpen: false,
    type: "add",
    data: null,
  });
  return (
    <div>
      <Navbar islogged />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 m-8 bg-white mt-40 md:mt-30">
          <Notescard
            title={() => {}}
            content={() => {}}
            date={() => {}}
            tags={() => {}}
            isPinned={() => {}}
            onPin={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
          />
          <Notescard />
          <Notescard />
          <Notescard />
          <Notescard />

          <button className="bg-blue-500 w-16 h-16 rounded-2xl p-2 fixed right-10 bottom-10 cursor-pointer hover:bg-blue-600 transition-all duration-200" onClick={()=>{setAddedit({isOpen:true,type:"add",data:null})}}>
            <Plus className="text-white mx-auto" size={32} />
          </button>
        </div>
      </div>
      <Modal
        isOpen={addedit.isOpen}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="bg-[#fcfeff] w-[40%] max-h-3/4 mx-auto mt-18 rounded-xl p-5 overflow-scroll"
      >
        <Addedit/>
      </Modal>
    </div>
  );
};

export default Home;
