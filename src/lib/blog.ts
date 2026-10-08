export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: { h: string; p: string[] }[];
  related: string[];
}

export const posts: Post[] = [
  {
    slug: "turnkey-construction-vs-separate-contractors-hyderabad",
    title: "Turnkey Construction vs Hiring Separate Contractors in Hyderabad",
    description:
      "How turnkey construction compares with hiring civil, electrical, carpentry and painting contractors separately, and which suits your project.",
    date: "2026-10-08",
    sections: [
      {
        h: "What turnkey construction means",
        p: ["In a turnkey project one contractor is responsible for civil work, MEP coordination, interior fit-out and handover under a single contract. You receive an itemised BOQ up front and deal with one accountable team."],
      },
      {
        h: "Hiring separate contractors",
        p: ["Appointing a civil contractor, an electrician, a carpenter and a painter separately can look cheaper on paper, and it gives you direct control over each trade. The trade-off is that you become the project manager: sequencing the trades, resolving clashes between them and chasing delays."],
      },
      {
        h: "How to decide",
        p: [
          "Turnkey usually suits owners who want a single point of responsibility, a fixed scope in writing and less day-to-day coordination. Separate contractors can suit small, single-trade jobs or owners who have time and site experience.",
          "Whichever route you take, insist on a written scope, an itemised BOQ and a clear payment schedule tied to completed work.",
        ],
      },
    ],
    related: ["turnkey-construction-hyderabad", "civil-contractors-hyderabad"],
  },
  {
    slug: "how-to-choose-a-civil-contractor-in-hyderabad",
    title: "How to Choose a Civil Contractor in Hyderabad",
    description: "A practical checklist for comparing civil contractors in Hyderabad: scope, BOQ, site supervision, references and payment terms.",
    date: "2026-10-08",
    sections: [
      {
        h: "Ask for an itemised BOQ",
        p: ["A BOQ lists each work item, quantity and rate. Compare quotes line by line rather than by total, because a low total often hides excluded items."],
      },
      {
        h: "Check completed work",
        p: ["Ask to see completed projects similar to yours and, where possible, speak to previous clients. Online reviews that name the type of work and location are more useful than generic praise."],
      },
      {
        h: "Understand supervision and payments",
        p: ["Find out who manages the site daily, how progress is reported and how payments are linked to completed milestones. Clear answers here prevent most disputes later."],
      },
    ],
    related: ["civil-contractors-hyderabad", "turnkey-construction-hyderabad"],
  },
  {
    slug: "what-affects-interior-design-cost-in-hyderabad",
    title: "What Affects Interior Design Cost in Hyderabad",
    description: "The main factors that decide interior costs in Hyderabad: scope, area, materials, hardware, ceilings, lighting and site conditions.",
    date: "2026-10-08",
    sections: [
      {
        h: "Scope and area",
        p: ["A full-home interior covering carpentry, ceilings, lighting and painting costs differently from a single-room makeover. Built-up area and the number of custom units are the biggest drivers."],
      },
      {
        h: "Materials, finishes and hardware",
        p: ["Laminate, acrylic, veneer and PU finishes are priced differently, as are soft-close fittings and countertop materials. Ask your contractor to name the brand and grade of each material in the BOQ."],
      },
      {
        h: "Ceilings, electrical and site conditions",
        p: ["False ceilings with cove lighting, extra electrical points and repair work on existing surfaces all add to scope. A site inspection is the only reliable way to get an accurate quote."],
      },
    ],
    related: ["luxury-interior-design-hyderabad", "false-ceiling-hyderabad", "modular-kitchen-hyderabad"],
  },
  {
    slug: "things-to-check-before-hiring-a-contractor-in-hyderabad",
    title: "Things to Check Before Hiring a Construction Contractor in Hyderabad",
    description: "A short checklist before signing with a construction or interior contractor in Hyderabad.",
    date: "2026-10-08",
    sections: [
      {
        h: "Before you sign",
        p: ["Get the scope, BOQ, timeline and payment schedule in writing. Confirm what is excluded, who supplies materials, and how changes to the scope are priced."],
      },
      {
        h: "During the project",
        p: ["Ask for regular progress updates with photos, and inspect work at each payment milestone before releasing the next instalment."],
      },
      {
        h: "At handover",
        p: ["Request warranty terms and any documentation in writing, and do a walkthrough with a snag list before final payment."],
      },
    ],
    related: ["turnkey-construction-hyderabad", "commercial-interior-contractors-hyderabad"],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
