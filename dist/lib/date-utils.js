'use strict';

exports.__esModule = true;
exports.timeIsBetween = exports.dateIsBetween = exports.dateHourIsBetween = undefined;

var _start_of_day = require('date-fns/start_of_day');

var _start_of_day2 = _interopRequireDefault(_start_of_day);

var _is_after = require('date-fns/is_after');

var _is_after2 = _interopRequireDefault(_is_after);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helper function that uses date-fns methods to determine if a date is between two other dates
var dateHourIsBetween = exports.dateHourIsBetween = function dateHourIsBetween(start, candidate, end) {
  return (candidate.getTime() === start.getTime() || (0, _is_after2.default)(candidate, start)) && (candidate.getTime() === end.getTime() || (0, _is_after2.default)(end, candidate));
};

var dateIsBetween = exports.dateIsBetween = function dateIsBetween(start, candidate, end) {
  var startOfCandidate = (0, _start_of_day2.default)(candidate);
  var startOfStart = (0, _start_of_day2.default)(start);
  var startOfEnd = (0, _start_of_day2.default)(end);

  return (startOfCandidate.getTime() === startOfStart.getTime() || (0, _is_after2.default)(startOfCandidate, startOfStart)) && (startOfCandidate.getTime() === startOfEnd.getTime() || (0, _is_after2.default)(startOfEnd, startOfCandidate));
};

var timeIsBetween = exports.timeIsBetween = function timeIsBetween(start, candidate, end) {
  var afterStart = false;
  var beforeEnd = false;
  if (start.getHours() == candidate.getHours() && start.getMinutes() <= candidate.getMinutes()) {
    afterStart = true;
  } else if (start.getHours() < candidate.getHours()) {
    afterStart = true;
  }
  if (end.getHours() == candidate.getHours() && end.getMinutes() >= candidate.getMinutes()) {
    beforeEnd = true;
  } else if (end.getHours() > candidate.getHours()) {
    beforeEnd = true;
  }
  return afterStart && beforeEnd;
};