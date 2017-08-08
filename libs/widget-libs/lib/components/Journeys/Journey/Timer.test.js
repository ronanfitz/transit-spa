var _jsxFileName = '../../src/components/Journeys/Journey/Timer.test.jsx',
    _this = this;

import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Timer from './Timer';

describe('Timer', function () {
  it('renders when passed seconds as props', function () {
    var seconds = 120;
    var callback = function callback() {};

    var component = shallow(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: _this
    }));
    expect(toJson(component)).toMatchSnapshot();
  });

  it('accepts a callback function as props', function () {
    var seconds = 120;
    var callback = function callback() {};

    var component = mount(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: _this
    }));
    expect(component.props().onComplete).toEqual(callback);
  });

  it('initializes with count equal the the seconds and expired equal to false in the state', function () {
    var seconds = 120;
    var callback = function callback() {};

    var component = mount(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: _this
    }));
    expect(component.state('count')).toEqual(120);
    expect(component.state('expired')).toEqual(false);
  });

  it('calls decrementOrExpire and decreases the count', function () {
    var seconds = 120;
    var expected = { count: seconds - 1 };
    var callback = function callback() {};

    var component = shallow(React.createElement(Timer, { seconds: seconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: _this
    }));
    expect(component.instance().state.count).toEqual(seconds);
    expect(component.instance().decrementOrExpire().count).toEqual(expected.count);
  });

  it('has componentWillReceiveProps', function () {
    var initialSeconds = 120;
    var newSeconds = 300;
    var callback = function callback() {};

    var component = shallow(React.createElement(Timer, { seconds: initialSeconds, onComplete: callback, __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: _this
    }));
    expect(component.instance().state.count).toEqual(initialSeconds);
    // expect(component.instance().componentWillReceiveProps(newSeconds).count).toEqual(newSeconds);
  });
});