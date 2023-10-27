import { useState } from 'react';
import LatestStories from './components/LatestStories';
import TopStories from './components/TopStories';
import styled, { createGlobalStyle } from 'styled-components';

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: bolder;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #f9dafe;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;]
  display: flex;
  
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ButtonGroup = styled.div`
  border: 2px solid #e4e4e4;
  width: max-content;
  border-radius: 3px;
`;

type ButtonDisabledProps = { disabled: boolean };
const SingleButton = styled.button<ButtonDisabledProps>`
  padding-inline: 1.2em;
  padding-block: 0.4em;
  font-family: inherit;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#3589ff' : '#fff')};
  color: ${(props) => (props.disabled ? '#fff' : '#3589ff')};
  font-weight: 600;
  border: none;
  width: 5em;
  transition: background 100ms ease-in;
`;

function App() {
  const [showLatest, setShowLatest] = useState(true);
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Heading>NewzNest</Heading>
        <ButtonGroup>
          <SingleButton
            disabled={showLatest}
            onClick={() => setShowLatest(true)}
          >
            Latest Stories
          </SingleButton>
          <SingleButton
            disabled={!showLatest}
            onClick={() => setShowLatest(false)}
          >
            Top Stories
          </SingleButton>
        </ButtonGroup>
        {showLatest ? <LatestStories /> : <TopStories />}
      </AppContainer>
    </>
  );
}

export default App;
