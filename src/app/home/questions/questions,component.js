import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main': {
    'paddingBottom': [{ 'unit': 'px', 'value': 150 }],
    'width': [{ 'unit': 'px', 'value': 950 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 110 }, { 'unit': 'string', 'value': '!important' }]
  },
  '#mainbar': {
    'width': [{ 'unit': 'px', 'value': 648 }]
  },
  'subheader': {
    'clear': 'both',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e4e6e8' }]
  },
  'subheader h1': {
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontWeight': 'normal'
  },
  'subheader #tabs': {
    'float': 'right'
  },
  'subheader #tabs a': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 8 }],
    'color': '#848d95',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textDecoration': 'none',
    'transition': 'all .15s ease-in-out',
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#FFF',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'verticalAlign': 'baseline',
    'boxSizing': 'border-box',
    'top': [{ 'unit': 'px', 'value': -1 }]
  },
  'subheader #tabs a:before': {
    'content': '""',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -1 }],
    'left': [{ 'unit': 'px', 'value': -1 }],
    'right': [{ 'unit': 'px', 'value': -1 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'backgroundColor': 'transparent'
  },
  'subheader #tabs youarehere': {
    'paddingBottom': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '400',
    'borderColor': '#e4e6e8',
    'borderBottomColor': 'transparent'
  },
  'question-stream que-item': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'question-stream que-it': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#999'
  },
  'question-stream h5': {
    'display': 'inline',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#666'
  },
  'question-stream que-tags': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'question-stream que-tags span': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 15 }],
    'background': '#eee',
    'color': '#999',
    'marginRight': [{ 'unit': 'px', 'value': 16 }]
  },
  'widget': {
    'width': [{ 'unit': 'px', 'value': 260 }]
  },
  'widget h5': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'widget img': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'widget ol': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'widget ol li': {
    'color': '#999',
    'marginBottom': [{ 'unit': 'px', 'value': 16 }]
  },
  'widget ol avatar-24': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'borderRadius': '50%'
  },
  'widget ol ellipsis': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.5 }],
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'widget ol text-muted': {
    'color': '#666'
  },
  'widget ol pull-right': {
    'float': 'right'
  }
});
