import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import App from 'next/app';
import PageLoader from '../components/page-loader';

class MyApp extends App {
  state = {
    isLoading: false,
  };

  startLoading = () => {
    this.setState({ isLoading: true });
  };

  stopLoading = () => {
    this.setState({ isLoading: false });
  };

  componentDidMount() {
    const { router } = this.props;

    router.events.on('routeChangeStart', this.startLoading);
    router.events.on('routeChangeComplete', this.stopLoading);
    router.events.on('routeChangeError', this.stopLoading);
  }

  componentWillUnmount() {
    const { router } = this.props;

    router.events.off('routeChangeStart', this.startLoading);
    router.events.off('routeChangeComplete', this.stopLoading);
    router.events.off('routeChangeError', this.stopLoading);
  }

  render() {
    const { Component, pageProps } = this.props;
    const { isLoading } = this.state;

    return (
      <ChakraProvider>
        <PageLoader style={{ display: isLoading ? 'block' : 'none' }} />
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;
