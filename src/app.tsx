<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Horehome from "./features/home/Horehome";
import Homework    from "./features/home/Homework";
import Findcard   from "./features/home/Findcard";
import Docterhome   from "./features/home/Docterhome";
import Reviews   from "./features/home/Reviews";
import FAQ   from "./features/home/FQa";


import ChooseSpecialistPage from "./features/chooseSpecialist/components/ChooseSpecialistPage";
=======
import { RouterProvider } from "react-router-dom";
import { AppProviders } from "@/app/providers/AppProviders";
import { router } from "@/app/index";
>>>>>>> origin/main

const App = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
};

export default App;
