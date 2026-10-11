export interface Post {
  slug: string;
  title: string;
  /** Shorter <title> (<= ~44 chars) so Google does not truncate it */
  metaTitle?: string;
  description: string;
  date: string;
  sections: { h: string; p: string[] }[];
  related: string[];
}

export const posts: Post[] = [
  {
    slug: "turnkey-construction-vs-separate-contractors-hyderabad",
    title: "Turnkey Construction vs Hiring Separate Contractors in Hyderabad",
    metaTitle: "Turnkey vs Separate Contractors in Hyderabad",
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
    related: ["home-interior-design-hyderabad", "false-ceiling-hyderabad", "modular-kitchen-hyderabad"],
  },
  {
    slug: "things-to-check-before-hiring-a-contractor-in-hyderabad",
    title: "Things to Check Before Hiring a Construction Contractor in Hyderabad",
    metaTitle: "Hiring a Contractor in Hyderabad: Checklist",
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
  {
    slug: "false-ceiling-cost-per-sq-ft-hyderabad",
    title: "False Ceiling Cost per Sq Ft in Hyderabad: What Decides the Rate",
    metaTitle: "False Ceiling Cost per Sq Ft in Hyderabad",
    description: "What decides the per sq ft rate of a false ceiling in Hyderabad: ceiling type, design, lighting, height and how to compare quotes properly.",
    date: "2026-10-11",
    sections: [
      {
        h: "Ceiling type changes the rate",
        p: ["Gypsum board, POP, grid ceilings with mineral-fibre or metal tiles, and wood or PVC panel ceilings are all priced differently. A plain flat gypsum ceiling costs less than a multi-level design with cove lighting, and acoustic or wood-finish panels sit higher again."],
      },
      {
        h: "Design, height and lighting",
        p: ["More levels, curves and cove profiles mean more framing and finishing time. Ceiling height, the number of light points and the type of lights (profile lights, spots, cove strips) also change the final amount, so a rate quoted without the design is only a rough guide."],
      },
      {
        h: "How to compare quotes",
        p: [
          "Ask every contractor to quote against the same drawing and to state whether the rate includes framing, boards, putty, painting, lighting points and wiring, or only the ceiling structure. Also check whether the area is measured as flat floor area or as the actual ceiling surface, because this changes the total.",
          "A site inspection and itemised BOQ is the only reliable way to get an accurate figure for your space.",
        ],
      },
    ],
    related: ["false-ceiling-hyderabad", "electrical-contractors-hyderabad", "painting-contractors-hyderabad"],
  },
  {
    slug: "2bhk-3bhk-interior-cost-hyderabad",
    title: "2 BHK and 3 BHK Interior Cost in Hyderabad: What a Quote Should Include",
    metaTitle: "2 BHK & 3 BHK Interior Cost in Hyderabad",
    description: "A checklist of what a 2 BHK or 3 BHK interior quote in Hyderabad should list, so you can compare contractors line by line.",
    date: "2026-10-11",
    sections: [
      {
        h: "Start with the scope",
        p: ["Decide which rooms and items are included: wardrobes, TV unit, kitchen, false ceiling, lighting, painting, wall panelling, study unit. Two quotes can differ by a large amount simply because one covers more items than the other."],
      },
      {
        h: "What an itemised BOQ should show",
        p: ["Each item with its size or quantity, material and finish, brand or grade of hardware, and rate. Look for separate lines for electrical points, ceiling work and painting rather than a single lump sum for the whole flat."],
      },
      {
        h: "What can change the final amount",
        p: [
          "Changes made after work starts, extra electrical points, repairs found after opening walls or ceilings, and upgrades in material grade are the usual reasons for cost increases. Ask how such changes will be priced before you sign.",
          "Flat size, finishes and number of custom units set the budget, so request a quote after a site visit instead of relying on a generic per sq ft number.",
        ],
      },
    ],
    related: ["home-interior-design-hyderabad", "modular-kitchen-hyderabad", "carpentry-wardrobes-hyderabad"],
  },
  {
    slug: "interior-contractor-vs-interior-designer-hyderabad",
    title: "Interior Contractor vs Interior Designer in Hyderabad: Which Do You Need?",
    metaTitle: "Interior Contractor vs Designer in Hyderabad",
    description: "The difference between hiring an interior contractor and an interior designer in Hyderabad, and when a contractor handling design and execution makes sense.",
    date: "2026-10-11",
    sections: [
      {
        h: "What each one does",
        p: ["An interior designer focuses on concept, layout, mood boards and drawings. An interior contractor focuses on executing the work on site: civil changes, ceilings, electrical, carpentry, painting and finishing. Some firms offer both, others only one."],
      },
      {
        h: "When a contractor alone is enough",
        p: ["If you already know the layout and finishes you want, or you have drawings from a designer or architect, a contractor can execute them directly. This can reduce coordination layers, since one team is accountable for cost, quality and timeline."],
      },
      {
        h: "When you may want a designer too",
        p: ["For a full redesign of a large home or a brand-sensitive commercial space, a separate designer can help with concepts and 3D views. In that case, ask the contractor to quote against the designer's drawings with an itemised BOQ."],
      },
    ],
    related: ["home-interior-design-hyderabad", "turnkey-construction-hyderabad", "commercial-interior-contractors-hyderabad"],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
