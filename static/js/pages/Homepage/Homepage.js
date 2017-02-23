import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';


const Homepage = styled.section`
  background-color: red;
  margin: 4em;
  padding: 4em;
`;

export default () => (
  <Homepage>
    <Logo />
  </Homepage>
);
