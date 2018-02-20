import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'button': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outlineStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }],
    'background': '#27f49a',
    'color': '#fff !important',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'borderRadius': '3px',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ipt-group': {
    'position': 'relative',
    'paddingBottom': [{ 'unit': 'px', 'value': 9 }],
    'marginBottom': [{ 'unit': 'px', 'value': 36 }]
  },
  'ipt-group label': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'color': '#767c84',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.3 }]
  },
  'ipt-group input:focus': {
    'borderColor': '#27f49a',
    'borderWidth': '2px'
  },
  'ipt-group input': {
    'transition': 'border-color ease-in-out .4s, box-shadow ease-in-out .15s',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'textIndent': '56px',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(118, 124, 132, 0.231373)' }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'padding': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.3 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'tips': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'color': '#a0a0a0',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 70 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  }
});
