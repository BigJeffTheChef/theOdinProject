import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Home";

const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            {/*<Route path='/shop' element={Shop} />*/}
        </Routes>
    </BrowserRouter>
);

export default MainRouter;