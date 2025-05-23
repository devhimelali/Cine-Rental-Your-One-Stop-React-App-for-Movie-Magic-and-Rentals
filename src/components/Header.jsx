import Logo from "../assets/images/logo.svg";
import Ring from "../assets/images/ring.svg";
import ShoppingCart from "../assets/images/shopping-cart.svg";
import Moon from "../assets/images/icons/moon.svg";
import Sun from "../assets/images/icons/sun.svg";
import { useState, useContext } from "react";
import CartDetails from "./cine/CartDetails.jsx";
import { MovieContext, ThemeContext } from "../contexts/index.js";

export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const { state } = useContext(MovieContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const handleShowCart = () => {
        setShowCart(true);
    }

    return (
        <header>
            {showCart && <CartDetails onClose={() => setShowCart(false)}/>}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="#">
                    <img src={Logo} width="139" height="26" alt="logo"/>
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <img src={Ring} width="24" height="24" alt="ring"/>
                        </a>
                    </li>
                    <li>
                        <button
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            onClick={() => setDarkMode(!darkMode)}>
                            <img src={darkMode ? Sun : Moon} width="24" height="24" alt="moon"/>
                        </button>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#"
                           onClick={handleShowCart}
                        >
                            <img src={ShoppingCart} width="24" height="24" alt="shopping Cart"/>
                            {state.cartItems.length > 0 && <span
                                className="absolute top-[-8px] right-[-10px] bg-primary text-white font-semibold p-2 rounded-full w-5 h-5 flex items-center justify-center">{state.cartItems.length}</span>}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}