import { createBrowserRouter } from "react-router"
import { Home, HomeLayout, Reservation } from "../pages"

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "reservation",
        Component: Reservation,
      },
    ],
  },
])

export default router
