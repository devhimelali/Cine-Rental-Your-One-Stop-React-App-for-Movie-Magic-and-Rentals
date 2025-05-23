const initialState = {
    cartItems: [],
}
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                cartItems: [...state.cartItems, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}

export { initialState, cartReducer }