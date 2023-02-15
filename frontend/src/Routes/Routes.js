import React from 'react'
const Home = React.lazy(() => import("../Pages/Home/Home.jsx"));
const Login = React.lazy(() => import("../Pages/SignIn/pages/Login.js"));
const Signup = React.lazy(() => import("../Pages/SignIn/pages/Signup.js"));
const Categories = React.lazy(() => import("../Pages/Category/Category"));
const BodyParts = React.lazy(() => import("../Pages/Category/BodyParts"));
const ResetPassword = React.lazy(() => import("../Pages/SignIn/Components/ResetPassword.js"));
const CategoryView= React.lazy(()=>import("../Pages/Category/CategoryView.jsx"))

const components = {
	Home: {
		path: "/",
		name: "home",
		element: <Home />,
	},
	// About: {
	// 	path: "/about",
	// 	name: "about",
	// 	element: <About />,
	// },
	Categories: {
		path: "/base/categories",
		name: "categories",
		element: <Categories />,
	},
    CategoriesView: {
		path: "/base/categories/view/*",
		name: "CategoriesView",
		element: <CategoryView />,
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
			// components.About,
			components.Categories,
            // components.Cart,
			// components.PaymentFail,
			// components.PaymentSucess,
			components.Login,
	components.ResetPassword,
	components.SignUp,
    components.Categories,
    components.CategoriesView
        ],
	},
};
const BasicRoutesConfig = [
    components.Home,
	// components.About,
	components.Login,
	components.ResetPassword,
	components.SignUp,
    components.Categories,
    components.CategoriesView
];
export { rolesConfig, BasicRoutesConfig };