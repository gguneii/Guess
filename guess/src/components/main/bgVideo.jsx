import { useRef, useState } from "react";
import { CiPause1,CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";


const BackgroundVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); 
    
    const handleToggle = () =>{
        if(videoRef.current){
            if(isPlaying){
                videoRef.current.pause()
            }
            else{
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }
    return (
      <div className="relative w-full h-[100vh] overflow-hidden">
        <video
        ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          width="1920"
          height="1080"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://img.guess.com/video/upload/q_auto,w_1920,h_1080,c_limit/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10461/G_Site_Home_ContentCenter_AprilV2_10461_01.mp4"
            type="video/mp4"
          />
        </video>
  
        <div className="relative text-white text-center top-[40%] translate-y-[-40%] z-[1] font-light text-shadow-[7px_7px_24px_#4a3c3a] text-[clamp(12px,13.02vw,250px)]">
          <h1>Go West</h1>
        </div>
        <button onClick={handleToggle} className="text-white rounded absolute bottom-6 right-4 cursor-pointer w-[15px] h-[20px]">
            {isPlaying ? <CiPause1 className="w-[15px] h-[20px]" /> : <FaPlay className="w-[15px] h-[20px]" />}
          </button>
      </div>
    );
  };
  
  export default BackgroundVideo;
  