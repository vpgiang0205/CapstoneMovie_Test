import { Route } from 'react-router-dom'
import { lazy } from "react"

const routes = [
    {
        path: "",
        element: lazy(() => import("pages/HomeTemplate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("pages/HomeTemplate/HomePage")),
            },
            {
                path: "about-page",
                element: lazy(() => import("pages/HomeTemplate/AboutPage")),
            },
            {
                path: "list-movie-page",
                element: lazy(() => import("pages/HomeTemplate/ListMoviePage")),
            },
            {
                path: "booking-page",
                element: lazy(() => import("pages/HomeTemplate/BookingPage")),
            },
            {
                path: "hooking-page",
                element: lazy(() => import("pages/HomeTemplate/HooksPage")),
            },
            {
                path: "detail-page/:id",
                element: lazy(()=> import("pages/HomeTemplate/DetailMoviePage"))
            }

        ],
    },

    {
        path: "admin",
        element: lazy(() => import("pages/AdminTemplate")),
        nested: [
            {
                path: "dashboard",
                element: lazy(() => import("pages/AdminTemplate/Dashboard")),

            },
            
            {
                path: "add-user",
                element: lazy(() => import("pages/AdminTemplate/AddUser")),

            }
        ]
    },

    {
        path: "auth",
        element: lazy(()=> import("pages/AdminTemplate/AuthPage"))
    }
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {

            return (

                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>

            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}

export default renderRoutes;