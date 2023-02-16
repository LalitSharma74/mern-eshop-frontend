import React from "react";
import "./Loader.css";

import Lottie from "react-lottie";
import * as loading from "./cartLoader.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loader = () => {
  return (
    <div className="loading">
      <div>
        <Lottie options={defaultOptions} height={180} width={180} />
      </div>
    </div>
  );
};

export default Loader;
