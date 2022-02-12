import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className={className}>
      <Link href="/">
        <a>Home</a>
      </Link>

      {!session && (
        <>
          <Link href="/createAccount">
            <a>Sign Up</a>
          </Link>
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Login
            </a>
          </Link>
        </>
      )}

      {session && (
        <>
          <Link href="/profile">
            <a>Profile</a>
          </Link>

          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Logout
            </a>
          </Link>
        </>
      )}
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-evenly;
        }
        a {
          color: white;
          background-color: blue;
          padding: 20px;
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

export default Navbar;
