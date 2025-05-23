import { getImageUrl } from "../../utils/cine-utility.js";
import Tag from "../../assets/images/tag.svg"
import Rating from "./Rating.jsx";
import { useState } from "react";
import MovieDetailModal from "./MovieDetailModal.jsx";

export default function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieSelection = (movie) => () => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };

    return (<>
            {showModal && <MovieDetailModal movie={selectedMovie} onClose={handleModalClose}/>}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={getImageUrl(movie.cover)} alt=""/>
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <Rating value={movie.rating}/>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                           href="#">
                            <img src={Tag} alt=""/>
                            <span>$100 | Add to Cart</span>
                        </a>
                    </figcaption>
                </a>
            </figure>
        </>

    );
}