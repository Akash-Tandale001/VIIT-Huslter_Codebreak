import React from 'react'
const Home = React.lazy(() => import("../Pages/Home/Home.jsx"));

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
	// Profile: {
	// 	path: "/base/profile",
	// 	name: "Profile",
	// 	element: <Profile />,
	// },
	// Cart: {
	// 	path: "/base/cart",
	// 	name: "cart",
	// 	element: <Cart />,
	// },
	// Login: {
	// 	path: "/login",
	// 	name: "Login",
	// 	element: <Login />,
	// },

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
	// SignUp: {
	// 	path: "/signUp",
	// 	name: "SignUp",
	// 	element: <SignUp />,
	// },
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
			// components.Profile,
            // components.Cart,
			// components.PaymentFail,
			// components.PaymentSucess,
        ],
	},
};
const BasicRoutesConfig = [
    components.Home,
	// components.About,
	// components.Login,
	// components.ResetPassword,
	// components.SignUp,
];
export { rolesConfig, BasicRoutesConfig };