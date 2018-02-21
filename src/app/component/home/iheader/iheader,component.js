import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#iheader': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '22'
  },
  '#iheader container': {
    'background': '#fff',
    'width': [{ 'unit': 'px', 'value': 950 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#iheader container #iheader-logo': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 97 }],
    'height': [{ 'unit': 'px', 'value': 30 }]
  },
  '#iheader container nav-bar li': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'color': '#47465D',
    'fontWeight': '400',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'float': 'left'
  }
});
