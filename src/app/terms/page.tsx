export const metadata = {
  title: "Terms of Service | RA Contractor",
  description: "Terms of Service for RA Contractor",
};

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 container-luxury">
      <div className="max-w-3xl mx-auto prose prose-invert prose-gold">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-8">
          Terms of Service
        </h1>
        <div className="space-y-6 text-white/70 font-[family-name:var(--font-dm-sans)] leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms of Service. 
            If you disagree with any part of the terms, then you may not access our service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive 
            property of RA Contractor and its licensors. The service is protected by copyright, trademark, and other laws.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Services</h2>
          <p>
            RA Contractor provides construction and interior design services. The specific details, scope, and pricing 
            of services will be governed by separate agreements or contracts executed between the client and RA Contractor.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall RA Contractor, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
            loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
            inability to access or use the service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Disclaimer Regarding Brands</h2>
          <p>
            Any mention of specific brands or products on our website indicates our preference or experience working with 
            such materials. It does not imply an official partnership, endorsement, or agency relationship with these 
            brands unless explicitly stated.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide 
            notice of any changes by posting the new Terms on this page.
          </p>
        </div>
      </div>
    </div>
  );
}
