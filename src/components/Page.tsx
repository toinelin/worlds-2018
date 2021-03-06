import React, { Component } from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Meta from '@components/Meta'
import { FlexColumnAlignLeft } from '@components/styles/FlexMixins'

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

// Theme variables
const theme = {
  black: '#151618',
  white: '#D1D1D1',
  violet: '#9013FE',
  darkGrey: '#292B2F',
  mediumGrey: '#525252',
  gridWidth: '1000px',
  gridColumnWidth: '230px',
  gridColumnWidthNumber: 230,
  gridGutterWidth: '20px',
  gridGutterWidthNumber: 20,
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Futura-CondensedMedium';
    src: url('/static/futura-condensedmedium.woff') format('woff'),
         url('/static/futura-condensedmedium.woff2') format('woff2');
    font-weight: medium;
    font-style: condensed;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;

    @media (max-width: 1000px) {
      font-size: 8px;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${ theme.black };
    overflow-x: hidden;
  }

  h1 {
    font-family: 'Futura-CondensedMedium', sans-serif;
    font-size: 4.8rem;
    letter-spacing: 0;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: left;
    margin: 2rem 0;
  }

  h2 {
    font-family: 'Futura-CondensedMedium', sans-serif;
    font-size: 3rem;
    letter-spacing: 0;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: left;
  }

  h3 {
    font-family: 'Futura-CondensedMedium', sans-serif;
    font-size: 1.8rem;
    letter-spacing: 0;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;
  }

  small {
    font-family: 'Futura-CondensedMedium', sans-serif;
    color: ${ theme.mediumGrey };
    font-size: 1.1rem;
    letter-spacing: 0;
    line-height: 1;
    text-transform: uppercase;
    text-decoration: none;
    text-align: left;
  }

  p {
    font-family: 'Arial', sans-serif;
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1;
    text-align: left;
    margin: 1rem 0;
  }

  a {
    font-family: 'Futura-CondensedMedium', sans-serif;
    color: ${ theme.white };
    font-size: 2.4rem;
    letter-spacing: 0;
    line-height: 1;
    text-transform: uppercase;
    text-decoration: none;
    text-align: left;
    transition: 200ms ease-out;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${ theme.darkGrey };
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${ theme.mediumGrey };
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${ theme.white };
  }
`

const StylePage = styled.div`
  ${ FlexColumnAlignLeft }
  width: 100vw;
  margin: 10rem 0;
  color: ${ props => props.theme.white };

  @media (max-width: 1000px) {
    margin: 8rem 0;
  }

  @media (max-width: 640px) {
    margin: 4.5rem 0;
  }
`

const Inner = styled.div`
  max-width: ${ props => props.theme.gridWidth };
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 1000px) {
    padding: 0 3rem;
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <React.Fragment>
          <GlobalStyle />
          <StylePage>
            <Meta />
            <Inner>{ this.props.children }</Inner>
          </StylePage>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default Page
