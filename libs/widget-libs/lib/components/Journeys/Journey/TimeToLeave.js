var _jsxFileName = '../../src/components/Journeys/Journey/TimeToLeave.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Icon, List } from 'semantic-ui-react';
import Timer from './Timer';

export function timerExpired() {
  return React.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    },
    'RUN!!!'
  );
}

var TimeToLeave = function TimeToLeave(_ref) {
  var timeToLeaveInSeconds = _ref.timeToLeaveInSeconds;
  return React.createElement(
    List.Item,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: _this
    },
    React.createElement(Icon, { name: 'hourglass half', size: 'large', __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    }),
    React.createElement(
      List.Content,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: _this
      },
      React.createElement(
        List.Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: _this
        },
        'leave in'
      ),
      React.createElement(Timer, { seconds: timeToLeaveInSeconds, onComplete: timerExpired, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      })
    )
  );
};

TimeToLeave.propTypes = {
  timeToLeaveInSeconds: PropTypes.number.isRequired
};

TimeToLeave.defaultProps = {
  timeToLeaveInSeconds: 5
};

export default TimeToLeave;