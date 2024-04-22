import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import AllCompany from "../pages/Company/AllCompany";
import PendingCompany from "../pages/Company/PendingCompany";
import PublishedCompany from "../pages/Company/PublishedCompany";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllProfile from "../pages/Profile/AllProfile";
import PendingProfile from "../pages/Profile/PendingProfile";
import PublishedProfile from "../pages/Profile/PublishedProfile";
import SigninPage from "../pages/SigninPage";
import AddUser from "../pages/User/AddUser";
import ManageUsers from "../pages/User/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import ProtectByRole from "./ProtectByRole";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/add-user",
        element: (
          <ProtectByRole role="Admin">
            <AddUser />
          </ProtectByRole>
        ),
      },
      {
        path: "/user/manage-users",
        element: (
          <ProtectByRole role="Admin">
            <ManageUsers />
          </ProtectByRole>
        ),
      },

      {
        path: "/update-user/:id",
        element: (
          <ProtectByRole role="Admin">
            <AddUser />
          </ProtectByRole>
        ),
      },
      {
        path: "/company/pending-company",
        element: (
          <ProtectByRole role="Admin">
            <PendingCompany />
          </ProtectByRole>
        ),
      },
      {
        path: "/company/published-company",
        element: (
          <ProtectByRole role="Admin">
            <PublishedCompany />
          </ProtectByRole>
        ),
      },
      {
        path: "/company/all-company",
        element: (
          <ProtectByRole role="Admin">
            <AllCompany />
          </ProtectByRole>
        ),
      },
      {
        path: "/profile/pending-profile",
        element: (
          <ProtectByRole role="Admin">
            <PendingProfile />
          </ProtectByRole>
        ),
      },
      {
        path: "/profile/published-profile",
        element: (
          <ProtectByRole role="Admin">
            <PublishedProfile />
          </ProtectByRole>
        ),
      },
      {
        path: "/profile/all-profile",
        element: (
          <ProtectByRole role="Admin">
            <AllProfile />
          </ProtectByRole>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

export default router;
