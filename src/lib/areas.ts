export interface Area {
  slug: string;
  name: string;
  /** Short line for cards / meta */
  tagline: string;
  /** Two to three sentences, unique to this locality */
  intro: string;
  /** Typical properties we are asked to work on here */
  properties: string[];
  /** Work most often requested in this locality */
  popularWork: string[];
  /** Practical site considerations for this locality */
  siteNote: string;
  /** Slugs of neighbouring areas for internal linking */
  nearby: string[];
  /** One locality-specific FAQ */
  faq: { q: string; a: string };
}

type Seed = Omit<Area, "slug">;

const seeds: Seed[] = [
  {
    name: "Jubilee Hills",
    tagline: "Villa renovations, bespoke ceilings and wardrobes",
    intro:
      "Jubilee Hills is known for independent houses, villas and boutique showrooms. Many homes here are older and are being renovated rather than built new, so work usually starts with checking existing walls, wiring and ceilings before any design is finalised.",
    properties: ["Independent houses and villas", "Premium apartments", "Boutiques and showrooms"],
    popularWork: ["Gypsum false ceiling with cove lighting and profile lighting", "Villa renovation and repainting", "Custom wardrobes and wall panelling", "Concealed re-wiring"],
    siteNote:
      "Older buildings often need electrical re-wiring and surface repair first. We list these items separately in the BOQ so you can see them before you commit.",
    nearby: ["banjara-hills-hyderabad", "yousufguda-hyderabad", "madhapur-hyderabad"],
    faq: {
      q: "Can you renovate an older villa in Jubilee Hills without rebuilding it?",
      a: "Yes. After a site inspection we separate repair work (wiring, plaster, waterproofing checks) from new interior work in the BOQ, so you only pay for what the building actually needs.",
    },
  },
  {
    name: "Banjara Hills",
    tagline: "Apartments, offices and showroom fit-outs",
    intro:
      "Banjara Hills mixes independent houses, apartment buildings, clinics, restaurants and showrooms. Residential owners usually ask for ceilings, lighting and carpentry, while commercial owners need quick, well-supervised fit-outs.",
    properties: ["Apartments and independent houses", "Clinics and offices", "Restaurants and showrooms"],
    popularWork: ["False ceiling and POP design with profile lighting", "Apartment interiors", "Commercial and showroom fit-outs", "Painting and wall finishes"],
    siteNote:
      "Many buildings here have working hours and lift or parking rules for contractors. We plan material delivery and noisy work around your building's permission timings.",
    nearby: ["jubilee-hills-hyderabad", "ameerpet-hyderabad", "yousufguda-hyderabad"],
    faq: {
      q: "Do you handle fit-outs for clinics and showrooms in Banjara Hills?",
      a: "Yes. We do ceilings, partitions, electrical, painting and carpentry for commercial spaces under one contract, with the work sequenced to keep your opening date realistic.",
    },
  },
  {
    name: "Gachibowli",
    tagline: "Gated-community flats and IT-corridor offices",
    intro:
      "Gachibowli has large gated communities, high-rise apartments and many offices around the IT corridor. Flat owners typically want a full interior or specific upgrades, while companies want office fit-outs delivered on a fixed timeline.",
    properties: ["Gated-community apartments and villas", "High-rise flats", "Offices and co-working spaces"],
    popularWork: ["Gypsum false ceilings and boarding for gated-community flats", "Full-home interiors for 2 and 3 BHK flats", "Office ceilings and partitions", "Modular kitchens and wardrobes", "Electrical and lighting"],
    siteNote:
      "Gated communities usually require contractor registration, gate passes and fixed working hours. Check your community's rules early; we plan the schedule around them.",
    nearby: ["kondapur-hyderabad", "financial-district-hyderabad", "hitec-city-hyderabad"],
    faq: {
      q: "Will you work within my gated community's contractor rules in Gachibowli?",
      a: "Yes. Share your association's rules (working hours, deposits, material entry) before we start, and we schedule civil, ceiling, electrical and carpentry work to fit them.",
    },
  },
  {
    name: "Kondapur",
    tagline: "Apartment interiors close to the IT hubs",
    intro:
      "Kondapur is dense with apartment communities close to major IT offices. Most requests are for 2 and 3 BHK interiors, modular kitchens, wardrobes and false ceilings, often on a tight move-in date.",
    properties: ["2 and 3 BHK apartments", "Gated communities", "Small offices and retail units"],
    popularWork: ["False ceilings, POP design and profile lighting", "Complete 2 and 3 BHK interiors", "Modular kitchens", "Wardrobes and TV units", "Painting"],
    siteNote:
      "In apartment buildings, noise and lift-use limits matter. We stage the work so the noisiest tasks are done first and finishing is left for the end.",
    nearby: ["gachibowli-hyderabad", "madhapur-hyderabad", "hitec-city-hyderabad"],
    faq: {
      q: "How do you manage a tight move-in date for a Kondapur apartment?",
      a: "We agree the scope and itemised BOQ up front, order long-lead items such as carpentry hardware early, and run ceiling, electrical and carpentry work in a planned sequence with a site manager tracking progress.",
    },
  },
  {
    name: "Madhapur",
    tagline: "Offices, co-working spaces and apartments",
    intro:
      "Madhapur is a major commercial and residential area next to HITEC City. We are most often called for office ceilings, partitions and lighting, as well as apartment interiors for people working nearby.",
    properties: ["Offices and co-working spaces", "Apartments", "Retail and showroom units"],
    popularWork: ["Office false ceiling and profile lighting work", "Partitions and wall panelling", "Painting and finishing", "Apartment interiors"],
    siteNote:
      "Office fit-outs often have to run after hours or in phases so that neighbouring tenants are not disturbed. We plan the work in phases where needed.",
    nearby: ["hitec-city-hyderabad", "kondapur-hyderabad", "jubilee-hills-hyderabad", "yousufguda-hyderabad"],
    faq: {
      q: "Can an office in Madhapur be fitted out in phases?",
      a: "Yes. We can split the work by floor or zone and schedule noisy work outside business hours so that part of your team can keep working.",
    },
  },
  {
    name: "Kokapet",
    tagline: "New high-rise flats that need interiors from scratch",
    intro:
      "Kokapet has many new towers and gated projects, where flats are handed over as bare shells. That means owners need complete interiors: electrical points, ceilings, carpentry, kitchens, painting and finishing.",
    properties: ["New high-rise apartments", "Gated communities", "Villas in new layouts"],
    popularWork: ["Bare-shell to move-in interiors", "Electrical layout and concealed wiring", "False ceilings and lighting", "Modular kitchens and wardrobes"],
    siteNote:
      "For bare-shell flats, planning the electrical and ceiling layout before carpentry begins avoids rework. We confirm both in the BOQ stage.",
    nearby: ["financial-district-hyderabad", "gachibowli-hyderabad", "manikonda-hyderabad"],
    faq: {
      q: "Can you take a new bare-shell flat in Kokapet through to handover?",
      a: "Yes. Turnkey scope covers electrical, ceilings, carpentry, kitchen, painting and finishing under one contract, with one site manager responsible for sequencing.",
    },
  },
  {
    name: "Financial District",
    tagline: "Corporate fit-outs and new apartments",
    intro:
      "The Financial District has office towers and a growing number of apartment projects. Corporate clients need ceilings, partitions, electrical and lighting done to a schedule, while nearby residents need interiors for new flats.",
    properties: ["Corporate offices", "New apartments", "Retail units"],
    popularWork: ["Office ceilings and partitions", "Lighting and electrical work", "Painting", "Apartment interiors"],
    siteNote:
      "Tower management usually controls material entry, lift booking and working hours. We coordinate these with the facility team before mobilising.",
    nearby: ["kokapet-hyderabad", "gachibowli-hyderabad", "hitec-city-hyderabad"],
    faq: {
      q: "Do you coordinate with building management for office fit-outs in the Financial District?",
      a: "Yes. We confirm entry permissions, lift booking and working hours with the facility team and plan material deliveries around them.",
    },
  },
  {
    name: "HITEC City",
    tagline: "Tech-park offices and apartment interiors",
    intro:
      "HITEC City is the heart of Hyderabad's IT sector. Companies here need ceilings, partitions, electrical and lighting work, and employees living nearby often want their apartments done by one reliable contractor.",
    properties: ["Offices in tech parks", "Co-working spaces", "Nearby apartments"],
    popularWork: ["Office ceiling grids and acoustic panels", "Partitions and wall finishes", "Electrical and lighting", "Apartment interiors"],
    siteNote:
      "Tech-park fit-outs follow landlord guidelines on materials and fire safety. We build to those guidelines and list compliant materials in the BOQ.",
    nearby: ["madhapur-hyderabad", "kondapur-hyderabad", "gachibowli-hyderabad"],
    faq: {
      q: "Can you follow landlord fit-out guidelines in a HITEC City tech park?",
      a: "Yes. Share the landlord's fit-out guidelines and we specify materials and execution accordingly, so approvals do not hold up the project.",
    },
  },
  {
    name: "Kukatpally",
    tagline: "Apartment interiors, shops and small offices (incl. KPHB)",
    intro:
      "Kukatpally and KPHB have many apartment communities, shops and small offices. Most work here is practical home interiors, wardrobes, kitchens, ceilings and repainting for families, plus shop and office fit-outs.",
    properties: ["Apartments and independent houses", "Shops and showrooms", "Small offices and clinics"],
    popularWork: ["Home interiors for 2 and 3 BHK", "Wardrobes and kitchens", "Repainting and repairs", "Shop fit-outs"],
    siteNote:
      "Budget clarity matters most here, so we give an itemised BOQ and show where costs can be reduced without changing the layout.",
    nearby: ["borabanda-hyderabad", "miyapur-hyderabad", "yousufguda-hyderabad"],
    faq: {
      q: "Can I get a budget-friendly interior in Kukatpally or KPHB without hidden costs?",
      a: "Yes. We quote against an itemised BOQ after a site inspection, and we can propose alternative finishes for items where you want to reduce cost.",
    },
  },
  {
    name: "Yousufguda",
    tagline: "Close to our Borabanda office, fast site visits",
    intro:
      "Yousufguda is a busy residential and commercial neighbourhood close to Jubilee Hills and Borabanda. We are nearby, so site inspections and supervision visits are quick to arrange.",
    properties: ["Apartments", "Independent houses", "Shops and small commercial spaces"],
    popularWork: ["Apartment interiors", "False ceilings and painting", "Wardrobes and carpentry", "Shop and office fit-outs"],
    siteNote:
      "Because our office is nearby, we can inspect the site, take measurements and revisit quickly when you want changes.",
    nearby: ["borabanda-hyderabad", "jubilee-hills-hyderabad", "ameerpet-hyderabad"],
    faq: {
      q: "How quickly can you visit my site in Yousufguda?",
      a: "Our office is in nearby Borabanda, so we can usually arrange a site inspection at short notice. Call or WhatsApp us with your location and a convenient time.",
    },
  },
  {
    name: "Ameerpet",
    tagline: "Commercial units, offices and apartment buildings",
    intro:
      "Ameerpet is a commercial hub with shops, offices, training institutes and residential buildings. Fit-outs here are often compact spaces, so planning the ceiling, lighting and storage carefully matters.",
    properties: ["Shops and showrooms", "Offices and training centres", "Apartments"],
    popularWork: ["Commercial fit-outs", "False ceilings and lighting", "Partitions and carpentry", "Painting"],
    siteNote:
      "Access for materials can be tight on busy roads. We plan deliveries for off-peak hours and keep site waste cleared regularly.",
    nearby: ["yousufguda-hyderabad", "banjara-hills-hyderabad", "borabanda-hyderabad"],
    faq: {
      q: "Can you fit out a small shop or office in Ameerpet within a limited area?",
      a: "Yes. Compact spaces benefit from careful planning: we propose layouts, ceiling and lighting plans and storage in the BOQ stage so every square foot is used well.",
    },
  },
  {
    name: "Borabanda",
    tagline: "Our home area: showrooms, apartments and quick service",
    intro:
      "Borabanda is where RA Contractor is based, near Allapur Road. We have worked on showroom ceilings, painting and carpentry here, and being local means quick inspections and easy follow-up on warranty and touch-up work.",
    properties: ["Showrooms and shops", "Apartments", "Independent houses"],
    popularWork: ["Showroom ceilings, painting and carpentry", "Apartment interiors", "Electrical work", "Repairs and touch-ups"],
    siteNote:
      "We are close to the site, so our site manager can visit often and any snag at handover is fixed quickly.",
    nearby: ["yousufguda-hyderabad", "kukatpally-hyderabad", "ameerpet-hyderabad"],
    faq: {
      q: "Is RA Contractor based in Borabanda?",
      a: "Yes. Our address is Allapur Rd, near JK Point, Swaraj Nagar, Borabanda, Hyderabad 500114. You are welcome to call or WhatsApp us to arrange a visit.",
    },
  },
  {
    name: "Manikonda",
    tagline: "Gated-community homes and growing residential layouts",
    intro:
      "Manikonda in western Hyderabad has many gated communities, apartments and newer residential layouts. Owners generally want complete or partial home interiors and renovation work for new and resale homes.",
    properties: ["Gated-community apartments", "Villas and independent houses", "Resale homes needing renovation"],
    popularWork: ["Complete home interiors", "Resale-home renovation", "Modular kitchens and wardrobes", "Painting and ceilings"],
    siteNote:
      "For resale homes, we inspect walls, plumbing and wiring first and list repair items separately from new interior work.",
    nearby: ["gachibowli-hyderabad", "kokapet-hyderabad", "financial-district-hyderabad"],
    faq: {
      q: "Do you renovate resale flats in Manikonda?",
      a: "Yes. We inspect the existing condition first, then price repair and new work separately in the BOQ so you can decide which items to include.",
    },
  },
  {
    name: "Miyapur",
    tagline: "Apartment communities and shops along the metro corridor",
    intro:
      "Miyapur has large apartment communities and a lot of retail activity along the metro corridor. Most interior requests are for family homes, kitchens, wardrobes and repainting, with some shop and clinic fit-outs.",
    properties: ["Apartments and gated communities", "Shops and clinics", "Independent houses"],
    popularWork: ["2 and 3 BHK interiors", "Modular kitchens", "Wardrobes", "Shop and clinic fit-outs"],
    siteNote:
      "We confirm material-entry timings with your association and keep the common areas clean while work is in progress.",
    nearby: ["kukatpally-hyderabad", "borabanda-hyderabad", "manikonda-hyderabad"],
    faq: {
      q: "Can you do a full 3 BHK interior in a Miyapur apartment?",
      a: "Yes. A full 3 BHK covers carpentry, ceilings, lighting, electrical and painting under one scope. We price it against an itemised BOQ after inspecting your flat.",
    },
  },
  {
    name: "Secunderabad",
    tagline: "False ceilings, offices and heritage home renovations",
    intro:
      "Secunderabad is one of Hyderabad's twin cities with a mix of older independent homes, army residential areas, commercial buildings and offices. False ceiling upgrades, POP design and commercial fit-outs are the most common requests here.",
    properties: ["Independent houses and bungalows", "Commercial offices", "Apartments and residential complexes"],
    popularWork: ["False ceiling and POP design for homes and offices", "Gypsum boarding with cove lighting", "Commercial office fit-outs", "Painting and wall finishing", "Electrical and concealed wiring"],
    siteNote:
      "Older homes in Secunderabad sometimes need structural checks before ceiling work begins. We inspect the existing slab and beam positions before finalising the ceiling design.",
    nearby: ["begumpet-hyderabad", "ameerpet-hyderabad", "hitec-city-hyderabad"],
    faq: {
      q: "Can you install a gypsum false ceiling in an older Secunderabad home?",
      a: "Yes. We inspect the existing roof slab first, then plan the ceiling grid and cove lighting layout to suit the room height. Older homes often gain the most from a well-designed false ceiling.",
    },
  },
  {
    name: "Begumpet",
    tagline: "Commercial offices and premium apartment interiors",
    intro:
      "Begumpet is a prime commercial and residential hub close to the airport road corridor. Office buildings, embassies, showrooms and high-end apartments make it one of Hyderabad's most active zones for interior fit-out and false ceiling work.",
    properties: ["Corporate offices and showrooms", "Premium apartments", "Embassies and institutional buildings"],
    popularWork: ["False ceiling and profile lighting for offices", "Gypsum boarding and POP design", "Luxury apartment interiors", "Partitions and glass walls", "Painting and premium wall finishes"],
    siteNote:
      "Many commercial buildings in Begumpet have security clearance requirements for contractors. We carry all necessary documentation and coordinate entry with your facility or admin team.",
    nearby: ["secunderabad-hyderabad", "ameerpet-hyderabad", "banjara-hills-hyderabad"],
    faq: {
      q: "Do you handle false ceiling and fit-out work in Begumpet offices?",
      a: "Yes. We cover ceilings, profile lighting, partitions, electrical and painting for offices under one contract, with work scheduled to avoid disruption to your operations.",
    },
  },
  {
    name: "Kompally",
    tagline: "Growing residential layouts and villa communities",
    intro:
      "Kompally in northern Hyderabad is one of the fastest growing residential zones with independent villas, plotted layouts and new apartment communities. Homeowners here often need complete interiors from scratch, including false ceilings, modular kitchens and full carpentry.",
    properties: ["Independent villas and plots", "New apartment communities", "Gated residential layouts"],
    popularWork: ["False ceiling with cove and spot lighting for villas", "Complete bare-shell to move-in interiors", "Modular kitchens and wardrobes", "POP design and wall textures", "Electrical layout and concealed wiring"],
    siteNote:
      "New constructions in Kompally often hand over as bare shells. We plan the full electrical, ceiling and carpentry sequence before starting so there is no rework later.",
    nearby: ["secunderabad-hyderabad", "miyapur-hyderabad", "kukatpally-hyderabad"],
    faq: {
      q: "Can you complete the full interior of a new villa in Kompally?",
      a: "Yes. Turnkey scope covers electrical layout, false ceilings, carpentry, modular kitchen, painting and finishing — all under one contract with a dedicated site manager.",
    },
  },
  {
    name: "Film Nagar",
    tagline: "Luxury villa interiors and premium false ceiling work",
    intro:
      "Film Nagar is one of Hyderabad's most prestigious residential localities, home to many luxury villas and bungalows. Clients here typically request high-end false ceilings with integrated ambient lighting, premium carpentry and full villa renovation or interior services.",
    properties: ["Luxury villas and bungalows", "Premium independent houses", "High-value residential properties"],
    popularWork: ["Luxury false ceiling with ambient cove and profile lighting", "High-end gypsum boarding and POP design", "Premium villa renovation", "Bespoke wardrobes and wall panelling", "Turnkey villa interiors"],
    siteNote:
      "Luxury properties in Film Nagar usually need detailed design approval before site work begins. We provide 3D ceiling layout visualisations on request so clients can confirm the look before execution.",
    nearby: ["jubilee-hills-hyderabad", "banjara-hills-hyderabad", "madhapur-hyderabad"],
    faq: {
      q: "What kind of false ceiling is best for a luxury villa in Film Nagar?",
      a: "For luxury villas we typically recommend gypsum board false ceilings with integrated LED cove lighting, recessed spotlights and concealed profile light channels. We present a layout plan and material samples before starting work.",
    },
  },
];

export const areas: Area[] = seeds.map((s) => ({
  ...s,
  slug: `${s.name.toLowerCase().replace(/ /g, "-")}-hyderabad`,
}));

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
