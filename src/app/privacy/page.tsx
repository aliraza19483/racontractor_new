export const metadata = {
  title: "Privacy Policy | RA Contractor",
  description: "Privacy Policy for RA Contractor",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 container-luxury">
      <div className="max-w-3xl mx-auto prose prose-invert prose-gold">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-white/70 font-[family-name:var(--font-dm-sans)] leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to RA Contractor. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Identity Data: First name, last name, username or similar identifier.</li>
            <li>Contact Data: Email address and telephone numbers.</li>
            <li>Technical Data: Internet protocol (IP) address, browser type and version, time zone setting.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
            in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
