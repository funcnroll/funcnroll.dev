import Header from "../components/reusable/Header";
import Section from "../components/reusable/Section";

import GetInTouchLinks from "../components/reusable/GetInTouchLinks";
import GeneralLink from "../components/reusable/GeneralLink";
import { Mail } from "lucide-react";
import { GithubIcon, XIcon } from "./reusable/BrandIcons";

function GetInTouch() {
  // basic anti scrape for email
  const user = "hello";
  const domain = "funcnroll.dev";
  const email = `${user}@${domain}`;

  const links = [
    {
      to: "https://github.com/funcnroll",
      icon: <GithubIcon size={32} />,
      text: "funcnroll",
    },
    {
      to: "https://x.com/funcnroll",
      icon: <XIcon size={32} />,
      text: "@funcnroll",
    },
    {
      to: `mailto:${email}`,
      icon: <Mail size={32} />,
      text: email,
    },
  ];

  return (
    <Section>
      <Header>Get in Touch</Header>

      <div className="flex flex-col items-start gap-4 sm:items-center sm:space-y-4">
        {links.map((link, index) => (
          <GetInTouchLinks
            key={index} // 🔑 important here
            to={link.to}
            icon={link.icon}
            text={link.text}
          />
        ))}

        <GeneralLink to="https://github.com/funcnroll/funcnroll.dev">
          PS: This site is open source on Github
        </GeneralLink>
      </div>
    </Section>
  );
}

export default GetInTouch;
