import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pages from "../pages";

const Router = () => {
  const displayPages = Pages.map((page) => <Route {...page} />);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{displayPages}</Routes>
    </BrowserRouter>
  );
};

export default Router;
