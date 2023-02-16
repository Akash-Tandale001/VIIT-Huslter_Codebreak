# VIIT-Huslter_Codebreak
<h1>Probem Statement: Ashok Leyland - Ola/Uber Type Solutions for Management of Spare Parts</h1>
  This is a React application's root component, App. The component is importing various modules such as BasicRoutesConfig, rolesConfig, React, react-redux, react-router-dom, Loader, Home, ADMIN, USER, saveAuth, and Layout.

App uses the useSelector hook from react-redux to retrieve the isAuthenticated, userRole, and token properties from the authDetails state slice. It then checks if the loginToken is available in the sessionStorage. If the token is available, it calls the storeDetails function, which dispatches an action to update the authDetails state slice with the values from sessionStorage.

The routes variable is assigned a value based on the isAuthenticated and userRole values. If the user is authenticated and has a role, the appropriate routes are selected from the rolesConfig object.

The component renders a Suspense component that shows a Loader while the child components are being loaded. It then uses the Routes and Route components from react-router-dom to set up the application's routing.

The BasicRoutesConfig array is used to render the basic routes of the application. It maps over the array and returns a Route component for each route.

If the user is authenticated, the routes variable is used to render the additional routes for the authenticated user. The Route components are rendered inside a Layout component, which provides a consistent layout for all the routes.

If the user is not authenticated, the user is redirected to the homepage with the Navigate component. The Replace prop is used to replace the current history state instead of adding to it.


[CodeBreak 4.0 hackthon PS.pptx](https://github.com/Akash-Tandale001/VIIT-Huslter_Codebreak/files/10751899/CodeBreak.4.0.hackthon.PS.pptx)

Tree Structure of Frontend Folder src file:

![tree](https://user-images.githubusercontent.com/76769985/219262659-374451de-afc1-4e53-834a-af37febdf76e.png)
