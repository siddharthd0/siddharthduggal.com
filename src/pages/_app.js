import "@/styles/globals.css";

import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

const publicPages = ["/sign-in", "/", "/standups", "/work", "/404"];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}
    >
      {publicPages.includes(pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-50 pb-2">
                Nope.
              </h1>
              <h1 classNam="centered">
                You need to be signed in to view this page.
              </h1>
            </div>
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
