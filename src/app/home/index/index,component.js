import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main': {
    'width': [{ 'unit': 'px', 'value': 950 }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'inn-user-filter': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 80 }],
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'inn-user-filter filter-box': {
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'inn-user-filter filter-more': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'color': '#999',
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'inn-user-filter filter-title': {
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'inn-user-filter filter-content': {
    'position': 'relative',
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 880 }],
    'color': '#555',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#eee' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'inn-user-filter filter-content list': {
    'overflow': 'hidden',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'inn-user-filter filter-content list a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'float': 'left',
    'color': '#555',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'item-user': {
    'transition': 'border-color ease-in-out .4s, box-shadow ease-in-out .15s',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'item-user:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.05)' }],
    'borderBottomColor': '#eaebef',
    'borderLeftColor': '#edeef2',
    'position': 'relative',
    'zIndex': '8'
  },
  'item-user user-avatar img': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 88 }],
    'height': [{ 'unit': 'px', 'value': 88 }],
    'borderRadius': '100%'
  },
  'item-user user-name': {
    'textAlign': 'center'
  },
  'item-user user-info': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'item-user title': {
    'display': 'inline-block',
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'maxWidth': [{ 'unit': 'px', 'value': 380 }],
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'item-user description': {
    'marginTop': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'item-user description desc-item': {
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'textOverflow': 'ellipsis',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'item-user description desc-item em': {
    'fontStyle': 'normal',
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  }
});
