import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Heading, Image, Layout, Link,
  ListItem, List, Markdown, Quote, Slide, S, Spectacle, Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  rainbow: require('../assets/images/rainbow.jpg'),
  talk: require('../assets/images/talk.jpg'),
  sunset: require('../assets/images/sunset.jpg'),
  castle: require('../assets/images/castle.jpg'),
  view: require('../assets/images/view.jpg'),
  reflect: require('../assets/images/reflect.jpg'),
  street: require('../assets/images/street.jpg'),
  laptop: require('../assets/images/laptop.jpg'),
  basillica: require('../assets/images/basillica.jpg'),
  css: require('../assets/images/css.jpg'),
  js: require('../assets/images/js.jpg'),
  jslogo: require('../assets/images/jslogo.jpg'),
  klub: require('../assets/images/klub.jpg'),
  funky: require('../assets/images/funky.jpg'),
  flex: require('../assets/images/flex.png')
};

preloader(images);

const theme = createTheme({
  primary: "#e57373",
  yellowtext: "#ffc861",
  primaryFont: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} textFont="primaryFont">

          <Slide transition={["zoom"]} bgImage={images.laptop.replace("/", "")} bgColor="secondary">
            <Heading size={1} fit caps>Budapest</Heading>
            <Heading size={3} fit caps textColor="yellowtext" textFont="primary">JSCONFBP & CSSCONFBP</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="yellowtext">
          <Heading size={1} fit caps>Progressive Web Apps</Heading>
          <Text textColor="tertiary">Workshop given by <Link href="https://twitter.com/nolanlawson" textColor="yellowtext">Nolan Lawson</Link></Text>
            <List>
              <Appear><ListItem>Native-like characteristics and are promoted by the browser</ListItem></Appear>
              <Appear><ListItem>Works offline, launches from home screen, push notificaitons, mobile-first, etc.</ListItem></Appear>
              <Appear><ListItem>Requires: Web App Manifest, Service Worker, HTTPS, Application Shell, IndexedDB</ListItem></Appear>
              <Appear><ListItem>Progressive enhancement in <Link href="http://www.ember-fastboot.com/" textColor="tertiary">Ember Fastboot</Link> 🚀</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.klub.replace("/", "")} bgDarken={0.25} textColor="white">
            <Heading size={1} fit caps>#CSSConfBP</Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.css.replace("/", "")} bgDarken={0.75} textColor="white">
            <List>
              <Appear><ListItem>CSS Modules, CSS Variables & the Future of Reusable CSS - <Link href="https://twitter.com/glenmaddern" textColor="primary">Glen Maddern</Link></ListItem></Appear>
              <Appear><ListItem>The New CSS Layout - <Link href="https://twitter.com/rachelandrew" textColor="primary">Rachel Andrew</Link></ListItem></Appear>
              <Appear><ListItem>The Componentisation of the Web - <Link href="https://twitter.com/andreysitnik" textColor="primary">Andrey Sitnik</Link></ListItem></Appear>
              <Appear><ListItem>CSS Animations, Orchestrated - <Link href="https://twitter.com/davidkpiano" textColor="primary">David Khourshid</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps>The New CSS Layout - <Link href="https://twitter.com/rachelandrew" textColor="yellowtext">Rachel Andrew</Link></Heading>
            <List>
              <Appear><ListItem>Frameworks are messy and difficult to use</ListItem></Appear>
              <Appear><ListItem>More responsive layouts with Grid and Flexbox</ListItem></Appear>
              <Appear><ListItem>Items in parent should be responsive and flexible by default</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="yellowtext" textColor="white">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white">Flexbox</Heading>
                <Appear fid="2"><CodePane lang="css" source={require("raw!../assets/code/flexbox2.example")} /></Appear>
                <Appear><Image width="100%" src={images.flex}/></Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.funky.replace("/", "")} bgDarken={0.50} textColor="white">
            <Heading size={1} fit caps>#JSCONFBP</Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.js.replace("/", "")} bgDarken={0.50} textColor="white">
            <List>
              <Appear><ListItem>What Everybody Should Know About NPM - <Link href="https://twitter.com/seldo" textColor="primary">Laurie Voss</Link></ListItem></Appear>
              <Appear><ListItem>High Performance in the Critical Rendering Path - <Link href="https://twitter.com/nzgb" textColor="primary">Nicolas Bevacqua</Link></ListItem></Appear>
              <Appear><ListItem>Works on my Machine, or the Problem is Between the Keyboard and the Chair - <Link href="https://twitter.com/lrnrd" textColor="primary">Lena Reinhard</Link></ListItem></Appear>
              <Appear><ListItem>Why Performance Matters - <Link href="https://twitter.com/mishunov" textColor="primary">Denys Mishunov</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps>What Everybody Should Know About NPM - <Link href="https://twitter.com/seldo" textColor="yellowtext">Laurie Voss</Link></Heading>
            <List>
              <Appear><ListItem><Code textColor="white">npm team create [scope]:[team]</Code></ListItem></Appear>
              <Appear><ListItem><Code textColor="white">npm access grant read-only|read-write [scope]:[team] [package]</Code></ListItem></Appear>
              <Appear><ListItem><Code textColor="white">npm publish --tag [tag]</Code></ListItem></Appear>
              <Appear><ListItem><Code textColor="white">npm outdated && npm update</Code> (greenkeeper.io)</ListItem></Appear>
              <Appear><ListItem><S type="strikethrough">npm unpublish</S><Code textColor="white"> npm deprecate</Code></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["spin", "slide"]} bgImage={images.view.replace("/", "")}></Slide>
          <Slide transition={["spin", "slide"]} bgImage={images.castle.replace("/", "")}></Slide>
          <Slide transition={["spin", "slide"]} bgImage={images.street.replace("/", "")}></Slide>
          <Slide transition={["spin", "slide"]} bgImage={images.reflect.replace("/", "")}></Slide>
          <Slide transition={["spin", "slide"]} bgImage={images.sunset.replace("/", "")}></Slide>

        </Deck>
      </Spectacle>
    );
  }
}
