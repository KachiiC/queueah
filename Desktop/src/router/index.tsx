import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "../pages";

const Router = () => {
    
    const displayPages = Pages.map(page => <Route {...page} />)
    return (
        <BrowserRouter>
            <Routes>
                {displayPages}
            </Routes>
        </BrowserRouter>
    )

}

export default Router