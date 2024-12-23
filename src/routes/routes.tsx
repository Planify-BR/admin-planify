import Dashboard from "@/pages/dashboard";
import Plans from "@/pages/plans";
import Login from "@/pages/singnIn";

const routes: {
  path: string;
  element: JSX.Element;
  isPublicRoute: boolean;
}[] = [
  { path: "/", element: <Login />, isPublicRoute: true },
  { path: "/dashboard", element: <Dashboard />, isPublicRoute: false },
  { path: "/plans", element: <Plans />, isPublicRoute: false },
];

export default routes;
