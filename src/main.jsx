import { createBrowserRouter, RouterProvider } from "react-router";
import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./routes/Home.jsx";
import Task, { loader as taskLoader } from "./routes/Task.jsx";
import Category, { loader as categoryLoader } from "./routes/Category.jsx";
import User, { loader as userLoader } from "./routes/User.jsx";
import Priority, { loader as priorityLoader } from "./routes/Priority.jsx";
import UserCreate from "./routes/UserCreate.jsx";
import UserDelete, { loader as userDeleteLoader } from "./routes/UserDelete.jsx";
import UserEdit, { loader as userEditLoader } from "./routes/UserEdit.jsx";
import Project, { loader as projectLoader } from "./routes/Project.jsx";

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
                path: "task",
                children: [
                    {
                        path: ":id",
                        element: <Task />,
                        loader: taskLoader,
                    },
                ]
            },
            {
                path: "project",
                children: [
                    {
                        path: ":id",
                        element: <Project />,
                        loader: projectLoader,
                    },
                ]
            },
            {
                path: "category",
                children: [
                    {
                        path: ":id",
                        element: <Category />,
                        loader: categoryLoader,
                    }
                ]
            },
            {
                path: "priority",
                children: [
                    {
                        path: ":id",
                        element: <Priority />,
                        loader: priorityLoader,
                    }
                ]
            },
            {
                path: "user",
                children: [
                    {
                        path: ":id",
                        element: <User />,
                        loader: userLoader,
                    },
                    {
                        path: "create",
                        element: <UserCreate />,
                    },
                    {
                        path: "delete/:id",
                        element: <UserDelete />,
                        loader: userDeleteLoader,
                    },
                    {
                        path: "edit/:id",
                        element: <UserEdit />,
                        loader: userEditLoader,
                    }
                ]
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