import "./App.css";

import Form from "./form";
import Experience from "./experience";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
   const navigator = useNavigate();

   const takeData = (data) => {
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
                     takeData={takeData}
                  />
               }
            />
         </Routes>
      </div>
   );
}

export default App;
