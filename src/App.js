import "./App.css";

import Form from "./form";
import Experience from "./experience";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
   const navigator = useNavigate();

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
                  />
               }
            />
         </Routes>
      </div>
   );
}

export default App;
