import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WebsiteLayout from "../layouts/website";
// import AuthLayout from "../layouts/auth";
// import DashboardLayout from "../layouts/dashboard";
// import DashboardSettingsLayout from "../layouts/dashboardSettings";
import { HomePage } from "../pages/home";
import { ContactPage } from "../pages/contactUs";
import { OurVisionPage } from "../pages/ourVision";
import { WhoWeArePage } from "../pages/whoWeAre";

import { ProcessPage } from "../pages/ourProcess";
// import { LoginPage } from "../pages/login";
// import { AdminLogin } from "../pages/adminLogin";

// import { DashPage } from "../pages/dashboard";
// import { AdminDash } from "../pages/adminDash";
import ProtectedRoutes from "../hoc/ProtectedRoutes";

const AllRoutes = () => {
  const loggedAuth = useSelector((state) => {
    return state;
  });
  console.log(loggedAuth);
  const { admin, user } = loggedAuth;
  const [adminAuth, setAdminAuth] = useState(loggedAuth?.admin);
  const [userAuth, setUserAuth] = useState(loggedAuth?.user);
  //  console.log(loggedAuth);
  console.log(adminAuth);
  console.log(userAuth);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route> */}

        <Route element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="our-process" element={<ProcessPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="about-us/who-we-are" element={<WhoWeArePage />} />
          <Route path="about-us/our-vision" element={<OurVisionPage />} />

          <Route path="register" element={<HomePage />} />
          {/* <Route path="login" element={<LoginPage />} />
          <Route path="/admin/login" element={<AdminLogin />} /> */}
        </Route>

        {/* <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes isAllowed={!!user.authenticated}>
                <DashPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoutes
                isAllowed={
                  !!admin.authenticated && admin.hasOwnProperty("adminData")
                }
                redirectPath="/admin/login"
              >
                <AdminDash />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route element={<DashboardSettingsLayout />}>
          <Route
            path="/admin/dashboard/setting"
            element={
              <ProtectedRoutes
                isAllowed={
                  !!admin.authenticated && admin.hasOwnProperty("adminData")
                }
                redirectPath="/admin/login"
              >
                <AdminDash />
              </ProtectedRoutes>
            }
          />
        </Route> */}

        <Route path="*" element={<h2>error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

/* <Route
          exact
          path="/"
          element={
            <WebsiteLayout>
              <HomePage />
            </WebsiteLayout>
          }
        />
        <Route
          exact
          path="/pricing"
          element={
            <WebsiteLayout>
              <HomePage />
            </WebsiteLayout>
          }
        />
        <Route
          exact
          path="/contact-us"
          element={
            <WebsiteLayout>
              <HomePage />
            </WebsiteLayout>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <WebsiteLayout>
              <HomePage />
            </WebsiteLayout>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <WebsiteLayout>
              <LoginPage />
            </WebsiteLayout>
          }
        />
        <Route
          exact
          path="/admin/login"
          element={
            <WebsiteLayout>
              <AdminLogin />
            </WebsiteLayout>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <DashPage />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          exact
          path="/admin/dashboard"
          element={
            <ProtectedRoutes >
              <DashboardLayout>
                <AdminDash />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<h2>error 404</h2>} /> */
