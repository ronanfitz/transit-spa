var _jsxFileName = '../../src/App.jsx',
    _this = this;

import React from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import DestinationTable from './components/Destinations/DestinationTable';
import AddNewDestinationRow from './components/AddNewDestination/AddNewDestinationRow';
import './App.css';

var App = function App() {
  return React.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: _this
    },
    React.createElement(
      Container,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: _this
      },
      React.createElement(
        Grid,
        { padded: true, centered: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: _this
        },
        React.createElement(
          Grid.Column,
          { id: 'content-container', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: _this
          },
          React.createElement(
            Grid.Row,
            { id: 'destinations-container', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: _this
            },
            React.createElement(DestinationTable, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: _this
            })
          ),
          React.createElement(
            Grid.Row,
            { id: 'new-destination-container', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: _this
            },
            React.createElement(
              Segment,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: _this
              },
              React.createElement(AddNewDestinationRow, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: _this
              })
            )
          )
        )
      )
    )
  );
};

export default App;