import React from "react";
import { useState } from "react";
import "./form.css";
import Check from "./check";

const Form = (props) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");
   const [date, setDate] = useState("");

   let data = [];

   const submitHandler = (event) => {
      event.preventDefault();
      data.push({
         name,
         email,
         number,
         date,
      });
      console.log(data);
      props.next();
   };

   return (
      <form action="" onSubmit={submitHandler}>
         <input
            type="text"
            required
            value={name}
            name="name"
            onChange={(event) => {
               setName(event.target.value);

               if (event.target.value.length < 3) {
                  setTimeout(() => {
                     event.target.style.backgroundColor = "#FFEFEF";
                  }, 1000);
               } else {
                  setTimeout(() => {
                     event.target.style.backgroundColor = "#3BAF77";
                  }, 1000);
               }
            }}
         />
         <input
            type="email"
            required
            value={email}
            name="email"
            onChange={(event) => {
               setEmail(event.target.value);

               if (!event.target.value.includes("@redberry.ge")) {
                  setTimeout(() => {
                     event.target.style.backgroundColor = "#FFEFEF";
                  }, 200);
               } else {
                  setTimeout(() => {
                     event.target.style.backgroundColor = "#3BAF77";
                  }, 200);
               }
            }}
         />
         <input
            type="number"
            required
            value={number}
            name="number"
            onChange={(event) => {
               setNumber(event.target.value);

               if (event.target.value.length < 8) {
                  setTimeout(() => {
                     event.target.style.backgroundColor = "#FFEFEF";
                  }, 200);
               } else {
                  setTimeout(() => {
                     event.target.style.backgroundColor = "#3BAF77";
                  }, 200);
               }
            }}
         />
         <input
            type="date"
            required
            value={date}
            name="date"
            onChange={(event) => {
               setDate(event.target.value);

               if (event.target.value.length < 2) {
                  setTimeout(() => {
                     event.target.style.backgroundColor = "#FFEFEF";
                  }, 200);
               } else {
                  event.target.style.backgroundColor = "#3BAF77";
               }
            }}
         />
         <div>
            <button type="submit">Submit</button>
            <button onClick={props.prev}>back</button>
         </div>
      </form>
   );
};

export default Form;
