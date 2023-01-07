import React, { useContext, useEffect} from "react";

import Editor from "@monaco-editor/react";
import { PostContext } from "../context/PostContext";
import { io } from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";




const socket = io("https://realtime-code-editor-2wsn.onrender.com");

export const EditorComp = () => {
  const { code, setCode, setJoinedUsers,selectedLanguage } = useContext(PostContext);
  const location = useLocation();
  const params = useParams();

  const options = {
    selectOnLineNumbers: true,
  };

  const handleChange = (value, event) => {
    setCode(value);
  };

  function handleEditorValidation(markers) {
    markers.forEach((marker) => console.log("onValidate:", marker.message));
  }

  useEffect(() => {
    const data = {
      name: location.state,
      roomId: params.id,
    };
    socket.emit("setup", { data });
  }, []);

  useEffect(() => {
    socket.emit("join room", {
      uuid: params.id,
      name: location.state,
    });
  }, [params.id]);



  useEffect(() => {
    socket.on("joined", (data) => {
      const { clients } = data;
    const activeUsers=[]
      clients?.filter((client) => {
        if (client.name !== location.state) {
          activeUsers.push(client);
          toast.success(`${client?.name} joined`);
          setJoinedUsers(activeUsers);
        
        }
      });
    
    });
  });




  useEffect(() => {
    const data = {
      uuid: params.id,
      name: location.state,
      code,
    };
    socket.emit("new input", data);
  }, [code]);

  useEffect(() => {
    socket.on("input recieved", (data) => {
      setCode(data);
    });
  }, [socket]);



  return (
    <div className="col-span-2">
      <div className=" block">
        <Editor
          className="editor"
          width="100%"
          height="76vh"
          language={selectedLanguage?.value||"javascript"}
          theme="vs-dark"
          value={code}
          options={options}
          onChange={handleChange}
          onValidate={handleEditorValidation}
          defaultValue={code}
          
        />
      </div>
       <Toaster
    position='top-right'
    toastOptions={{
      duration:2000,
      style:{
         fontSize:15,
         padding:'15px 12px'
      }
    }}
    />
    </div>
  );
};
