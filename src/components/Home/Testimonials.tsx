"use client";
import { useReviews } from "@/hooks/useReviews";
import { Star } from "lucide-react";

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
      className="bg-[#E7483B] p-6 md:p-12 lg:p-20 border-b-2 lg:border-b-4 border-brand-dark"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-4">
        <h2 className="text-primary text-4xl hidden sm:block md:text-6xl font-bold leading-none uppercase tracking-tighter">
          TRANSMISSION_LOGS
        </h2>
        <div className="flex flex-col mb-2">
          <span className="text-primary font-bold tracking-widest text-sm md:text-base uppercase pb-2">
            CLIENT
            <br />
            FEEDBACK
          </span>
          <div className="h-1 w-full bg-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {reviews.map((t, idx) => {
          const style = cardStyles[idx % cardStyles.length];

          return (
            <div
              key={idx}
              className={`border-4 border-brand-dark p-8 md:p-12 ${style.bgColor} shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] flex flex-col justify-between min-h-100`}
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating || 5)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      size={18}
                      className="fill-yellow-400 text-black stroke-[1.5]"
                    />
                  ))}
                </div>

                <span
                  className={`text-4xl font-black italic ${style.quoteColor}`}
                >
                  //
                </span>
                <p className="mt-6 text-xl font-bold uppercase leading-snug text-primary-text">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="mt-12 w-full">
                <div className="h-0.5 w-full bg-primary-text opacity-30 mb-8"></div>
                <div className="flex items-center gap-6">
                  <div
                    className={`w-10 h-10 border-2 border-brand-dark ${style.colorTag}`}
                  ></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-primary-text uppercase">
                      {t.clientName}
                    </span>
                    <span className="text-[10px] md:text-xs text-primary-text opacity-70 uppercase font-bold tracking-wider">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
