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
  }
});
