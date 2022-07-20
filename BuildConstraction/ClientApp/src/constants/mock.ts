import { IProject } from "../types/project";
import { ITestimonial } from "../types/testimonial";

export const MOCK_DATA_LAST_PROJECTS: IProject[] = [
  {
    id: 1,
    name: "Classic Court",
    pathImg: "main_bg_image.png",
  },
  {
    id: 2,
    name: "Will Rose Lane",
    pathImg: "main_bg_image.png",
  },
  {
    id: 3,
    name: "Shannon Run Road",
    pathImg: "main_bg_image.png",
  },
];

export const MOCK_DATA_NEW_PLANS: IProject[] = [
  {
    id: 1,
    name: "The Magnolia",
    pathImg: "house_plan.jpeg",
  },
  {
    id: 2,
    name: "The Birch",
    pathImg: "house_plan.jpeg",
  },
  {
    id: 3,
    name: "The Alpine",
    pathImg: "house_plan.jpeg",
  },
  {
    id: 3,
    name: "The Alder",
    pathImg: "house_plan.jpeg",
  },
];

export const MOCK_DATA_TESTIMONIALS: ITestimonial[] = [
  {
    message: ` “We love our forever home! Our contractor Robert DeArmond worked with
      us from purchasing the house plan, itemizing budgets, to the final
      inspection prior to moving in. He was fully involved in providing
      quality sub-contractors and was on the work siteregularly evaluating
      thier progress. His experience was invaluable in executing changes to
      the house plan in order to meetour desires. We recommend Robert
      DeArmond Hombuilders to provide you with a quality home”`,
    author: "A & M Pascal",
    authorStatus: "Homeowners",
  },
  {
    message: `“We have been extreamly pleased with our custom built home by DeArmond Homebuilders. With Robert as our general contractor, the process went very smoothly. We have a well being house, with extra touches we were looking for, from structural to cosmetic. We would definitely use DeArmond Homebuilders in the future”`,
    author: "S & R Dixon",
    authorStatus: "Homeowners",
  },
  {
    message: `“When we built our new home, we didn’t even take bids from other contractors, because of the quality craftsmanship, attetion to detail, and the continual involvement we had experienced with Robert on previous remodeling projects. Robert is great to provide perspective on design elements or structural components, always working to help the homeowner understand the benefits or the challenges that could be faced with various options, including the costs associated. The trust and relationship we developed with Robert helped us make the best decisions and build the home we’d always wanted, without any of the worries or stress. Five years later we couldn’t be happier with our results!”`,
    author: "M & D Duckworth",
    authorStatus: "Homeowners",
  },
  {
    message: `“Trust is the most important factor in choosing a home builder, and I trust Robert DeArmond. He demands excellence and pays attention to even the smallest detail. I’m proud of the house Robert custom-built for me.”`,
    author: "F Wellman",
    authorStatus: "Homeowners",
  },
  {
    message: `“Robert’s personal integrity paired with his dedication to his profession made the building process enjoyable and rewarding. We are extremely pleased with the home we built with Robert and wouldn’t consider starting another home construction project without him.”`,
    author: "R Teater",
    authorStatus: "Homeowners",
  },
];
