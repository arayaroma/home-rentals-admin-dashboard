import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./routes/auth/Login.tsx";
import SignUpPage from "./routes/auth/SignUp.tsx";
import ForgotPasswordPage from "./routes/auth/ForgotPassword.tsx";
import UpdatePasswordPage from "./routes/auth/UpdatePassword.tsx";
import ProtectedPage from "./routes/ProtectedPage.tsx";
import ProtectedRoute from "./routes/auth/ProtectedRoute.tsx";
import AdminPanel from "./routes/admin/AdminPanel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },

  { path: "/update-password", element: <UpdatePasswordPage /> },
  { path: "/protected", element: <ProtectedPage /> },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
