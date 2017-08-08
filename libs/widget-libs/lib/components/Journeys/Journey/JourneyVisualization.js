var _jsxFileName = '../../src/components/Journeys/Journey/JourneyVisualization.jsx',
    _this = this;

import React from 'react';
import PropTypes from 'prop-types';

import { Icon, List, Step } from 'semantic-ui-react';

var JourneyVisualization = function JourneyVisualization(_ref) {
  var active = _ref.active,
      steps = _ref.steps;
  return React.createElement(
    List.Item,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: _this
    },
    React.createElement(
      Step.Group,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: _this
      },
      steps.map(function (step, index) {
        var name = void 0;
        var title = void 0;

        if (step.mode === 'WALKING' && index !== 0) return null;

        if (step.mode.includes('WALKING')) {
          name = 'blind';
          title = 'Walk';
        }

        if (step.mode === 'TRANSIT') {
          name = step.instruction.includes('rail') ? 'subway' : 'bus';
          title = step.instruction.includes('rail') ? 'Train' : 'Bus';
        }

        return React.createElement(
          Step,
          { disabled: active, key: step.instruction, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: _this
          },
          React.createElement(Icon, { name: name, size: 'big', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: _this
          }),
          React.createElement(Step.Content, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: _this
          })
        );
      })
    )
  );
};

JourneyVisualization.propTypes = {
  active: PropTypes.bool.isRequired,
  steps: PropTypes.arrayOf(PropTypes.object).isRequired
};

JourneyVisualization.defaultProps = {
  active: null,
  steps: [{}]
};

export default JourneyVisualization;