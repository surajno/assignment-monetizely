import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { duration } from "@mui/material";




const imagesData=[
  {
      id: 1,
      url: "https://preview.redd.it/the-milky-way-standing-vertically-above-mount-tantalus-v0-ae0r5ddvsmuc1.jpeg?width=1080&crop=smart&auto=webp&s=336a8d2cfdf189f0f80010b0a8cf41614b4e8038",
    },
    {
      id: 2,
      url: "https://preview.redd.it/yamdrok-yumtso-lake-in-tibet-v0-x69f1y3asquc1.jpeg?width=1080&crop=smart&auto=webp&s=5e38b65385b1b6061b2a978eb1d8b650098660f8",
    },
    {
      id: 3,
      url: "https://preview.redd.it/spring-mountains-in-seoul-korea-v0-1jusnee37juc1.jpg?width=1024&format=pjpg&auto=webp&s=488c9f7c0d6b5c4afbaa36acc58f56456f98d194",
    },
    {
      id:4,
      url:"https://preview.redd.it/lost-dutchman-state-park-arizona-v0-67vzbpfgu8vc1.png?width=1080&crop=smart&auto=webp&s=dcbd162989748749b9a24ad0eb5543efe96f9c14"
    },
    {
      id:5,
      url:"https://preview.redd.it/historic-old-town-of-monschau-in-germany-v0-woba35a6k7vc1.jpeg?width=1080&crop=smart&auto=webp&s=8c5615c456ff86bf5cfad64fd933ab5fb65e3326"
    }
]





const ImagesGallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesPerPage = 1;
  const [currentPage, setCurrentPage] = useState(0);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imagesData.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);
 

  // const GetImageData = async () => {
  //   try {
  //     // https://cors-anywhere.herokuapp.com/https://
  //     // const response = await axios.get(
  //     //   `https://cors-anywhere.herokuapp.com/www.reddit.com/api/v1/me/`
  //     // );

  //     const baseUrl = `www.reddit.com`
  //     const endPoint = `api/v1/collections/subreddit_collections`
  //     const CLIENT_ID = `4wTbBnMZwf_n29VudW4CCQ`
  //     // const OAuth = `authorize?client_id=${CLIENT_ID}`
  //     // const code = `200`
  //     // // const responseType = `response_type=${code}`
  //     const URI = `http://localhost:3000/authorize_callback`
  //     const redirectUri = `redirect_uri=${URI}`
  //     // const duration = `duration=temporary`
  //     // const scope = `scope=identity`
  //     const response = await axios.get(`https://cors-anywhere.herokuapp.com/${baseUrl}/${endPoint}/authorize`,{
  //       headers:{
  //         responseType: "code",
  //         client_id: CLIENT_ID,
  //         state:"take_home_assignment",
  //         redirect_uri: redirectUri,
  //         duration: 'permanent',
  //         scope:'read'
  //       }
  //     })
  //     // const response = await axios.get("http://www.reddit.com/r/subreddit/new.json?limit=100");
  //     setImage(response.data);
  //     console.log("DATA", response.data.data.children);
  //   } catch (error) {
  //     console.error("Error fetching :", error);
  //   }
  // };

  // useEffect(() => {
  //   GetImageData();
  // }, [page]);

  
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === imagesData.length - 1 ? prevIndex : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };
  return (
    <>
   

   <div className="flex flex-col items-center">
      <div className="w-700 h-300 rounded-lg overflow-hidden">
        <p>Image:{imagesData[currentImageIndex]?.id}</p>
        <img className="image object-cover w-full h-full" src={imagesData[currentImageIndex]?.url} alt={`Image ${imagesData[currentImageIndex]?.id}`} />
      </div>
      <div className="pagination flex gap-4 mt-4 my-8">
        <Button variant="contained" onClick={prevImage} className="page-link my-8">
          Prev
        </Button>
        <Button variant="contained" onClick={nextImage} className="page-link">
          Next
        </Button>
      </div>
    </div>
      
    </>
  );
};

export default ImagesGallery;
