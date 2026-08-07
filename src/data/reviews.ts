export interface ClientReview {
  clientName: string;
  comment: string;
  rating: number;
  role: string;
}

export const REVIEWS_DATA: ClientReview[] = [
  {
    clientName: "Elena Ferro",
    comment:
      "The team was great to work with. They were very professional and cordial. They welcomed all my feedback and worked hard to make all my requirements come together in a great custom website with proprietary user and admin dashboards. Their communication was excellent and they were willing to make several adjustments along the way. Thank you!",
    rating: 5,
    role: "Full Stack Custom Website & Dashboards",
  },
  {
    clientName: "Ade Adebola",
    comment:
      "This is our third project together, and I will definitely continue using them. They are highly professional and remain supportive even after the project is completed. If any issues arise, they don't argue or make comparisons; they simply fix everything and deliver excellent results. I'm very satisfied with their work and highly recommend them.",
    rating: 5,
    role: "Kajabi Website Design & Landing Page",
  },
  {
    clientName: "Kale Kneale",
    comment:
      "Very thankful for the team is delivering this part of the project. They are very receptive to modifications and provide great communication. I also am thankful that they are willing to jump on zoom calls to clarify elements along the way!",
    rating: 5,
    role: "Full Stack Web Application Development",
  },
];
