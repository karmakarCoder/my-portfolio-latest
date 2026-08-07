import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "./axios/useAxiosPublic";
import { REVIEWS_DATA, ClientReview } from "@/data/reviews";

export const useReviews = () => {
  const reviewsQuery = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      try {
        const { data } = await axiosPublic.get("/reviews");
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          return data.data as ClientReview[];
        }
      } catch (error) {
        console.warn("Reviews API unavailable, using static reviews dataset.");
      }
      return REVIEWS_DATA;
    },
    initialData: REVIEWS_DATA,
  });

  return {
    reviewsQuery,
  };
};
