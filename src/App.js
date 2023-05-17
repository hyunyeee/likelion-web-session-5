import "./App.css";
import Main from "./page/Main";
import GlobalStyle from "../src/components/GlobalStyle"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MovieDetail from "./page/MovieDetail";
import NavBar from "./components/NavBar";


function App() {


    return (
        <>
            <>
                <GlobalStyle/>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route index element={<Main/>}/>
                        <Route path={"/movie/:id"} element={<MovieDetail/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        </>
    )
        ;
}

export default App;
