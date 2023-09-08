import { Star } from "lucide-react";

interface RatingProps {
  rating: number; // Rating value (between 0 and 5)
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Calculate the number of filled and empty stars based on the rating
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex gap-1">
      {[...Array(filledStars)].map((_, index) => <Star fill="#005433" key={index} />)}
      {[...Array(emptyStars)].map((_, index) => <Star key={index} />)}
    </div>
  );
};

export default Rating;
