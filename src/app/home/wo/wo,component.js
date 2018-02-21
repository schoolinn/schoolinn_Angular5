import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main': {
    'width': [{ 'unit': 'px', 'value': 950 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'main user-l': {
    'width': [{ 'unit': 'px', 'value': 240 }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'main user-l image': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 104 }],
    'height': [{ 'unit': 'px', 'value': 104 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'main user-l image img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderRadius': '100%',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'main user-l name': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'main user-l button': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'width': [{ 'unit': 'px', 'value': 174 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'borderRadius': '8px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 26 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block'
  },
  'main user-l fork': {
    'color': '#fff',
    'background': '#2481e4'
  },
  'main user-l chart': {
    'color': '#2481e4',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2481e4' }]
  },
  'main user-r': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 600 }]
  },
  'main panel': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'main panel header': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '400'
  },
  'main panel content': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'main panel history-list': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'main panel history-list li': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 60 }]
  },
  'main panel history-list li dot': {
    'position': 'absolute',
    'zIndex': '1',
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'display': 'block',
    'backgroundColor': '#eee',
    'left': [{ 'unit': 'px', 'value': 30 }],
    'top': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '6px'
  },
  'main panel history-list li title': {
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'textOverflow': 'ellipsis',
    'marginBottom': [{ 'unit': 'px', 'value': 7 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#258fe7'
  },
  'main panel history-list li title span': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'main panel history-list li summary': {
    'color': '#626c76'
  },
  'main panel history-list li:before': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 82 }],
    'backgroundColor': '#eee',
    'left': [{ 'unit': 'px', 'value': 36 }]
  },
  'main panel history-list li:after': {
    'content': '''',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 82 }],
    'backgroundColor': '#eee',
    'left': [{ 'unit': 'px', 'value': 36 }]
  },
  'main panel history-list li:after': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'main panel history-list li:before': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'main skill name': {
    'color': '#9b9b9e'
  },
  'main skill progress': {
    'backgroundColor': '#e9e9e9',
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'main skill progress div': {
    'height': [{ 'unit': 'px', 'value': 10 }],
    'backgroundColor': '#55a7ea'
  },
  'main level-ruler': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 10 }]
  },
  'main level-ruler div': {
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e9e9e9' }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'right',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'main level-ruler level-1': {
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'main level-ruler level-3': {
    'width': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'main level-ruler level-3': {
    'width': [{ 'unit': '%H', 'value': 0.6 }]
  },
  'main level-ruler level-4': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'main level-ruler level-5': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'main level-label': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'main level-label level-0': {
    'width': [{ 'unit': '%H', 'value': 0.1 }],
    'textAlign': 'left'
  },
  'main level-label level-5': {
    'width': [{ 'unit': '%H', 'value': 0.1 }],
    'textAlign': 'right'
  },
  'main level-label div': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'textAlign': 'center',
    'float': 'left',
    'color': '#333'
  }
});
