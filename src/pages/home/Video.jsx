import { BsPlayFill } from "react-icons/bs";
import cover from "../../assets/slider1.jpg";
import Container from "../../shared/Container";
import { useState } from "react";

const Video = () => {
  const [video, setVideo] = useState(false);

  return (
    <div className="relative">
      <div className="relative">
        <img
          className="brightness-50 h-[85vh] w-full object-cover"
          src={cover}
          alt="cover"
        />
        <Container>
          <div className="absolute top-1/2 -translate-y-1/2 text-white font-semibold tracking-wide p-10 lg:flex items-center">
            <h1 className="text-5xl md:text-7xl w-1/2">
              Agriculture Matters to the Future of Development
            </h1>
            <div onClick={() => setVideo(true)} className="p-10">
              <span class="relative my-10 flex h-32 w-32 lg:mx-auto mx-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <BsPlayFill className="text-black relative inline-flex bg-white h-32 w-32 rounded-full p-5" />
              </span>
              <h4 className="font-cursive text-secondary">Watch Our Video</h4>
            </div>
          </div>
        </Container>
      </div>
      {video && (
        <div
          onClick={() => setVideo(false)}
          className="absolute top-1/2 left-1/2 transfom -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center"
        >
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/ubUT-LaGejs"
            title="US Farmers Harvest Thousands Of Tons Of Agricultural Products In 2023 This Way"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="md:w-3/4 md:h-1/2 lg:h-3/4"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Video;
