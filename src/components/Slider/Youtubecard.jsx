import React from "react";

const Youtubecard = ({videoId}) => {
  return (
    // <div className="flex wrapper mx-a items-center gap-5">
    //   <iframe
    //     width="200"
    //     height="315"
    //     src="https://www.youtube.com/embed/RNEebzirc1M"
    //     title="YouTube video player"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen
    //     className="rounded-2xl"
    //   ></iframe>
    //   <iframe
    //     width="200"
    //     height="315"
    //     src="https://www.youtube.com/embed/RNEebzirc1M"
    //     title="YouTube video player"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen
    //     className="rounded-2xl"
    //   ></iframe>
    //   <iframe
    //     width="200"
    //     height="315"
    //     src="https://www.youtube.com/embed/RNEebzirc1M"
    //     title="YouTube video player"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen
    //     className="rounded-2xl"
    //   ></iframe>
    //   <iframe
    //     width="200"
    //     height="315"
    //     src="https://www.youtube.com/embed/RNEebzirc1M"
    //     title="YouTube video player"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen
    //     className="rounded-2xl"
    //   ></iframe>

    // </div>

    <div className="max-w-screen-md mx-auto">

      <div className="relative overflow-hidden h-[400px] w-[283px]">

        <iframe

          className="absolute top-0 left-0 h-[400px] w-[283px]"

          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0`}

          allowFullScreen

          style={{ borderRadius: "12px" }}

        ></iframe>

      </div>

    </div>
  );
};

export default Youtubecard;
