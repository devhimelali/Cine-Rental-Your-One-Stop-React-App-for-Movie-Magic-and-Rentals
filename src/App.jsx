import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MovieList from "./components/cine/MovieList.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <>
            <Header/>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar/>
                    <MovieList/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default App
