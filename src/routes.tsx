import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { index: true, element: <HomePage /> },
      //   {
      //     path: "/games",
      //     element: <GamesPage />,
      //     // children: [{ path: ":id", element: <GameDetailPage /> }],
      //   },
        {
          path: "games/:id",
          element: <GameDetailPage />,
        },
    ],
  },
]);

export default router;
