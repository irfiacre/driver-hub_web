import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loading = () => {
  return (
    <div>
      <Player
        src="https://lottie.host/5ecf9200-a138-4e18-9968-15e0df4c2cb7/nuEVFAFUI8.json"
        className="player"
        loop
        autoplay
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default Loading;
