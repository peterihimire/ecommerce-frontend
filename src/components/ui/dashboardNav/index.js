// import React from "react";
// import Nav from "./nav";
import React, { useState, useEffect } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import { login, logout } from "../../../redux/actions/userAction";
import { adminLogout } from "../../../redux/actions/adminAction";
import Accordion from "../accordion";

// import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import ActiveLink2 from "../../../hoc/activeLink2";
// import Logo from "../../../public/images/logo-light.svg";
// import LogoDark from "../../../public/images/logo-dark.svg";
// import Dashboard from "../../../public/images/dashboardd.svg";

// import CrowdInvest from "../../../public/images/crowd-invest.svg";
// import LongHold from "../../../public/images/long-hold.svg";
// import Wallet from "../../../public/images/wallet.svg";
// import Portfolio from "../../../public/images/portfolio.svg";
// import Favourite from "../../../public/images/favourite.svg";
// import Referral from "../../../public/images/referral.svg";
// import Settings from "../../../public/images/settings.svg";
// import Attention from "../../../public/images/attention.svg";
// import Logout from "../../../public/images/logoutt.svg";

import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../../store/actions";
import { DarkModeOutlined } from "@mui/icons-material";
import { WbSunnyOutlined } from "@mui/icons-material";
import useDarkMode from "use-dark-mode";

import "./styles.scss";

