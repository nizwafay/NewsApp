export const convertDayToString = (day) => {
  switch (day) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
  }
}

export const convertMonthToString = (month) => {
  switch (month) {
    case 0:
      return 'January'
    case 1:
      return 'February'
    case 2:
      return 'March'
    case 3:
      return 'April'
    case 4:
      return 'May'
    case 5:
      return 'June'
    case 6:
      return 'July'
    case 7:
      return 'August'
    case 8:
      return 'September'
    case 9:
      return 'October'
    case 10:
      return 'November'
    case 12:
      return 'December'
  }
}

export const haveWords = (string, words) => {
  words = words.toLowerCase()

  if (words === '') return true

  let title = string.toLowerCase()
  for (let i = 0; i < title.length - (words.length - 1); i++) {
    if (title.substr(i, words.length) === words) return true
    continue
  }

  return false
}
