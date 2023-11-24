import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/components/error/ErrorPage.tsx";
import Login from "@/components/pages/local/login/Login.tsx";
import Blogs from "@/components/pages/local/blogs/Blogs.tsx";
import Account from "@/components/pages/local/account/Account.tsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
  {
    path: "/blogs",
    Component: Blogs,
  },
  {
    path: "/account",
    Component: Account,
  },
]);
