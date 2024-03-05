import { createBrowserRouter } from "react-router-dom";
import Article from "../pages/Article";
import App from "../App";
import Banner from "../components/Banner";
import PostList from "../pages/PostList";
import Home from "../pages/Home";
import NoteList from "../pages/NoteList";

export const routes = [
  {
    path: "/",
    name: "home",
    label: "HOME",
    navShow: true,
    element: <Home />,
  },
  {
    path: "posts",
    name: "posts",
    label: "POSTS",
    navShow: true,
    element: <PostList />,
  },
  {
    path: "posts/:url",
    name: "post",
    navShow: false,
    label: "POSTS",
    element: <Article />,
  },
  {
    path: "notes",
    name: "notes",
    label: "NOTES",
    navShow: true,
    element: <NoteList />,
  },
  {
    path: "notes/:url",
    name: "notes",
    label: "NOTES",
    navShow: true,
    element: <Article />,
  },
  {
    path: "/project",
    name: "project",
    label: "PROJECTS",
    navShow: true,
    element: <Article />,
  },
  {
    path: "/archive",
    name: "archive",
    label: "ARCHIVE",
    navShow: true,
    element: <Article />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Banner isErrorPage={true} />,
    children: routes,
  },
]);

export default router;
