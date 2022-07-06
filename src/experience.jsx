import React, { useState } from "react";

const Experience = (props) => {
   const [level, setLevel] = useState("");
   const [player, setPlayer] = useState("");
   const [radio, setRadio] = useState("");

   const [btnText, setBtnText] = useState("next");

   let data = [];

   const submitHandler = (event) => {
      event.preventDefault();
      if (level === "") {
      } else {
         data.push(level);
      }
      if (player === "") {
      } else {
         data.push(player);
      }
      if (radio === "") {
      } else {
         data.push(radio);
      }
      //   props.prev();
      console.log(data.length);
   };

   const btnChange = () => {
      if (data.length === 2) {
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
            >
               <option value="begginer">begginer</option>
               <option value="intermediate">intermediate</option>
               <option value="professional">professional</option>
            </select>

            <select
               name=""
               id=""
               placeholder="choose player"
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
            <button type="submit">{btnText}</button>
         </form>
      </div>
   );
};

export default Experience;
