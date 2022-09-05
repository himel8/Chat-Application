import React from "react";
import Attach from "../../img/attach.png";
import Img from "../../img/img.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something...." />
      <div className="send">
        <img src={Img} alt="" />
        <input style={{ display: "none" }} type="file" id="attach" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
