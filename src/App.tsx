import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "@contexts/authContext";
import Layout from "@components/Layout";
import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";
import Plans from "@pages/Plans";
import Subscriptions from "@pages/Subscriptions";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/plans"
          element={
            <PrivateRoute>
              <Plans />
            </PrivateRoute>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <PrivateRoute>
              <Subscriptions />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
