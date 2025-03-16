import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="flex-1">
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 font-heading">
              Cookie Policy
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
            This Cookie Policy explains how Wellness Wisdom uses cookies and
            similar technologies to recognize you when you visit our website. It
            explains what these technologies are and why we use them, as well as
            your rights to control our use of them.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information.
          </p>

          <h2>Why Do We Use Cookies?</h2>
          <p>
            We use cookies for several reasons. Some cookies are required for
            technical reasons in order for our website to operate, and we refer
            to these as "essential" or "strictly necessary" cookies. Other
            cookies also enable us to track and target the interests of our
            users to enhance the experience on our website. Third parties serve
            cookies through our website for advertising, analytics and other
            purposes.
          </p>

          <h2>Types of Cookies We Use</h2>
          <p>
            The specific types of cookies served through our website and the
            purposes they perform include:
          </p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> These cookies are strictly
              necessary to provide you with services available through our
              website and to use some of its features, such as access to secure
              areas.
            </li>
            <li>
              <strong>Performance cookies:</strong> These cookies collect
              information about how visitors use our website, for instance which
              pages visitors go to most often. We use this information to
              improve our website.
            </li>
            <li>
              <strong>Functionality cookies:</strong> These cookies allow our
              website to remember choices you make (such as your user name,
              language or the region you are in) and provide enhanced, more
              personal features.
            </li>
            <li>
              <strong>Targeting cookies:</strong> These cookies record your
              visit to our website, the pages you have visited and the links you
              have followed. We will use this information to make our website
              and the advertising displayed on it more relevant to your
              interests.
            </li>
          </ul>

          <h2>How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie rights by setting your preferences in
            the Cookie Consent Manager. The Cookie Consent Manager allows you to
            select which categories of cookies you accept or reject. Essential
            cookies cannot be rejected as they are strictly necessary to provide
            you with services.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or
            refuse cookies. If you choose to reject cookies, you may still use
            our website though your access to some functionality and areas of
            our website may be restricted.
          </p>

          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal or regulatory reasons. Please therefore re-visit
            this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other
            technologies, please{" "}
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
