import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Not Found | Siddharth Duggal</title>
        <meta name="description" content="The page you're looking for cannot be found." />
      </Head>
      
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#fcf7f2]">
        <h1 className="text-9xl font-extrabold text-[#755d4c] tracking-widest">404</h1>
        <div className="bg-[#ad8b73] px-3 py-1 text-sm rounded-md rotate-6 absolute text-white">
          Page Not Found
        </div>
        
        <p className="text-[#ad8b73] mt-12 mb-4 text-center max-w-md px-4">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/"
          className="mt-4 relative inline-block text-sm font-medium text-[#f5e2cc] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ad8b73]"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ad8b73] group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>
          <span className="relative block px-8 py-3 bg-[#755d4c] border border-current rounded-md transition-colors duration-200 hover:bg-[#8c5844]">
            Go Home
          </span>
        </Link>
        
        <style jsx global>{`
          body {
            background-color: #fcf7f2;
            background-image: url("./Unknown-2.jpg");
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }

          @font-face {
            font-family: "GT Alpina";
            src: url("/path/to/your/gt-alpina-font.woff2") format("woff2"),
                 url("/path/to/your/gt-alpina-font.woff") format("woff");
            font-weight: normal;
            font-style: normal;
          }

          .font-alpina {
            font-family: "GT Alpina", ui-serif, Georgia, Cambria,
                         "Times New Roman", Times, serif;
          }
        `}</style>
      </main>
    </>
  );
}
