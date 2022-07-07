import React, { useState } from "react";

const Experience = (props) => {
   const [level, setLevel] = useState("");
   const [player, setPlayer] = useState("");
   const [radio, setRadio] = useState("");

   const [btnText, setBtnText] = useState("next");

   let data = [props.data];

   const submitHandler = (event) => {
      event.preventDefault();
      if (level === "") {
      } else {
         localStorage.setItem("level", level);
         data.push(level);
      }
      if (player === "") {
      } else {
         localStorage.setItem("player", player);
         data.push(player);
      }
      if (radio === "") {
      } else {
         localStorage.setItem("radio", radio);
         data.push(radio);
      }
      //   props.prev();
      props.liftData(data);
      // console.log("data length", data.length);
   };

   const btnChange = () => {
      if (data.length === 4) {
         setBtnText("done");
      } else {
         setBtnText("next");
      }
   };

   return (
      <div>
         <form onSubmit={submitHandler}>
            <select
               name=""
               id=""
               placeholder="choose level"
               onChange={(event) => {
                  setLevel(event.target.value);
               }}
               onClick={() => {
                  btnChange();
               }}
               value={localStorage.getItem("level")}
            >
               <option value="begginer">begginer</option>
               <option value="intermediate">intermediate</option>
               <option value="professional">professional</option>
            </select>

            <select
               name=""
               id=""
               placeholder="choose player"
               value={localStorage.getItem("level")}
               onChange={(event) => {
                  setPlayer(event.target.value);
               }}
               onClick={() => {
                  btnChange();
               }}
            >
               <option value="magnus">magnus</option>
               <option value="harom">harmon</option>
               <option value="fischer">fischer</option>
            </select>
            <label htmlFor="yes">yes</label>
            <input
               type="radio"
               name="yes"
               id="yes"
               value="Yes"
               onChange={(e) => {
                  setRadio(e.target.value);
               }}
               onClick={() => {
                  btnChange();
               }}
            />
            <label htmlFor="no">no</label>
            <input
               type="radio"
               name="no"
               id="no"
               value="No"
               onChange={(e) => {
                  setRadio(e.target.value);
               }}
               onClick={() => {
                  btnChange();
               }}
            />
            <div>
               <button onClick={props.prev}>prev</button>
               <button type="submit">{btnText}</button>
            </div>
         </form>
      </div>
   );
};

export default Experience;
