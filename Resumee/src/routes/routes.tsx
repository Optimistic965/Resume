import { Notfound } from "../pages/404/Notfound"
import { Homepage } from "../pages/Homepage"
import { HomepageRoutes } from "../pages/HomeRoutes"

export const routes = [
    {
        path: '/',
        element: <Homepage />,
        errorElement: <Notfound />,
        children: HomepageRoutes,
    },
]