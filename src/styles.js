import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // You can add global styles to this file, and also import other style files
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'li': {
    'listStyle': 'none'
  },
  'a': {
    'color': '#767c84',
    'fontWeight': '400',
    'textDecoration': 'none'
  },
  'body': {
    'fontFamily': '-apple-system, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.42858 }],
    'color': '#333',
    'backgroundColor': '#fff',
    'WebkitFontSmoothing': 'antialiased'
  },
  'img': {
    'verticalAlign': 'middle',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'clear::after': {
    'content': '''',
    'display': 'block',
    'clear': 'both'
  },
  'fl': {
    'float': 'left'
  },
  'fr': {
    'float': 'right'
  },
  'main': {
    'paddingTop': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'string', 'value': '!important' }]
  }
});
