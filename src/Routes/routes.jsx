import { createBrowserRouter } from "react-router-dom";
import HeroSection from "../components/organisms/HeroSection";
import Content from "../components/molecules/Content";
import WatchPage from "../components/molecules/WatchPage";


const router = createBrowserRouter([
    {
        path : "/",
        element : <HeroSection />,
        children : [
            {
                path : "/",
                element : <Content />
            },
            {
                path : "watch",
                element : <WatchPage />
            }
        ]
    }
])

export default router;