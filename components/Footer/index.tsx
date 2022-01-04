import React from "react";
import Link from "next/link";

type FooterProps = {
  className: string;
};

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <div className={className}>
      <Link href="/about">
        <a>© Baughan, 2022</a>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-evenly;
        }
        a {
          color: white;
          background-color: blue;
          padding: 8px;
          margin: 8px;
          border: 1px solid lightblue;
        }
        a:hover {
          color: white;
          text-decoration: underline;
          background-color: purple;
        }
      `}</style>
    </div>
  );
};

export default Footer;
