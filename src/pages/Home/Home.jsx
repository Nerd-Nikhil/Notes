import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Notescard from "../../components/Notescard";
import { Plus, LogOut } from "lucide-react";
import moment from "moment";
import Modal from "react-modal";
import Addedit from "../../components/Addedit";
import { axiosInstance } from "../../helper/axiosInstance";
import { useNavigate } from "react-router";
import { useEffect } from "react";
Modal.setAppElement("#root");

const Home = () => {
  const [addedit, setAddedit] = useState({
    isOpen: false,
    type: "add",
    data: null,
  });
  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserinfo] = useState(null);
  const [isSearch,setisSearch] = useState(false);
  const navigate = useNavigate();

  const onEdit = async (noteDetails) => {
    setAddedit({ isOpen: true, data: noteDetails, type: "edit" });
  };

  const onDelete = async (data) => {
    const noteId = data._id;
    try {
      const response = await axiosInstance.delete("/delete-note/" + noteId);
      if (response.data) {
        getAllNotes();
      }
    } catch (error) {
        setError("An unknown error occured");
      
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/getuser");
      if (response.data && response.data.user) {
        setUserinfo(response.data.user);
      }
    } catch (e) {
      console.error("Error fetching user info:", e);
      if (e.response && e.response.status === 401) {
        localStorage.clear();
        navigate("/");
      }
    }
  };

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error occurred");
    }
  };

  const onSearch = async(query)=>{
    try{
      const response = await axiosInstance.get("/search-notes",{
        params:{query}
      });
      if(response.data && response.data.notes){
        setisSearch(true);
        setAllNotes(response.data.notes);
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getUserInfo();
    getAllNotes();
    return () => {};
  }, []);

  const handleClose = () => {
    setAddedit({
      isOpen: false,
      type: "add",
      data: null,
    });
  };
  return (
    <div>
      <Navbar userInfo={userInfo} onSearch={onSearch}/>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 m-8 bg-white mt-40 md:mt-30">
          {allNotes.map((item, index) => (
            <Notescard
              key={item._id}
              title={item.title}
              content={item.content}
              date={moment(item.createdOn).format("Do MMM YYYY")}
              tags={item.tags}
              isPinned={item.isPinned}
              onPin={() => {}}
              onEdit={() => onEdit(item)}
              onDelete={() => onDelete(item)}
            />
          ))}

          <button
            className="bg-blue-500 w-16 h-16 rounded-2xl p-2 fixed right-10 bottom-10 cursor-pointer hover:bg-blue-600 transition-all duration-200"
            onClick={() => {
              setAddedit({ isOpen: true, type: "add", data: null });
            }}
          >
            <Plus className="text-white mx-auto" size={32} />
          </button>
        </div>
      </div>
      <Modal
        isOpen={addedit.isOpen}
        onRequestClose={handleClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="bg-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-[85vh] mx-auto mt-10 sm:mt-18 rounded-xl p-5 overflow-y-auto hide-scrollbar"
      >
        <Addedit
          data={addedit.data}
          type={addedit.type}
          handleClose={handleClose}
          getAllNotes={getAllNotes}
        />
      </Modal>
    </div>
  );
};

export default Home;
