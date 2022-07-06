import React, { useState } from "react";

const Experience = (props) => {
   const [level, setLevel] = useState("");
   const [player, setPlayer] = useState("");
   const [radio, setRadio] = useState("");

   let data = [];

   const submitHandler = (event) => {
      event.preventDefault();
      data.push({ level, player, radio });
      //   props.prev();
      console.log(data);
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
                  console.log(radio);
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
                  console.log(radio);
               }}
            />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default Experience;
