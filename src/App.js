import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.css';

const Layout = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Outlet></Outlet>
    </div>
  )
}

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       }]
//   }
// ])

function App() {
  return (
    <div >
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
