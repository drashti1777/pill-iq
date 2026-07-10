import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-serif text-[38px] leading-tight text-ink">
            Privacy Policy
          </h1>
          <p className="mb-6 text-[15px] text-muted">
            Last Updated: July 10, 2026
          </p>

          <div className="prose prose-slate max-w-none text-ink/90 space-y-6 text-[15px] leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">1. Introduction</h2>
              <p>
                Welcome to Pill IQ. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our application and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">2. Information We Collect</h2>
              <p>
                We do not require you to create an account to use the basic features of Pill IQ. If you use our scanning feature, the images you upload or capture are processed solely to identify the medicine and retrieve its label details.
              </p>
              <p>
                <strong>Camera Images:</strong> Photos of medicine packages or blister packs are analyzed in real-time. We do not store your images permanently on our servers, nor do we use them to train public AI models.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">3. How We Use Your Data</h2>
              <p>
                We only use your data to provide and improve the Pill IQ service. We do not sell, rent, or lease your personal information, including scanned medicine packaging images or history, to third parties or advertisers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="font-semibold text-brand">
                <a href="mailto:info@themidnight.in" className="hover:underline">
                  info@themidnight.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
