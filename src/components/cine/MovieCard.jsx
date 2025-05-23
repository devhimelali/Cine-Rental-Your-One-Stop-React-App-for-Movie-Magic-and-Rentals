import { getImageUrl } from "../../utils/cine-utility.js";
import Tag from "../../assets/images/tag.svg";
import Rating from "./Rating.jsx";
import { useContext, useState } from "react";
import MovieDetailModal from "./MovieDetailModal.jsx";
import { MovieContext } from "../../contexts/index.js";

export default function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { cartData, setCartData } = useContext(MovieContext);

    const handleMovieSelection = (movie) => () => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        const found = cartData.find((item) => item.id === movie.id);
        if (!found) {
            setCartData([...cartData, movie]);
        } else {
            console.error(`The movie ${movie.title} is already in the cart`);
        }
    };

    return (
        <>
            {showModal && <MovieDetailModal movie={selectedMovie} onAddToCart={handleAddToCart} onClose={handleModalClose}/>}

            <figure
                className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer"
                onClick={handleMovieSelection(movie)}
            >
                <img
                    className="w-full object-cover rounded"
                    src={getImageUrl(movie.cover)}
                    alt={`${movie.title} cover`}
                />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <Rating value={movie.rating}/>
                    <button
                        className="bg-primary mt-3 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm w-full"
                        onClick={handleAddToCart}
                    >
                        <img src={Tag} alt="Tag icon"/>
                        <span>${movie.price} | Add to Cart</span>
                    </button>
                </figcaption>
            </figure>
        </>
    );
}
