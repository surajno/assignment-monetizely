import React, { useEffect, useState } from 'react'
import axios from "axios"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

 const ImagesGallery: React.FC = () => {
   const [image, setImage]= useState<any[]>([])
   const [page, setPage] = useState<number>(1);

  const GetImageData= async () => {
    try {
      // https://cors-anywhere.herokuapp.com/https://
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.reddit.com/api/v1/me/`)
      // const response = await axios.get("https://dummyjson.com/products/1");
      setImage(response.data);
      console.log("DATA", response.data.data.children)
    } catch (error) {
      console.error("Error fetching :", error);
    }
  };


  useEffect(()=>{
    GetImageData();
  },[page])

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
    }
  };


  return (
    <>
    
    <div className='image-gallery-container'>

      <div className='image-container'>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Beautiful Images</h2>
      {/* <button onClick={handlePrevPage} disabled={page === 1} className='btn-left'>Left</button> */}
      <ArrowBackIosIcon className='btn-left' />
      <img className='image' src='https://preview.redd.it/yamdrok-yumtso-lake-in-tibet-v0-x69f1y3asquc1.jpeg?width=1080&crop=smart&auto=webp&s=5e38b65385b1b6061b2a978eb1d8b650098660f8' alt='nature'/>
      {/* <button onClick={handleNextPage} className='btn-right'>Right</button> */}
      <ArrowForwardIosIcon className='btn-right' />
      </div>

      <div className='image-container'>
      <h1 className="text-lg font-semibold text-zinc-900 dark:text-white m-2">Beautiful Images</h1>
      {/* <button onClick={handlePrevPage} disabled={page === 1} className='btn-left'>Left</button> */}
      <ArrowBackIosIcon className='btn-left' />

      <img className='image' src='https://preview.redd.it/the-milky-way-standing-vertically-above-mount-tantalus-v0-ae0r5ddvsmuc1.jpeg?width=1080&crop=smart&auto=webp&s=336a8d2cfdf189f0f80010b0a8cf41614b4e8038' alt='Stars'/>
      {/* <button onClick={handleNextPage} className='btn-right'>Right</button> */}
      <ArrowForwardIosIcon className='btn-right' />

      </div>

      <div className='image-container'>
      <h1 className="text-lg font-semibold text-zinc-900 dark:text-white m-2">Beautiful Images</h1>
      {/* <button onClick={handlePrevPage} disabled={page === 1} className='btn-left'>Left</button> */}
      <ArrowBackIosIcon className='btn-left' />
      <img className='image' src='https://preview.redd.it/spring-mountains-in-seoul-korea-v0-1jusnee37juc1.jpg?width=1024&format=pjpg&auto=webp&s=488c9f7c0d6b5c4afbaa36acc58f56456f98d194' alt='flowers'/>
      {/* <button onClick={handleNextPage} className='btn-right'>Right</button> */}
      <ArrowForwardIosIcon className='btn-right' />

     
      </div>
    </div>
    </>
  )
}

export default ImagesGallery