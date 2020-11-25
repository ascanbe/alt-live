import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import { Link } from 'react-scroll';
import cn from 'classnames';
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import bgMain from '../img/party.jpg';
import { FaChevronDown } from 'react-icons/fa';
import Footer from './footer';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer className={cn({
        'homepage': data.isHome,
      })}>
        <Header />
        {data.isHome && (
          <Banner>
            <Overlay />
            <h1>{state.frontity.title}</h1>
            <h2>{state.frontity.description}</h2>
            <Link to="main" smooth>
              <FaChevronDown size="2rem" style={{ margin: '2rem auto 0 auto' }} />
            </Link>
          </Banner>
        )}
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main id="main">
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {data.link !== '/contact-us/' && (
        <CTA>
          <div className="centred">
            <h3>Sound Good?</h3>
            <button className="btn mb">Get in touch</button>
          </div>
        </CTA>
      )}

      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  }
  html, body {
    width: 100%;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    font-family: 'Nunito Sans', Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-size: 1rem;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .vertical-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .service-icon {
    width: 100px !important;
  }
  h2 {
    text-align: center;
  }
  .centred {
    text-align: center;
  }
  .bg-white {
    &.padded-mobile {
      padding: 24px;
    }
  }
  align-right {
    text-align: center;
  }
  .btn, .wpcf7-submit {
    padding: 1rem !important;
    border-radius: 4px !important;
    border: solid 1px #57b257 !important;
    background-color: transparent !important;
    color: #57b257 !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    cursor: pointer !important;
    transition: .6s ease !important;

    &:hover {
      background-color: #57b257 !important;
      color: #fff !important;
    }
  }
  .mb {
    margin-bottom: 24px;
  }
  .page-banner {
    position: relative;
    color: #fff;
    height: 350px;
    background-position: center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    > h1 {
      z-index: 2;
    }

    &__overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0,0,0,.35);
    }
  }
  .list {
    list-style-type: none;
    text-align: center;
    padding-left: 0;

    > h3, li {
      margin-bottom: 1rem;
    }
  }
  .text-color {
    &-black {
      a {
        color: rgba(12,17,43,.8);
      }
    }
  }
  .wpcf7-form {
    input:not([type="submit"]), textarea, select {
      width: 100%;
      max-width: 550px;
      border: solid 1px rgba(0,0,0,.2);
      padding: .75rem 1rem;
      min-height: 24px;

      &:focus {
        outline: none !important;
        border: solid 1px #57b257;
      }
    }
  }

  @media (min-width: 768px) {
    .align-right {
      text-align: right;
    }
    .flex-row {
      display: flex;
      margin: 24px 0;

      &-reverse {
        flex-direction: row-reverse;
      }

      > div {
        flex-basis: 50%;
      }
    }
    .bg-white {
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &.padded-mobile {
        padding: 0 3rem;
      }
  
      // > h3, p {
      //   margin: 0;
      // }
    }
    .list {
      text-align: left;

      &--two-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
    .centered {
      &-mobile {
        text-align: left;
      }
    }
  }
`;

const CTA = styled.div`
  padding: 24px 0;
  background-color: #efefef;
`;

const HeadContainer = styled.div`
  background-color: #57b257;
  position: relative;
  display: flex;
  flex-direction: column;

  &.homepage {
    height: 100vh;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
  color: #fff;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-image: url(${bgMain});
  background-size: cover;
  background-position: center;
  position: relative;
  flex-grow: 1;

  h1, h2, a {
    z-index: 10;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.35);
`;
