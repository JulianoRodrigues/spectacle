import React, { Component } from 'react';

import { Appear, Deck, Heading, Image, Slide, MarkdownSlides, List, ListItem } from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';

require('normalize.css');

const images = {
  city: require('../assets/city.jpg'),
  htmljscss: require('../assets/hcj.png'),
  darth: require('../assets/darth_vader.jpg'),
  jedi: require('../assets/master.gif'),
  thank: require('../assets/thanks.gif'),
  html: require('../assets/html.png'),
  jsexample: require('../assets/js_example.png'),
  css: require('../assets/css.png'),
  js: require('../assets/js.png'),
  luke: require('../assets/Luke.gif'),
  twitter: require('../assets/twitter.png'),
  twitter2: require('../assets/twitter2.png')
};

preloader(images);

const theme = createTheme({
  primary: '#DCDCDC'
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
          <Heading size={1} caps lineHeight={1} textColor="black">
            FRONTEND WARS
          </Heading>
          <Heading size={5} textColor="red">
            The Empire Strikes Back
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="black" caps>
            you don't know the power of the frontend side
          </Heading>
          <Appear>
            <Image
              src={images.twitter.replace('/', '')}
              height="700px"
              width="700px"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="black" caps>
            The Force is Strong With This One
          </Heading>
          <Appear>
            <Image
              src={images.twitter2.replace('/', '')}
              height="700px"
              width="700px"
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="black" caps>
            The Force
          </Heading>
          <Appear>
            <Image
              src={images.htmljscss.replace('/', '')}
            />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.html.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        {MarkdownSlides`
Example
\`\`\`html
<div ng-controller="AccountMenuCtrl">
    <div class="row main-menu-title" ng-init="accountMenu = 'user';accountSubmenu = 'editProfile'">
        <h1 role="heading" aria-level="1">{{'account.edit.title.editYourProfile' | i18n}}</h1>
    </div>
    <div class="row main-view">
    <!-- Loading templates depending of the viewport size -->
        <div class="columns medium-12 small-12 main-menu-primary hide-for-large-up">
            <div ng-include="'account/menu.tpl.html'" ng-repeat="contentTemplate in ['account/editprofile-content.tpl.html']"></div>
        </div>
        <div class="show-for-large-up">
            <div class="columns large-3 main-menu-primary">
                <div ng-include="'account/menu.tpl.html'"></div>
            </div>
            <div class="categoryNavigation columns large-9 main-menu-grid account-content">
                <div class="bk-padding-top" ng-if="!small" ng-include="'account/editprofile-content.tpl.html'"></div>
            </div>
        </div>
    </div>
</div>
\`\`\`
        `}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.css.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
{MarkdownSlides`
Example
\`\`\`css
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    text-shadow: none;
    &::before {
        color: black;
        content: attr(data-hover);
        position: absolute;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        -moz-transition: -moz-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
    }
    &:hover::before,
    &:focus::before {
        color: white;
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        transform: scale(0.9);
    }
\`\`\`
`}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.luke.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor="black" caps>
            CSS preprocessors
          </Heading>
          <List>
            <Appear>
              <ListItem>SASS</ListItem>
            </Appear>
            <Appear>
              <ListItem>LESS</ListItem>
            </Appear>
            <Appear>
              <ListItem>POSTCSS</ListItem>
            </Appear>
        </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Appear>
            <Image src={images.js.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        {MarkdownSlides`
Example
\`\`\`js
storeService.isStoreOpen({'storeName': restaurant.storeName}).then(function (result) {
  storeStatus = result.storeStatus;
  if (storeStatus !== 'ACTIVE') {
      historyService.goTo($rootScope.appConfig.defaultScreenPath);
  } else {
      cartResource.calculateTotals();
      deferred.resolve();
  }
  }).catch(function (error) {
      deferred.reject(emn8.Util.DevLogger(error));
  });
\`\`\`
        `}
        <Slide>
          <Heading size={4} textColor="black" caps>
            Frameworks
          </Heading>
          <List>
          <Appear>
            <ListItem>React.js</ListItem>
          </Appear>
          <Appear>
            <ListItem>Angular</ListItem>
          </Appear>
          <Appear>
            <ListItem>Vue.js</ListItem>
          </Appear>
        </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="black" caps>
            Join the FRONTEND Side
          </Heading>
          <Appear>
            <Image src={images.darth.replace('/', '')} margin="0px auto 40px" />
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="black" caps>
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
