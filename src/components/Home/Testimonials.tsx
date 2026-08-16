"use client";
import { useReviews } from "@/hooks/useReviews";
import { Star } from "lucide-react";
import Container from "../common/Container";

export const Testimonials = () => {
  const { reviewsQuery } = useReviews();
  const reviews = reviewsQuery.data || [];

  const cardStyles = [
    {
      bgColor: "bg-white",
      textColor: "text-primary-text",
      colorTag: "bg-secondary",
      quoteColor: "text-red-500",
    },
    {
      bgColor: "bg-secondary",
      textColor: "text-primary-text",
      colorTag: "bg-red-500",
      quoteColor: "text-primary-text",
    },
    {
      bgColor: "bg-white",
      textColor: "text-primary-text",
      colorTag: "bg-blue-600",
      quoteColor: "text-red-500",
    },
  ];

  return (
    <section
      id="testimonial"
      className="bg-[#E7483B] py-10 md:py-16 border-b border-brand-dark"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <h2 className="text-primary text-2xl hidden sm:block md:text-4xl font-bold leading-none uppercase">
            CLIENT FEEDBACK
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((t, idx) => {
            const style = cardStyles[idx % cardStyles.length];

            return (
              <div
                key={idx}
                className={`border-2 border-brand-dark p-6 ${style.bgColor} shadow-[7px_7px_0px_0px_rgba(26,26,26,1)] flex flex-col justify-between min-h-70`}
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating || 5)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        size={18}
                        className="fill-yellow-400 text-black stroke-[1.5]"
                      />
                    ))}
                  </div>

                  <span
                    className={`text-2xl font-black italic ${style.quoteColor}`}
                  >
                    //
                  </span>
                  <p className="mt-3 text-sm font-bold uppercase  text-primary-text line-clamp-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-3 w-full">
                  <div className="h-0.5 w-full bg-primary-text opacity-30 mb-4"></div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-7 border border-brand-dark ${style.colorTag}`}
                    ></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xs text-primary-text uppercase">
                        {t.clientName}
                      </span>
                      <span className="text-[8px]  text-primary-text opacity-70 uppercase font-bold tracking-wider">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
