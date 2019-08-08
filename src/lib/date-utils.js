// @flow

import startOfDay from 'date-fns/start_of_day'
import isAfter from 'date-fns/is_after'

// Helper function that uses date-fns methods to determine if a date is between two other dates
export const dateHourIsBetween = (start: Date, candidate: Date, end: Date): boolean =>
  (candidate.getTime() === start.getTime() || isAfter(candidate, start)) &&
  (candidate.getTime() === end.getTime() || isAfter(end, candidate))

export const dateIsBetween = (start: Date, candidate: Date, end: Date): boolean => {
  const startOfCandidate = startOfDay(candidate)
  const startOfStart = startOfDay(start)
  const startOfEnd = startOfDay(end)

  return (
    (startOfCandidate.getTime() === startOfStart.getTime() || isAfter(startOfCandidate, startOfStart)) &&
    (startOfCandidate.getTime() === startOfEnd.getTime() || isAfter(startOfEnd, startOfCandidate))
  )
}

export const timeIsBetween = (start: Date, candidate: Date, end: Date): boolean => {
  let afterStart = false
  let beforeEnd = false
  if (start.getHours() == candidate.getHours() && start.getMinutes() <= candidate.getMinutes()) {
    afterStart = true
  } else if (start.getHours() < candidate.getHours()) {
    afterStart = true
  }
  if (end.getHours() == candidate.getHours() && end.getMinutes() >= candidate.getMinutes()) {
    beforeEnd = true
  } else if (end.getHours() > candidate.getHours()) {
    beforeEnd = true
  }
  return afterStart && beforeEnd
}
