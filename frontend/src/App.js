import { BasicRoutesConfig, rolesConfig } from "./Routes/Routes";
import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./helper/Loader";
import Home from "./Pages/Home/Home";
import { ADMIN, USER } from "./utils/Constant";
import { saveAuth } from "./Reducer/authSlice";
import Layout from "./Components/layout/Layout";

function App() {
  const { isAuthenticated, userRole, token } = useSelector(
    (state) => state.authDetails
  );
  console.log("App", { isAuthenticated, userRole, token });
  const loginToken =
    sessionStorage.getItem("loginToken") &&
    sessionStorage.getItem("isAuthenticated") &&
    sessionStorage.getItem("userRole");
  const dispatch = useDispatch;
  const storeDetails = async () => {
    await dispatch(
      saveAuth({
        isAuthenticated: sessionStorage.getItem("loginToken"),
        userRole: sessionStorage.getItem("userRole"),
        token: sessionStorage.getItem("loginToken"),
      })
    );
  };
  if (loginToken) {
    storeDetails();
  }
  let routes;
  if (isAuthenticated || sessionStorage.getItem("isAuthenticated")) {
    if (userRole === USER || sessionStorage.getItem("userRole") === USER) {
      routes = rolesConfig["user"];
    } else if (userRole === ADMIN) {
      routes = rolesConfig["Admin"];
    }
  }
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          {BasicRoutesConfig.map((route, key) => {
            return route ? <Route key={key} {...route} /> : null;
          })}
        </Route>

        {isAuthenticated || loginToken ? (
          <Route element={<Layout />}>
            {routes.routes.map((route, key) => {
              return route ? <Route key={key} {...route} /> : null;
            })}
          </Route>
        ) : (
          <Route path="/base/*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Suspense>
  );
}

export default App;
