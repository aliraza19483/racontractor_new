import { galleryItems } from "@/lib/galleryData";

export interface ServiceContent {
  about: string[];
  process: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  extraFaqs: { q: string; a: string }[];
  /** Gallery ids of real RA Contractor site photos for this service */
  photoIds: number[];
}

const P = (title: string, text: string) => ({ title, text });

export const serviceContent: Record<string, ServiceContent> = {
  "civil-contractors-hyderabad": {
    about: [
      "Civil work is the foundation of every project: structure, masonry, plastering, waterproofing, flooring and the services that run through the walls. We handle new construction as well as renovation and remodelling of existing homes, offices and industrial spaces in Hyderabad.",
      "Work is planned trade by trade, supervised on site, and measured against an itemised BOQ so you can track what has been done and what is pending.",
    ],
    process: [
      P("Site visit & brief", "We visit the site, understand your requirement and note structural and access constraints."),
      P("Scope & BOQ", "You receive an itemised BOQ listing work, materials and exclusions before anything starts."),
      P("Planning", "Trades are sequenced (masonry, plumbing and electrical rough-in, plastering, waterproofing, flooring) to avoid rework."),
      P("Execution & supervision", "Work is carried out under a site manager with regular progress checks."),
      P("Inspection & handover", "We walk the site with you, close snags and hand over the finished work."),
    ],
    benefits: [
      P("One contract", "Civil, plumbing and electrical coordination under a single point of responsibility."),
      P("Clear scope", "An itemised BOQ means fewer surprises on cost and inclusions."),
      P("Supervised work", "A site manager oversees quality and safety day to day."),
      P("Renovation friendly", "We work in occupied and partly built spaces, not only new builds."),
    ],
    extraFaqs: [
      { q: "Do you take up renovation as well as new construction?", a: "Yes. We handle remodelling, structural repairs, flooring changes and finishing work in existing homes and commercial spaces." },
      { q: "Do you handle waterproofing?", a: "Yes. Waterproofing for terraces, bathrooms and other wet areas is part of our civil scope and is listed in the BOQ." },
    ],
    photoIds: [11, 12, 13, 1, 2],
  },
  "turnkey-construction-hyderabad": {
    about: [
      "A turnkey project means one contractor is accountable from the first measurement to handover. Instead of hiring separate civil, electrical, ceiling, painting and carpentry vendors, you work with one team and one schedule.",
      "We coordinate each trade, keep the BOQ updated, and hand over a finished, ready-to-use space for homes, offices and commercial premises.",
    ],
    process: [
      P("Requirement discussion", "We understand your space, budget, timeline and what you want completed."),
      P("Site inspection & BOQ", "After inspecting the site we prepare an itemised BOQ covering civil, MEP and interiors."),
      P("Design & material selection", "Layouts, finishes and materials are finalised with you before work begins."),
      P("Coordinated execution", "Civil, electrical, ceiling, carpentry and painting are scheduled together under one site manager."),
      P("Quality check & handover", "We inspect each trade, close snags and hand over with documentation."),
    ],
    benefits: [
      P("Single accountability", "No finger-pointing between vendors; one team answers for the result."),
      P("Better scheduling", "Trades are sequenced together, which reduces idle time and rework."),
      P("Transparent costing", "Everything included is written down in the BOQ."),
      P("Less effort for you", "One point of contact instead of managing many contractors."),
    ],
    extraFaqs: [
      { q: "Can I change the scope after work starts?", a: "Reasonable changes can be accommodated. Any change in scope is discussed and the BOQ is updated before the extra work proceeds." },
    ],
    photoIds: [11, 13, 24, 30, 43, 49],
  },
  "luxury-interior-design-hyderabad": {
    about: [
      "Home interiors that cover the whole room, not just furniture: wall panelling, TV units, wardrobes, false ceilings, lighting, painting and finishing, planned together and executed by one team.",
      "We work with your budget and preferences, and confirm materials and finishes with you before ordering.",
    ],
    process: [
      P("Brief & site measurement", "We note your needs, family usage and measure the rooms."),
      P("Layout & design", "Furniture layout, ceiling and lighting plans are discussed and refined with you."),
      P("Materials & BOQ", "You choose finishes; we list everything in an itemised BOQ."),
      P("Execution", "Carpentry, ceiling, electrical and painting are carried out in sequence on site."),
      P("Final check & handover", "We inspect fit and finish with you and fix any snags."),
    ],
    benefits: [
      P("Planned as a whole", "Ceilings, lighting, storage and walls are designed to work together."),
      P("Fits your budget", "Material options at different price points, with costs written in the BOQ."),
      P("One execution team", "Fewer handoffs between designer, carpenter and painter."),
      P("Practical storage", "Layouts focus on everyday usability as well as appearance."),
    ],
    extraFaqs: [
      { q: "Can I get only some rooms done?", a: "Yes. We can do a single room such as a bedroom or living area, or the full home." },
    ],
    photoIds: [17, 21, 43, 49, 51, 54],
  },
  "commercial-interior-contractors-hyderabad": {
    about: [
      "Offices, showrooms and other commercial spaces need interiors that are completed on schedule and built for daily use. We handle partitions, ceilings, lighting, electrical, flooring, painting and furniture-related carpentry.",
      "Work is planned around your opening or move-in date, and coordinated so trades do not block each other on site.",
    ],
    process: [
      P("Requirement & space study", "We review your layout, headcount or display needs and timeline."),
      P("BOQ & schedule", "An itemised BOQ and a work schedule are shared before work starts."),
      P("Services & ceiling work", "Electrical, data and ceiling grids are installed first, then finishing."),
      P("Fit-out & finishing", "Partitions, wall finishes, flooring, painting and carpentry are completed."),
      P("Inspection & handover", "We test the installation, close snags and hand over the space."),
    ],
    benefits: [
      P("Schedule focused", "Work is sequenced to meet your move-in or opening date."),
      P("Ceiling and MEP expertise", "Ceiling designs and services are coordinated so they fit together."),
      P("Single contract", "Civil, electrical, ceiling and finishing under one team."),
      P("Itemised costing", "BOQ-based quotes for easy comparison and approval."),
    ],
    extraFaqs: [
      { q: "Can you work in a space that is partly occupied?", a: "Where possible we phase the work to limit disruption. Timings are agreed with you in advance." },
    ],
    photoIds: [24, 28, 30, 32, 35, 38],
  },
  "modular-kitchen-hyderabad": {
    about: [
      "A modular kitchen is built from factory-finished cabinets and fittings that are measured to your kitchen and installed on site. It is easier to keep clean and makes better use of space than conventional site-built cabinets.",
      "We plan the layout (L-shape, U-shape, parallel or island), storage and appliance positions with you, and coordinate the plumbing, electrical and counter work.",
    ],
    process: [
      P("Measurement & layout", "We measure the kitchen and plan the work triangle, storage and appliance placement."),
      P("Material selection", "Carcass, shutter finish, countertop and hardware options are finalised with you."),
      P("BOQ & approval", "You approve the design and itemised BOQ before manufacturing."),
      P("Manufacturing & site prep", "Cabinets are made while plumbing, electrical and tiling are prepared on site."),
      P("Installation & handover", "Cabinets, counter and fittings are installed, adjusted and checked."),
    ],
    benefits: [
      P("Made to measure", "Cabinets are sized to your kitchen, not generic."),
      P("Smart storage", "Pull-outs, corner units and tall units reduce wasted space."),
      P("Easy upkeep", "Finishes and hardware chosen for cleaning and daily use."),
      P("Coordinated site work", "Plumbing, electrical and counter work handled together."),
    ],
    extraFaqs: [
      { q: "How long does a modular kitchen take?", a: "It depends on size, finish and site readiness. We give a timeline in the proposal after measuring the kitchen." },
    ],
    photoIds: [],
  },
  "false-ceiling-hyderabad": {
    about: [
      "False ceilings hide wiring and ducting, improve lighting and add design to a room. We install gypsum and grid ceilings, cove and profile lighting, and wood-finish ceiling panels in homes and offices.",
      "Ceiling layout, light positions and electrical points are planned together so the finished ceiling looks clean and works properly.",
    ],
    process: [
      P("Site measurement", "We measure the room and check heights, beams and services."),
      P("Ceiling & lighting plan", "Ceiling design and light positions are planned with you."),
      P("Framework & wiring", "The metal framework is fixed and concealed wiring is laid before boards go up."),
      P("Board fixing & finishing", "Boards are fixed, joints treated and the surface prepared."),
      P("Painting & final check", "The ceiling is painted, lights are fitted and tested."),
    ],
    benefits: [
      P("Concealed services", "Wiring and ducting are hidden for a clean look."),
      P("Better lighting", "Cove and spot lighting planned with the design."),
      P("Design options", "Simple, layered or wood-panel ceilings to suit the room."),
      P("Coordinated work", "Ceiling, electrical and painting handled by one team."),
    ],
    extraFaqs: [
      { q: "Will a false ceiling reduce room height?", a: "Slightly. We keep the drop to the minimum needed for services and lighting, and confirm it with you after measuring." },
    ],
    photoIds: [8, 9, 10, 24, 28, 35, 40, 49],
  },
  "painting-contractors-hyderabad": {
    about: [
      "Good paint work depends on surface preparation as much as the paint itself. We handle putty, primer, interior and exterior emulsion, and decorative wall finishes for homes and commercial spaces.",
      "We confirm shades and product brands with you before starting and protect floors and fittings during work.",
    ],
    process: [
      P("Inspection & shade selection", "We check wall condition and agree shades and products with you."),
      P("Surface preparation", "Cracks are repaired and surfaces are scraped and cleaned."),
      P("Putty & primer", "Putty and primer coats are applied and sanded for a smooth base."),
      P("Paint coats", "Finish coats are applied as per the agreed system."),
      P("Touch-up & handover", "We inspect in good light, touch up and clean the area."),
    ],
    benefits: [
      P("Prepared surfaces", "Proper prep for a smoother, longer-lasting finish."),
      P("Choice of finishes", "Plain emulsions as well as decorative and panel-style finishes."),
      P("Protected site", "Floors and furniture covered during work."),
      P("Clear measurement", "Area and coats are listed in the BOQ."),
    ],
    extraFaqs: [
      { q: "Do you provide the paint or should I buy it?", a: "Either way works. We can supply the paint brand you choose and include it in the BOQ, or work with paint you have bought." },
    ],
    photoIds: [49, 51, 52],
  },
  "electrical-contractors-hyderabad": {
    about: [
      "Safe, tidy electrical work is the backbone of any home or office. We do concealed wiring, switchboards, lighting circuits and power points, and coordinate with ceiling and carpentry work so everything lines up.",
      "Wiring is planned against your layout and appliance load, installed with proper conduiting, and tested before handover.",
    ],
    process: [
      P("Load & layout planning", "We plan points, circuits and load for your rooms and appliances."),
      P("Conduit & concealed wiring", "Conduits are laid in walls and ceilings before finishing."),
      P("Board & fittings", "Distribution boards, switches, sockets and light fittings are installed."),
      P("Testing", "Circuits are tested for continuity and safe operation."),
      P("Handover", "We walk you through the switching layout and close snags."),
    ],
    benefits: [
      P("Concealed and tidy", "Wiring hidden in walls and ceilings."),
      P("Planned points", "Switch and socket positions planned with your furniture."),
      P("Coordinated trades", "Works with ceiling, carpentry and painting schedules."),
      P("Tested before handover", "Circuits checked before the space is used."),
    ],
    extraFaqs: [
      { q: "Can you rewire an occupied home?", a: "Yes, in phases where possible. We plan room by room to limit disruption." },
    ],
    photoIds: [39, 40, 41, 42, 7],
  },
  "carpentry-wardrobes-hyderabad": {
    about: [
      "Custom carpentry makes the most of your space: wardrobes, study units, TV units and storage built to your room dimensions. We choose boards, laminates and hardware to suit your budget and usage.",
      "Units are measured on site, built to the agreed design and installed with soft-close hardware where specified.",
    ],
    process: [
      P("Measurement & needs", "We measure the room and understand what you need to store."),
      P("Design & finishes", "Layout, shutter finishes and hardware are agreed with you."),
      P("BOQ & approval", "You approve the design and itemised BOQ."),
      P("Fabrication & installation", "Units are made and installed on site."),
      P("Adjustment & handover", "Doors, drawers and fittings are adjusted and checked."),
    ],
    benefits: [
      P("Made to fit", "Built to your exact room dimensions."),
      P("Storage planned", "Lofts, drawers and shelves designed around your items."),
      P("Choice of materials", "Laminate, veneer or PU finishes to suit the budget."),
      P("Quality hardware", "Fittings listed by brand and type in the BOQ."),
    ],
    extraFaqs: [
      { q: "Can you match the carpentry to my existing furniture?", a: "We can suggest finishes that complement what you have. Final shades are confirmed with you before work begins." },
    ],
    photoIds: [21, 22, 45, 47, 54],
  },
};

export function serviceMedia(slug: string, fallbackImage: string) {
  const ids = serviceContent[slug]?.photoIds ?? [];
  const photos = ids
    .map((id) => galleryItems.find((g) => g.id === id))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  return {
    photos,
    hero: photos[0]?.src ?? fallbackImage,
    illustrative: photos.length === 0,
  };
}
