import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import RootTemplate from "@/components/Layout";
// import NotFound from "@pages/notFound";

export default function AppRoutes() {
  const isAuthenticated = true;

  // if (isLoading) {
  //   return (
  //     <MuiBox height="100%" pt="50vh">
  //       <MuiLoader size={100} />
  //     </MuiBox>
  //   );
  // }

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
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
