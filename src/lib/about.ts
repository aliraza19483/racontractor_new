// ------------------------------------------------------------------
// Fill these in with VERIFIED details. Anything left null / empty is
// simply not shown on the About page, so nothing unverifiable is
// published. Do not add awards, project counts or years of experience
// unless you can back them up.
// ------------------------------------------------------------------
export const about = {
  /** Year the company started, e.g. 2019 */
  established: null as number | null,
  /** Short company story in your own words (1–3 sentences) */
  story: null as string | null,
  founder: {
    name: "Farhan Ahmed",
    title: "Founder & Director",
    photo: "/images/team/farhan-ahmed.jpg",
    /** Founder background, e.g. previous roles and training */
    bio: null as string | null,
    /** e.g. "10 years in civil and interior execution" */
    experience: null as string | null,
    /** e.g. ["Diploma in Civil Engineering"] */
    qualifications: [] as string[],
  },
  /** e.g. { name: "Name", role: "Site Supervisor", photo: "/images/team/x.jpg" } */
  team: [] as { name: string; role: string; photo?: string }[],
  /** e.g. { label: "GSTIN", value: "36XXXXX..." } */
  registrations: [] as { label: string; value: string }[],
};
