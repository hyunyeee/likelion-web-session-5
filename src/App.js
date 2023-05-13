import "./App.css";
import RandomClass from "./scss/RandomClass";
import Button from "./scss/Button";
import Circle from "./styled-components/Circle";
import Main from "./page/Main";
import GlobalStyle from "../src/components/GlobalStyle"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Board from "./page/MovieDetail";
import MovieDetail from "./page/MovieDetail";
//import "normalize.css"
//import {reset} from "styled-reset";


function App() {
    return (
        <>
            <>
                <GlobalStyle/>
                <BrowserRouter>
                    <Routes>

                        <Route index element={<Main />} />
                        <Route path={"/movie/:id"} element={<MovieDetail />} />

                    </Routes>

                </BrowserRouter>
            </>
        </>

    )
        ;
}

export default App;