const DashboardNav = ({ isOpen, bgChange }) => {
  const darkMode = useDarkMode(false);
  console.log(darkMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const auth = useSelector((state) => {
    return state;
  });
  console.log(auth);
  const { user, admin } = auth;
  console.log(user);
  console.log(admin);

  const [loggingOut, setLoggingOut] = useState(false);
  const [dashboardType, setDashboardType] = useState(""); // controls the dashboard - value can be admin | applicant | student
  const [adminData, setAdminData] = useState(admin?.adminData || {});
  const [userData, setUserData] = useState(user?.userData?.student || {});
  // console.log(studentData);
  const [name, setDashboardName] = useState("");
  console.log(adminData);

  // const userLinks = [
  //   { title: "Dashboard", link: "dashboard" },
  //   { title: "Payment History", link: "payment-history" },
  //   { title: "Documents", link: "documents" },
  //   // { title: "Logout", link: "logout" },
  // ];

  const userLinks = [
    {
      title: "Dashboard",
      content: ["smart-sms", "delivery-report", "phone-group"],
    },
    {
      title: "Payment History",
      content: [
        "dashboard",
        "sms",
        "smart-sms",
        "delivery-report",
        "phone-group",
      ],
    },
    {
      title: "Documents",
      content: ["dashboard", "sms", "smart-sms"],
    },
    // { title: "Logout", link: "logout" },
  ];

  const adminLinks = [
    { title: "Dashboard", link: "dashboard" },
    { title: "My Profile", link: "my-profile" },
    { title: "My Courses", link: "my-courses" },
    { title: "My Documents", link: "my-documents" },
    { title: "My Results", link: "my-results" },
    { title: "My Wallet", link: "my-wallet" },
    { title: "Exam", link: "exam" },
    { title: "My Fees", link: "my-fees" },
    { title: "Support", link: "support" },
    // { title: "Logout", link: "logout" },
  ];

  useEffect(() => {
    if (user?.userData?.applicant) {
      setUserData(user?.userData?.applicant);
    }
  }, [user]);

  useEffect(() => {
    if (admin?.adminData?.staff) {
      setAdminData(admin?.adminData?.staff);
    }
  }, [admin]);

  useEffect(() => {
    // setDashboardType(type);
    if (user.authenticated) {
      setDashboardType("user");
    } else if (admin.authenticated) {
      setDashboardType("admin");
    }
  }, [
    // type,
    user.authenticated,
    admin.authenticated,
  ]);

  const goto = (url) => {
    navigate(`/${dashboardType}/${url}`);
  };

  const getActive = (link) => {
    const lnk = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;
    return lnk === `/${dashboardType}/${link}` ||
      location.pathname.includes(link)
      ? true
      : false;
  };

  const getLinks = () => {
    switch (dashboardType) {
      case "admin":
        return adminLinks;
      case "user":
        return userLinks;
      default:
        return [];
    }
  };
  console.log(dashboardType);
  useEffect(() => {
    if (user.authenticated) {
      setDashboardName();
      // `${applicantData.surname} ${applicantData.firstname} ${applicantData.othername}`
    } else if (admin.authenticated) {
      setDashboardName();
      // `${admin?.adminData?.staff.surname} ${admin?.adminData?.staff.firstname} ${admin?.adminData?.staff.othername}`
    }
  }, [
    user,
    admin,
    userData.firstname,
    userData.othername,
    userData.surname,
    adminData.firstname,
    adminData.othername,
    adminData.surname,
  ]);

  const handleLogout = async () => {
    // console.log(applicant, admin);
    try {
      if (auth.user.authenticated) {
        await dispatch(logout());
        // navigate("/login");
      } else if (auth.admin.authenticated) {
        await dispatch(adminLogout());
        // navigate("/admin/login");
      }
      // if (applicant.authenticated) {
      //   await logoutApplicant();
      //   // console.log("Applicant is in focus");
      // } else if (admin.authenticated) {
      //   setLoggingOut(true);
      //   await logoutAdmin();
      // } else if (student.authenticated) {
      //   // console.log("Student is in focus");
      //   await logoutStudent();
      // }
    } catch (err) {
      console.log(err);
    } finally {
      setLoggingOut(false);
    }
  };

  const crowdInvest = "/crowd-invest";
  const orderConfirmation = "/order-confirmation";
  return (
    <nav className={`${`navSide`} ${isOpen ? `show` : ""}`}>
      <div className={`logo`}></div>
      <ul className={`navLinks`}>
        {getLinks().map((link, index) => {
          return (
            <Accordion
              key={index}
              focus={index}
              title={link.title}
              content={link?.content?.map((cont, index) => {
                return (
                  <NavLink
                    key={index}
                    className={`dashLink`}
                    to={
                      dashboardType === "admin" ? `admin/${cont}` : `/${cont}`
                    }
                  >
                    <span>{cont}</span>
                  </NavLink>
                );
              })}
            />
          );
        })}
        <li></li>
        <li onClick={darkMode.toggle}>
          {darkMode.value ? (
            <WbSunnyOutlined className="toggle-theme-dark" />
          ) : (
            <DarkModeOutlined className="toggle-theme-light" />
          )}
        </li>
      </ul>

      <a>
        <div className={`attention`}></div>
      </a>

      <div className={`navLogout`}>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNav;

// // <div className={`${styles.sidebar} ${isOpen ? styles._show : ""} `}>
//     // <Nav />
//     // </div>

//     <nav
//       className={`${`navSide`} ${isOpen ? `show` : ""}`}
//       // id="navbar"
//     >
//       {/* <nav className={`${styles.nav}`} id='navbar'> */}
//       <div className={`logo`}>
//         {/* <Link href="/">
//           <a
//           // className={`${isDropOpen ? styles.lightLogo : ""}`}
//           >
//             {
//               bgChange ||
//               isOpen ||
//               router.pathname === "/contact-us" ||
//               router.pathname === "/about-us" ||
//               router.pathname === "/faq"
//                 ? // <LogoDark />
//                   HalaDigital
//                 : HalaDigital
//               // <Logo />
//             }
//           </a>
//         </Link> */}
//       </div>
//       <ul className={`navLinks`}>
//         {getLinks().map((link, index) => {
//           // console.log(link);
//           return (
//             <NavLink
//               key={index}
//               className={`dashLink`}
//               to={
//                 dashboardType === "admin"
//                   ? `admin/${link.link}`
//                   : `/${link.link}`
//               }
//               // onClick={() => {
//               //   link.link === "logout" ? handleLogout() : goto(link.link);
//               // }}
//             >
//               <span>{link.title}</span>
//             </NavLink>
//           );
//         })}
//         <li>
//           {/* <ActiveLink2 href="/dashboard" linkClass={`${styles.dashLink}`}>
//             <Dashboard />
//             <span>Dashboard</span>
//           </ActiveLink2> */}
//         </li>
//         <li onClick={darkMode.toggle}>
//           {darkMode.value ? (
//             <WbSunnyOutlined className="toggle-theme-dark" />
//           ) : (
//             <DarkModeOutlined className="toggle-theme-light" />
//           )}
//         </li>
//       </ul>

//       {/* <Link href="/register-more"> */}
//       <a>
//         <div className={`attention`}>
//           {/* <Attention /> <p>Tap to complete your profile setup</p> */}
//         </div>
//       </a>
//       {/* </Link> */}

//       <div className={`navLogout`}>
//         {/* <Logout /> */}
//         <button
//           onClick={() => {
//             // e.preventDefault();
//             handleLogout();
//             // dispatch(actions.removeCurrentUser());
//             // router.push("/login");
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
