import React from 'react';
import styled from 'styled-components';

const App = styled.div`
  background-color: #1b1d1b;
  color: white;
`;

export default ({ children }) => <App>{children}</App>;
