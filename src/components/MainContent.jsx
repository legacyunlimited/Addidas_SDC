import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//   },
// ]);

export default function MainContent() {
  const [shoe, setShoe] = useState(1);
  const handleShoeChange = (id) => {
    setShoe(id);
  };

  const router = createBrowserRouter([
    {
      path: `/${shoe}`,
      element: <Body shoe={shoe} handleShoeChange={handleShoeChange} />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
