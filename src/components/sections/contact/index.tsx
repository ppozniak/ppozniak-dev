import { Button } from "src/components/button";
import { Container } from "src/components/container";
import { Input } from "src/components/form/input";
import { Label } from "src/components/form/label";
import { TextArea } from "src/components/form/textarea";
import { SectionHeading } from "src/components/section-heading";
import React, { FormEventHandler } from "react";

export const Contact = () => {
  // @TODO: Email submit
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <section className="bg-pastel text-white">
      <Container className="flex flex-col md:flex-row">
        <div className="md:basis-1/2 space-y-4">
          <SectionHeading heading="Contact me" />
          <p>
            Have a question? Want to hire me?
            <br /> Go ahead, I don&apos;t bite.
            <br /> Use the form below or mail me directly at{" "}
            {/* @TODO: Spam protection needed? */}
            <a
              href="mailto:ppozniak95@gmail.com"
              className="text-primary underline font-bold"
            >
              ppozniak95@gmail.com
            </a>
          </p>

          {/* @TODO: Add social links here */}
          <div className="">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

              <Button type="submit" className="min-w-[200px] ml-auto">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="md:basis-1/2">{/* @TODO: Add image here */}</div>
      </Container>
    </section>
  );
};
