import React from "react";
import OrderDetail from "./components/OrderDetail";
import Titles from "./components/Titles";
import UnderNav from "./components/UnderNav";

function App() {
  return (
    <div>
      <Titles/>
      <UnderNav/>
      <OrderDetail/>
    </div>
  );
}

export default App;
