import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import WelcomePageHeader from "./components/WelcomePageHeader";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router>
      <WelcomePageHeader />
      <WelcomePage />
    </Router>
  );
}

export default App;


// {
//         <div className="outer">
//           <div className="inner">
//             <Routes>
//               <Route exact path="/" component={Login} />
//               <Route path="/sign-in" component={Login} />
//               <Route path="/sign-up" component={Register} />
//             </Routes>
//           </div>
//         </div>
//      }
