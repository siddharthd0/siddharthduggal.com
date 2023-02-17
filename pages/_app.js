import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import App from 'next/app';
import PageLoader from '../components/page-loader';

class MyApp extends App {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    // Hide the loader after 3 seconds
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
  }

  render() {
    const { Component, pageProps } = this.props;
    const { isLoading } = this.state;

    return (
      <ChakraProvider>
        <div style={{ display: isLoading ? 'block' : 'none' }}> {/*change to none*/}
          <PageLoader />
        </div>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;
