import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header'

export default () props => {
  return (
    <Head>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
    </Head>
    <Container>
    <Header/>
    {props.children}
    </Container>
  );
};
