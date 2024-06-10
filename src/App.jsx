import React from "react";
import Header from "./Components/Header/Header";
import CustomButton from "./Components/CustomButton/CustomButton";
import Welcome from "./pages/Welcome/Welcome";
import Footer from './Components/Footer/Footer' ;
import Partner from "./pages/Partner/Partner";
import Booking from "./pages/Booking/Booking";
import Dishes from './pages/Dishes/Dishes';
import Ambience from "./pages/Ambience/Ambience";

function App() {
  return (
    <>
      <Header />
      <CustomButton />
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
      <Ambience />



      <Footer />

    </>
  );
}

export default App;
