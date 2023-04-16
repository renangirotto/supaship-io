import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AllPosts from "./AllPosts";
import MessageBoard from "./MessageBoard";
import Navbar from "./Navbar";
import PostView from "./PostView";
import Welcome from "./Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
        // loader: welcomeLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
