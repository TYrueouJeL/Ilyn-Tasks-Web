import { createBrowserRouter, RouterProvider } from "react-router";
import React, {StrictMode, useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./routes/Home.jsx";
import Task, { loader as taskLoader } from "./routes/Task.jsx";
import Category, { loader as categoryLoader } from "./routes/Category.jsx";
import User, { loader as userLoader } from "./routes/User.jsx";
import Priority, { loader as priorityLoader } from "./routes/Priority.jsx";
import TaskList from "./components/task/TaskList.jsx";

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
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: categoryLoader,
            },
            {
                path: "/priority/:id",
                element: <Priority />,
                loader: priorityLoader,
            },
            {
                path: "user/:id",
                element: <User />,
                loader: userLoader,
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