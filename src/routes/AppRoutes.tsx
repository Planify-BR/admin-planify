import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import RootTemplate from "@/components/Layout";
import { useAuthStore } from "@/contexts/authContext";

export default function AppRoutes() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Routes>
      {routes.map(({ path, element, isPublicRoute }) => (
        <Route
          key={path}
          path={path}
          element={
            isAuthenticated ? (
              isPublicRoute ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <RootTemplate>{element}</RootTemplate>
              )
            ) : isPublicRoute ? (
              element
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      ))}
    </Routes>
  );
}
