import { useState } from "react";
import { SquarePen } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StarRating from "@/features/appointment/component/StarRating";
import ReviewForm from "@/features/appointment/component/ReviewForm";

interface ReviewsToolBarProps {
  rating: number;
  reviewsCount: number;
}

const ReviewsToolBar = ({ rating, reviewsCount }: ReviewsToolBarProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (review: { rating: number; text: string }) => {
    // UI only for now — no API. Confirm and close.
    toast.success("Thanks! Your review has been submitted.");
    console.log("New review:", review);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Title + add review */}
      <div className="flex items-center justify-between">
        <h2 className="text-text-h text-lg font-semibold">Reviews and Rating</h2>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="flex cursor-pointer items-center gap-1.5 text-sm font-medium text-brand hover:underline">
            <SquarePen className="size-4" />
            add review
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="sr-only">Add your review</DialogTitle>
            </DialogHeader>
            <ReviewForm onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Rating summary */}
      <div className="flex items-end justify-between">
        <p className="text-text-h text-4xl font-bold">
          {rating.toFixed(1)}
          <span className="text-text text-xl font-medium">/5</span>
        </p>
        <div className="flex flex-col items-end gap-1">
          <StarRating value={rating} sizeClassName="size-5" />
          <span className="text-text text-sm">
            {reviewsCount.toLocaleString()}+ Reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsToolBar;
