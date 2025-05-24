import { createBrowserRouter, RouterProvider } from "react-router";
import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./routes/Home.jsx";
import Task, { loader as taskLoader } from "./routes/Task.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/task/:id",
                element: <Task />,
                loader: taskLoader,
            }
        ]
    },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);