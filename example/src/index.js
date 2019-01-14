import React, { Component } from 'react';

import { Appear, Deck, Heading, Image, Slide } from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  facebook: require('../assets/Facebook_2.png'),
  facebook2: require('../assets/Facebook_3.png'),
  htmljscss: require('../assets/hcj.png'),
  darth: require('../assets/darth_vader.jpg'),
  jedi: require('../assets/master.gif'),
  thank: require('../assets/thanks.gif'),
  html: require('../assets/html.png'),
  htmlexample: require('../assets/html_example.png'),
  cssexample: require('../assets/css_example.png'),
  jsexample: require('../assets/js_example.png'),
  css: require('../assets/css.png'),
  js: require('../assets/js.png'),
  luke: require('../assets/Luke.gif')
};

preloader(images);

const theme = createTheme({
  primary: '#ccc'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="white">
            FRONTEND WARS
          </Heading>
          <Heading size={5} textColor="red">
            The Empire Strikes Back
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="white" caps>
            you don't know the power of the frontend side
          </Heading>
          <Appear>
            <Image
              src={images.facebook.replace('/', '')}
              trasform="scale(0.5, 0.5)"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            The Force is Strong With This One
          </Heading>
          <Appear>
            <Image
              src={images.facebook2.replace('/', '')}
              margin="0px auto 40px"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            The Force
          </Heading>
          <Appear>
            <Image
              src={images.htmljscss.replace('/', '')}
              margin="0px auto 40px"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.html.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image src={images.htmlexample.replace('/', '')} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.css.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image
              src={images.cssexample.replace('/', '')}
              margin="0px auto 40px"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.luke.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.js.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image
              src={images.jsexample.replace('/', '')}
              margin="0px auto 40px"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Join the FRONTEND Side
          </Heading>
          <Appear>
            <Image src={images.darth.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            and became a Frontend master
          </Heading>
          <Appear>
            <Image src={images.jedi.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image src={images.thank.replace('/', '')} margin="0px auto 40px" />
        </Slide>
      </Deck>
    );
  }
}
