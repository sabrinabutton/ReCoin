import {FaCamera} from 'react-icons/fa';
import React, {useCallback, useRef, useState} from "react";
import Webcam from "react-webcam";
import { useDispatch } from 'react-redux';
import * as FS from "expo-file-system";
import { setCameraImage } from './features/cameraSlice';
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

const toServer = async (mediaFile) => {
    let type = mediaFile.type;
    let schema = "http://";
    let host ="192.168.30.183";
    let route = "/predict";
    let port = "5000";
    let url = "";
    let content_type = "image/jpeg";
  
    url = schema + host + ":" + port + route;
  
    let response = await FS.uploadAsync(url, mediaFile.uri, {
      headers: {
        "content-type": content_type,
      },
      httpMethod: "POST",
      uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
    });
  
  
    response.json().then(data => {
      return data.class_name;
    });
  };

function WebcamCapture() {

    const webcamRef = useRef(null) // pointer

    const [image,setImage] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot(); // webcam element has a getScreenshot() that gives us the image (imageSrc)
        setImage(imageSrc);
        //dispatch(setCameraImage(imageSrc));
        //dispatch(setCameraImage(imageSrc));
toServer(imageSrc);
    }, [webcamRef]);

    return (
    <div className='webcamCapture'>
        <Webcam
            audio ={false}
            height= {videoConstraints.height}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
        />
        <FaCamera
            className='webcamCapture__button'
            onClick={capture}
            fontSize = "large"
        />
        <img src = {image} alt =""/>
    </div>
    );
}

export default WebcamCapture;