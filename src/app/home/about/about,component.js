import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main': {
    'paddingBottom': [{ 'unit': 'px', 'value': 150 }],
    'width': [{ 'unit': 'px', 'value': 950 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 80 }]
  },
  'main bdec': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#adadad',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'main h1': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'main topics': {
    'display': '-ms-flexbox',
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-around'
  },
  'main topics a': {
    'flex': '0 1 220px',
    'padding': [{ 'unit': 'px', 'value': 150 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'textAlign': 'center',
    'minHeight': [{ 'unit': 'px', 'value': 265 }],
    'minWidth': [{ 'unit': 'px', 'value': 160 }]
  },
  'main topics a:hover h3': {
    'transform': 'translate3d(0, -94px, 0)'
  },
  'main topics a:hover detail': {
    'opacity': '1',
    'transform': 'translate3d(0, 0, 0)',
    'transitionDuration': '.2s',
    'transitionTimingFunction': 'ease'
  },
  'main topics a:hover:before': {
    'transform': 'translate3d(0, -38px, 0) scale3d(0.5, 0.5, 1)'
  },
  'main topics a h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'absolute',
    'fontWeight': '500',
    'top': [{ 'unit': 'px', 'value': 195 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'color': '#4c555a',
    'transition': 'transform 0.4s cubic-bezier(0.155, 1.105, 0.295, 1.12)'
  },
  'main topics a detail': {
    'opacity': '0',
    'position': 'relative',
    'transform': 'translate3d(0, 35px, 0)',
    'transition': 'opacity .1s linear, transform .1s linear'
  },
  'main topics a detail p': {
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'letterSpacing': [{ 'unit': 'em', 'value': -0.01 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 13 }],
    'color': '#576070'
  },
  'main topics sales:before': {
    'backgroundPosition': 'left -120px'
  },
  'main topics press:before': {
    'backgroundPosition': 'left -240px'
  },
  'main topics partnerships:before': {
    'backgroundPosition': 'left -360px'
  },
  'main topics a:before': {
    'background': 'no-repeat top left url(https://ionicframework.com/img/contact/contact-icons.png)',
    'backgroundSize': '120px',
    'width': [{ 'unit': 'px', 'value': 120 }],
    'height': [{ 'unit': 'px', 'value': 120 }],
    'content': '''',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 24 }],
    'left': [{ 'unit': '%H', 'value': NaN }],
    'transition': 'transform 0.4s cubic-bezier(0.155, 1.105, 0.295, 1.12)'
  },
  'main about-author img': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 180 }],
    'height': [{ 'unit': 'px', 'value': 180 }],
    'borderRadius': '100%'
  },
  'main about-author author-dec': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'main about-author author-dec h3': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'main about-author author-dec ul': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'main about-author author-dec ul li': {
    'width': [{ 'unit': '%H', 'value': 0.45 }],
    'float': 'left'
  },
  'main about-author author-dec p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 26 }]
  },
  'main about-author author-dec p i': {
    'marginRight': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'main about-author author-dec p icon-zhihu': {
    'color': '#006ce2'
  },
  'main about-author author-dec p icon-github': {
    'color': '#171515'
  },
  'main about-author author-dec p icon-facebook': {
    'color': '#3c599b'
  },
  'main about-author author-dec p icon-twitter': {
    'color': '#5eaade'
  }
});
