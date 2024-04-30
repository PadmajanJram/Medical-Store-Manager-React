import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Register from "./components/auth/register";
import Login from "./components/auth/Login";
import Listmed from "./components/medicines/listmed";
import Viewmed from "./components/medicines/viewmed";
import Editmed from "./components/medicines/editmed";
import Createmed from "./components/medicines/createmed";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},
    { path : 'medicines/create' , element : <Createmed/> },
    { path: 'medicines', element:<Listmed/>},
    { path: 'medicines/:postId', element: <Viewmed/>},
    { path : '/medicines/:postId/edit', element: <Editmed/>},
]);

export default router;