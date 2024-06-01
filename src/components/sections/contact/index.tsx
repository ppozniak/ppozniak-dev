import React from "react";

import Link from "next/link";
import { Container } from "src/components/container";
import { SectionHeading } from "src/components/section-heading";

export const Contact = () => {
  /* @TODO: Spam protection needed? */
  // @TODO: Email submit
  // const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  // };

  return (
    <section className="bg-pastel text-white" id="contact">
      <Container className="flex flex-col md:flex-row">
        <div className="space-y-4 md:basis-1/2">
          <SectionHeading heading="Contact me" />
          <p>
            Have a question? Want to hire me?
            <br /> Go ahead, I don&apos;t bite.
          </p>
          <p>
            <br /> Email me at &nbsp;
            <Link
              href="mailto:ppozniak95@gmail.com"
              target="_blank"
              referrerPolicy="no-referrer"
              className="font-bold text-green underline"
            >
              ppozniak95@gmail.com
            </Link>
          </p>

          <p>
            or message me on{" "}
            <Link
              href="https://www.linkedin.com/in/patrykpozniak/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="font-bold text-green underline"
            >
              LinkedIn
            </Link>
          </p>

          {/* @TODO: Add social links here */}
          <div className="">
            {/* <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Your name</Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="CEO of jQuery"
                  autoComplete="name"
                />
              </div>

              <div>
                <Label htmlFor="email">Your email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ceo@jquer.gov"
                  autoComplete="email"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Hey man we would love to have you in our team as a CEO your skills are great we have ping pong table and 'Fruit Thursdays' join us please"
                  autoComplete="off"
                  rows={5}
                ></TextArea>
              </div>

              <Button type="submit" className="ml-auto min-w-[200px]">
                Submit
              </Button>
            </form> */}
          </div>
        </div>

        <div className="md:basis-1/2">{/* @TODO: Add image here */}</div>
      </Container>
    </section>
  );
};
