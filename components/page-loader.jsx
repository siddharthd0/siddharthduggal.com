import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Spinner,Spacer } from '@chakra-ui/react';

const PageLoader = () => {
  return (
    <div style={{ display: 'flex'}}>
      {/* Your loader animation goes here */}
      <Spacer/>
      <Spinner mt="1.5rem" mx="2rem" size="sm" color="teal.300" />
    </div>
  );
};

export default PageLoader;
