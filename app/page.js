"use client" // must use 
import Header from '@/Components/Header'
import MyContext from '@/Helper/Context'
import { ToastContainer, toast } from 'react-toastify';
import React, { useContext, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function page(props) {



  // console.log(getData);

  const notify = () => {
    // toast("login Successfull!");
    toast.success('toast Successfull ', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const [num, setNum] = useState(" ------props.num = 90---- ")
  const [ImgData, setImgData] = useState([])

  const getData = async () => {
    const apiData = await axios.get("https://picsum.photos/v2/list");
    console.log(apiData);
    console.log(apiData.data);
    setImgData(apiData.data)
    notify();
  }
  console.log(ImgData)
  console.log(JSON.stringify(ImgData))

  const contextData = useContext(MyContext)
  console.log(contextData)


  return (
    <div className='p-5'>
      <h1 className='y-3'>HomePage</h1>
      <p>{contextData}</p>
      <Header num={num} />

      <button className="border-spacing-3 px-4 p-2 my-3 rounded border-blue-900 border-2 bg-blue-900" onClick={notify}>Login</button>

      <ToastContainer />


      <button className="border-spacing-3 px-4 p-2 my-3 rounded border-blue-900 border-2 bg-blue-900" onClick={getData}>lorem picsum</button>

      <div className="bg-gray300 p-2">
        <h2 className="my-2">Img API Data is here </h2>
        <div className="text-xs">{JSON.stringify(ImgData)}</div>
      </div>


    </div>
  )
}

export default page