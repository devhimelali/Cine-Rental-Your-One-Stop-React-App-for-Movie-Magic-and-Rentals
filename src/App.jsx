import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MovieList from "./components/cine/MovieList.jsx";
import Footer from "./components/Footer.jsx";
import { MovieContext } from "./contexts/index.js";
import { useState } from "react";


function App() {
    const [cartData, setCartData] = useState([]);
    return (
        <>
            <MovieContext.Provider value={{cartData, setCartData}}>
                <Header/>
                <main>
                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                        <Sidebar/>
                        <MovieList/>
                    </div>
                </main>
                <Footer/>
            </MovieContext.Provider>
        </>
    )
}

export default App
