import {FaCamera} from 'react-icons/fa';
import React, {useCallback, useRef, useState} from "react";
import Webcam from "react-webcam";
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebcamCapture() {

    const webcamRef = useRef(null) // pointer

    const [image,setImage] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot(); // webcam element has a getScreenshot() that gives us the image (imageSrc)
        setImage(imageSrc);
        //dispatch(setCameraImage(imageSrc));
        //dispatch(setCameraImage(imageSrc));

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