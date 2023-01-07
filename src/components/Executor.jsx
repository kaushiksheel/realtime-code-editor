import axios from 'axios';
import React, { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';
import {BlueGradient} from '../helpers/TailwindClasses'
import { Spinner } from './Spinner';




export const Executor = () => {
  const{selectedLanguage,code}=useContext(PostContext);
  const[outputDetails,setOutputDetails]=useState();
  const[loading,setLoading]=useState(false)


  const handleCompile = () => {
    setLoading(true);
    const formData = {
      language_id: selectedLanguage?.id|| 63,
      source_code: btoa(code),
      
    };
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        'X-RapidAPI-Key': '0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        const token = response.data.token;
        checkStatus(token);

      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
      
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

        
        }
    
        console.log("catch block...", error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        'X-RapidAPI-Key': '0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      
      if (statusId === 1 || statusId === 2) {
  
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setLoading(false);
        setOutputDetails(response.data);
    
        return;
      }
    } catch (err) {
      console.log("err", err);
      setLoading(false);
      
    }
  };


  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
    
      return (
        <pre className="px-2 py-1 font-normal text-xl text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xl text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xl text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xl text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };


  return (
    <div>
      <div className="bg-[#1E293B] w-full h-[300px] rounded-lg text-white p-3 text-xl overflow-y-auto mb-7">
      {outputDetails ? <>{getOutput()}</> : null}
      </div>
      <button onClick={handleCompile} className={BlueGradient()}>{loading?<Spinner/>:"Compile"}</button>
    </div>
  )
}
