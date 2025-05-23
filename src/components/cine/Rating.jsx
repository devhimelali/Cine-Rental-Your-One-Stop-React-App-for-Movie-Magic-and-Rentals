import StarIcon from "../../assets/images/icons/StarIcon.jsx";

export default function Rating({ value = 0 }) {
    const totalStars = 5;
    return (
        <div className="flex items-center space-x-1 mb-5">
            {[...Array(totalStars)].map((_, index) => (
                <StarIcon
                    key={index}
                    fillColor={value > index ? "#ffd700" : "#E5E7EB"}
                />
            ))}
        </div>
    );
}