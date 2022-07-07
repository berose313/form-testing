import "./App.css";

import React, { useState } from "react";
import Form from "./form";
import Experience from "./experience";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
   const navigator = useNavigate();

   const [data, setData] = useState();

   const takeData = (data) => {
      setData(data);
   };

   const liftDataUp = (data) => {
      console.log(data);
   };

   return (
      <div className="App">
         <Routes>
            <Route
               path="/"
               element={
                  <Form
                     prev={() => {
                        navigator("/a");
                     }}
                     next={() => {
                        navigator("/b");
                     }}
                     takeData={takeData}
                  />
               }
            />
            <Route
               path="/b"
               element={
                  <Experience
                     prev={() => {
                        navigator("/");
                     }}
                     next={() => {
                        navigator("/d");
                     }}
                     data={data}
                     liftData={liftDataUp}
                  />
               }
            />
         </Routes>
      </div>
   );
}

export default App;
