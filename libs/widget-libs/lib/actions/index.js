import _regeneratorRuntime from 'babel-runtime/regenerator';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import * as TYPES from '../constants/constants';

export function updateCurrentLocation(location) {
  return {
    type: TYPES.UPDATE_CURRENT_LOCATION,
    currentLocation: location
  };
}

export function addDestination(dest) {
  return {
    type: TYPES.ADD_DESTINATION,
    destination: dest
  };
}

export function addJourneys(destinationId, journeys) {
  return {
    type: TYPES.ADD_JOURNEYS,
    destinationId: destinationId,
    journeys: journeys
  };
}

export function removeJourneys(destinationId) {
  return {
    type: TYPES.REMOVE_JOURNEYS,
    destinationId: destinationId
  };
}

export function removeDestination(destinationId) {
  return {
    type: TYPES.REMOVE_DESTINATION,
    destinationId: destinationId
  };
}

export function fetchJourneys(destinationId, origin, destination) {
  var _this = this;

  return function () {
    var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(dispatch, getState, _ref) {
      var Api = _ref.Api;
      var json, journeys;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Api.fetchJourneys(origin, destination);

            case 2:
              json = _context.sent;
              journeys = json.map(function (rawJourneyObj) {
                var journeyObj = {
                  destination: rawJourneyObj.legs[0].end_address,
                  arrivalTimeText: rawJourneyObj.legs[0].arrival_time.text,
                  departureTimeUTC: rawJourneyObj.legs[0].departure_time.value,
                  transitSteps: rawJourneyObj.legs[0].steps.map(function (step) {
                    var stepObj = {
                      instruction: step.html_instructions,
                      mode: step.travel_mode,
                      duration: step.duration.text
                    };
                    return stepObj;
                  })
                };
                return journeyObj;
              });
              return _context.abrupt('return', dispatch(addJourneys(destinationId, journeys)));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}