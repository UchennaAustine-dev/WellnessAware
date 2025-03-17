import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how WellnessAware handles your personal data and respects your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>Last updated: March 17, 2025</p>

        <h2>Introduction</h2>
        <p>
          At WellnessAware, we respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>

        <h2>The Data We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul>
          <li>
            <strong>Identity Data</strong> includes first name, last name,
            username or similar identifier.
          </li>
          <li>
            <strong>Contact Data</strong> includes email address.
          </li>
          <li>
            <strong>Technical Data</strong> includes internet protocol (IP)
            address, browser type and version, time zone setting and location,
            browser plug-in types and versions, operating system and platform,
            and other technology on the devices you use to access this website.
          </li>
          <li>
            <strong>Usage Data</strong> includes information about how you use
            our website and services.
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our website and hold certain information. Cookies are files with a
          small amount of data which may include an anonymous unique identifier.
        </p>

        <p>We use the following types of cookies:</p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for
            the website to function properly and cannot be switched off in our
            systems.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies allow us to
            count visits and traffic sources so we can measure and improve the
            performance of our site.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies enable the
            website to provide enhanced functionality and personalization.
          </li>
          <li>
            <strong>Targeting Cookies:</strong> These cookies may be set through
            our site by our advertising partners to build a profile of your
            interests.
          </li>
        </ul>

        <p>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our website.
        </p>

        <h2>How We Use Your Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve
            our service
          </li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorized way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors and
          other third parties who have a business need to know.
        </p>

        <h2>Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data, including the right to:
        </p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy
          practices, please contact us at privacy@wellnessaware.site.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
