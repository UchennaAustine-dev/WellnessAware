import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="flex-1">
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 font-heading">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: March 15, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <p>
            Welcome to Wellness Wisdom. By accessing our website, you agree to
            be bound by these Terms of Service and to use our website in
            accordance with these Terms.
          </p>

          <h2>Use of Our Website</h2>
          <p>
            You may use our website for lawful purposes only. You must not use
            our website:
          </p>
          <ul>
            <li>
              In any way that breaches any applicable local, national, or
              international law or regulation
            </li>
            <li>
              In any way that is unlawful or fraudulent, or has any unlawful or
              fraudulent purpose or effect
            </li>
            <li>
              To transmit, or procure the sending of, any unsolicited or
              unauthorized advertising or promotional material
            </li>
            <li>
              To knowingly transmit any data, send or upload any material that
              contains viruses, Trojan horses, worms, or any other harmful
              programs
            </li>
          </ul>

          <h2>Intellectual Property Rights</h2>
          <p>
            We are the owner or the licensee of all intellectual property rights
            in our website, and in the material published on it. Those works are
            protected by copyright laws and treaties around the world. All such
            rights are reserved.
          </p>

          <h2>User-Generated Content</h2>
          <p>
            If you post, upload, or share any content on our website, you grant
            us a non-exclusive, royalty-free, perpetual, worldwide license to
            use, copy, modify, adapt, publish, translate, create derivative
            works from, distribute, and display such content in any form, media,
            or technology.
          </p>

          <h2>Medical Disclaimer</h2>
          <p>
            The content on our website is provided for general information only.
            It is not intended to amount to medical advice on which you should
            rely. You must obtain professional or specialist advice before
            taking, or refraining from, any action on the basis of the content
            on our website.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we exclude all liability for
            any loss or damage arising out of or in connection with your use of
            our website.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may revise these Terms of Service at any time by amending this
            page. Please check this page from time to time to take notice of any
            changes we made, as they are binding on you.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
