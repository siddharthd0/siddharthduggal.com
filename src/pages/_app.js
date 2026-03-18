import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'url(/noise.jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
