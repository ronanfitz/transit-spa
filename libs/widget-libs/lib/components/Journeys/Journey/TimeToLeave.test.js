var _jsxFileName = '../../src/components/Journeys/Journey/TimeToLeave.test.jsx',
    _this = this;

import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimeToLeave, { timerExpired } from './TimeToLeave';

describe('TimeToLeave', function () {
  it('should render list item', function () {
    var seconds = 120;

    var component = mount(React.createElement(TimeToLeave, { timeToLeaveInSeconds: seconds, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has timeToLeaveInSeconds prop as a number of seconds', function () {
    var seconds = 120;

    var component = mount(React.createElement(TimeToLeave, { timeToLeaveInSeconds: seconds, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: _this
    }));
    expect(component.props().timeToLeaveInSeconds).toEqual(seconds);
  });

  it('has timerExpired callback', function () {
    expect(timerExpired()).toEqual(React.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: _this
      },
      'RUN!!!'
    ));
  });
});