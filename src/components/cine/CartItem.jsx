import { getImageUrl } from "../../utils/cine-utility";
import DeleteIcon from '../../assets/images/delete.svg'

export default function CartItem({ item, onRemove }) {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-4">
            <div className="flex items-center gap-4">
                <img
                    className="rounded overflow-hidden w-16 h-16 object-cover"
                    src={getImageUrl(item.cover)}
                    alt={item.cover}
                />
                <div>
                    <h3 className="text-base md:text-xl font-bold">
                        {item.title}
                    </h3>
                    <p className="max-md:text-xs text-[#575A6E]">
                        {item.genre}
                    </p>
                    <span className="max-md:text-xs">${item.price}</span>
                </div>
            </div>
            <div className="flex justify-between gap-4 items-center">
                <button
                    className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    onClick={onRemove}
                >
                    <img className="w-5 h-5" src={DeleteIcon} alt="delete icon"/>
                    <span className="max-md:hidden">Remove</span>
                </button>
            </div>
        </div>
    );
}