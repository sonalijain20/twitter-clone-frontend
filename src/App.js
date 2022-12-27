import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Feed } from "./components/Feed/Feed";
import { Profile } from "./components/Profile/Profile";
// import { Logout } from "./components/Logout/Logout";
import { Navbar } from "./components/Navbar/Navbar";
import { ErrorPage } from "./assets/images/ErrorPage/ErrorPage";
import { NavigateBefore } from "@mui/icons-material";

const Layout = ({ isHome }) => {
  console.log(isHome)
  return (
    <div className="md:w-8/12 mx-auto">
      {/* {isHome ? <Navbar /> : null} */}
      <Outlet></Outlet>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;






// function App() {
//   return (
//     <div >
//       <Router>
//         <MainFrame />
//       </Router>
//     </div>
//   );
// }

// export default App;