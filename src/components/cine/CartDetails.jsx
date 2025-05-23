import { useContext } from "react";
import { MovieContext } from "../../contexts/index.js";
import CartItem from "./CartItem.jsx";
import CheckoutIcon from "../../assets/images/icons/checkout.svg"
import { toast } from "react-toastify";

export default function CartDetails({ onClose }) {
    const { state, dispatch } = useContext(MovieContext);

    const handleRemoveFromCart = (item) => () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item,
        });
        toast.success(`The movie ${item.title} has been removed from the cart`,{
            position: 'bottom-right',
        });
    };
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
        >
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto"
            >
                <div
                    className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9"
                >
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts</h2>
                    <div
                        className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14"
                    >
                        {
                            state.cartItems.length > 0 ?
                                state.cartItems.map((item) => (
                                    <CartItem key={item.id} item={item} onRemove={handleRemoveFromCart(item)}/>
                                )) : (
                                    <p className="text-center text-xl text-[#9fa0a4] dark:text-[#575A6E]">
                                        Your cart is empty
                                    </p>
                                )
                        }
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        {state.cartItems.length > 0 && (
                            <a
                                className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                                href="#"
                            >
                                <img src={CheckoutIcon} width="24" height="24" alt="checkout icon"/>
                                <span>Checkout</span>
                            </a>
                        )}

                        <a
                            className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                            href="#"
                            onClick={onClose}
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}