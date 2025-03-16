import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 font-heading">
              Privacy Policy
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
            At Wellness Wisdom, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul>
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Fill out a contact form</li>
            <li>Leave comments on our articles</li>
            <li>Participate in surveys or promotions</li>
          </ul>

          <p>
            This information may include your name, email address, and any other
            information you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect from you for various purposes,
            including to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our website</li>
            <li>
              Send you technical notices, updates, and administrative messages
            </li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Deliver newsletters and marketing communications</li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with our website
            </li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity
            on our website and hold certain information. Cookies are files with
            a small amount of data which may include an anonymous unique
            identifier.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services such as Google Analytics, which
            collect, monitor, and analyze user data. These third parties have
            their own privacy policies addressing how they use such information.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, please be aware that no method of transmission
            over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, such as:
          </p>
          <ul>
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt out of marketing communications</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{" "}
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
