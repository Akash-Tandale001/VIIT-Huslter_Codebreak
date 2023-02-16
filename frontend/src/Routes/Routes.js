import React from "react";
const Home = React.lazy(() => import("../Pages/Home/Home.jsx"));
const Login = React.lazy(() => import("../Pages/SignIn/pages/Login.js"));
const Signup = React.lazy(() => import("../Pages/SignIn/pages/SignupPage.js"));
const Categories = React.lazy(() => import("../Pages/Category/Category.jsx"));
const ResetPassword = React.lazy(() =>
  import("../Pages/SignIn/Components/ResetPassword.js")
);
const CategoryView = React.lazy(() =>
  import("../Pages/Category/CategoryView.jsx")
);
const AboutUs = React.lazy(() => import("../Components/Navbar/AboutUs"));
const Cart = React.lazy(() => import("../Pages/Cart/Cart"));
const Fail = React.lazy(() => import("../Pages/Checkout/Fail"));
const Sucess = React.lazy(() => import("../Pages/Checkout/Sucess"));

const components = {
  Home: {
    path: "/",
    name: "home",
    element: <Home />,
  },
  About: {
    path: "/about",
    name: "about",
    element: <AboutUs />,
  },
  Categories: {
    path: "/base/categories",
    name: "categories",
    element: <Categories />,
  },
  PaymentSucess: {
    path: "/base/checkout-sucess",
    name: "sucess",
    element: <Sucess />,
  },
  PaymentFail: {
    path: "/base/checkout-fail",
    name: "fail",
    element: <Fail />,
  },
  CategoriesView: {
    path: "/base/categories/view/*",
    name: "CategoriesView",
    element: <CategoryView />,
  },
  Cart: {
    path: "/base/cart",
    name: "cart",
    element: <Cart />,
  },
  Login: {
    path: "/login",
    name: "Login",
    element: <Login />,
  },

  ResetPassword: {
    path: "/ResetPassword",
    name: "ResetPassword",
    element: <ResetPassword />,
  },
  // AdminDashBoard: {
  // 	path: "/base/AdminDashBoard",
  // 	name: "AdminDashBoard",
  // 	element: <AdminDashBoard />,
  // },
  SignUp: {
    path: "/signup",
    name: "Signup",
    element: <Signup />,
  },
  // PaymentSucess:{
  // 	path: "/base/checkout-sucess",
  // 	name: "sucess",
  // 	element: <Sucess/>,
  // },
  // PaymentFail:{
  // 	path: "/base/checkout-fail",
  // 	name: "fail",
  // 	element: <Fail />,
  // }
};
const rolesConfig = {
  Admin: {
    routes: [
      // components.AdminDashBoard,
    ],
  },
  User: {
    routes: [
      components.Home,
      components.About,
      components.Categories,
      components.Cart,
      components.Login,
      components.ResetPassword,
      components.SignUp,
      components.Categories,
      components.CategoriesView,
      components.PaymentFail,
      components.PaymentSucess,
    ],
  },
};
const BasicRoutesConfig = [
  components.Home,
  components.About,
  components.Login,
  components.ResetPassword,
  components.SignUp,
  components.Categories,
  components.CategoriesView,
  components.PaymentFail,
  components.PaymentSucess,

  components.Cart,
];
export { rolesConfig, BasicRoutesConfig };
