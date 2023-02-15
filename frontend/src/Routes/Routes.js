import React from 'react'
const Home = React.lazy(() => import("../Pages/Home/Home.jsx"));
const Login = React.lazy(() => import("../Pages/SignIn/pages/Login.js"));
const Signup = React.lazy(() => import("../Pages/SignIn/pages/Signup.js"));
const Categories = React.lazy(() => import("../Pages/Category/Category"));

const components = {
	Home: {
		path: "/",
		name: "home",
		element: <Home />,
	},
	// About: {
	// 	path: "/about",
	// 	name: "abour",
	// 	element: <About />,
	// },
	Categories: {
		path: "/base/categories/*",
		name: "categories",
		element: <Categories />,
	},
	// Cart: {
	// 	path: "/base/cart",
	// 	name: "cart",
	// 	element: <Cart />,
	// },
	Login: {
		path: "/login",
		name: "Login",
		element: <Login />,
	},

	// ResetPassword: {
	// 	path: "/reset-password",
	// 	name: "ResetPassword",
	// 	element: <ResetPassword />,
	// },
    // AdminDashBoard: {
	// 	path: "/base/AdminDashBoard",
	// 	name: "AdminDashBoard",
	// 	element: <AdminDashBoard />,
	// },
	SignUp: {
		path: "/signup",
		name: "SignUp",
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
	user: {
		routes: [
            components.Home,
			// components.About,
			components.Categories,
            // components.Cart,
			// components.PaymentFail,
			// components.PaymentSucess,
        ],
	},
};
const BasicRoutesConfig = [
    components.Home,
	// components.About,
	components.Login,
	// components.ResetPassword,
	components.SignUp,
    components.Categories,
];
export { rolesConfig, BasicRoutesConfig };