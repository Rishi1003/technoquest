import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:"/builder",
        element:<h1>Dummy</h1>
    },
    {
        path:"/explorer",
        element:<h1>Dummy</h1>
    }
]);

export default router;