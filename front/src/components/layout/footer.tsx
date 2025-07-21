import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-50 border-t border-gray-50 bg-gray-200 dark:bg-gray-400 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-800">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            The Vinyl House
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li className="m-0 p-0">
            <Link href="/landing">
              <img
                src="/vinilogira.gif"
                alt="Novedades"
                title="Ir a novedades"
                className="w-14 h-14 hover:scale-110 transition-transform duration-300 rounded-none shadow-none bg-transparent"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

