import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-bg py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-serif text-[38px] leading-tight text-ink">
            Terms of Service
          </h1>
          <p className="mb-6 text-[15px] text-muted">
            Last Updated: July 10, 2026
          </p>

          <div className="prose prose-slate max-w-none text-ink/90 space-y-6 text-[15px] leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Pill IQ application or website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not access or use our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">2. Medical Disclaimer</h2>
              <p>
                Pill IQ is for informational purposes only. The information provided by our application does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or medications. Never disregard professional medical advice or delay in seeking it because of something you have read on Pill IQ.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">3. Use of Services</h2>
              <p>
                You may use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that any image uploads or interactions comply with local laws and regulations.
              </p>
              <p>
                The free tier allows up to 3 scans per day. The premium tier allows up to 50 scans per day. We reserve the right to limit, suspend, or terminate service access for abuse or violations of usage policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">4. Intellectual Property</h2>
              <p>
                The application, website, and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Pill IQ and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-[22px] text-ink mt-8">5. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
