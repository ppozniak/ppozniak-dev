import Link from "next/link";
import { Button } from "src/components/button";
import { Container } from "src/components/container";
import { SectionHeading } from "src/components/section-heading";

export const Skills = () => {
  return (
    <section className="bg-yellow text-black" id="skills">
      <Container>
        <header className="mb-8 flex flex-col items-center gap-8 md:flex-row">
          <SectionHeading
            className="lg:flex-shrink-0"
            heading="Skills and experiences"
          />
        </header>
        <ul>
          <li className="mb-5 max-w-lg">
            <strong>Languages & Concepts:</strong>
            <div>
              HTML, CSS, JavaScript, TypeScript, Web Accessibility (WCAG),
              Responsive Design, Single Page Applications
            </div>
          </li>

          <li className="mb-5 max-w-lg">
            <strong>Testing:</strong>
            <div>
              Unit Testing, E2E Testing (Playwright), Visual Regression Testing
              (backstop, chromatic)
            </div>
          </li>

          <li className="mb-5 max-w-lg">
            <strong>Frontend:</strong>
            <div>
              React, Next.js, Vue.js, Svelte, Tailwind CSS, GraphQL, MJML (email
              templating)
            </div>
          </li>

          <li className="mb-5 max-w-lg">
            <strong>Backend & Tools:</strong>
            <div>
              Node.js, MongoDB, DynamoDB, AWS, Build Tools, Docker, CI/CD
              (GitLab, GitHub actions, Buddy, Jenkins)
            </div>
          </li>
        </ul>

        <footer className="mt-4 flex items-center justify-end gap-x-4 text-sm">
          {/* @TODO: A link */}
          ...to view job history
          <Button
            as={Link}
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.linkedin.com/in/patrykpozniak/"
            className="max-w-[200px]"
          >
            Visit LinkedIn
          </Button>
          {/* @TODO: Add CV */}
        </footer>
      </Container>
    </section>
  );
};
