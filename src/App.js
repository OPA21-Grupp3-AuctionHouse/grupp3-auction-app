import React from "react";
import WelcomePageHeader from "./components/WelcomePageHeader";
import WelcomePage from "./components/WelcomePage";
import Register from "./components/Register";

function App() {
  return (
    <main>
      <WelcomePageHeader />
      <WelcomePage />
      <Register />
    </main>
  );
};

export default App;