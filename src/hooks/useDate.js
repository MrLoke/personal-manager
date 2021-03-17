
const useDate = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let dateObj = new Date()
  let day = dateObj.getDate()
  let month = monthNames[dateObj.getMonth()]
  let year = dateObj.getFullYear()

  if (day < 10) day = `0${day}`
  
  let fullDate = `${day} ${month} ${year}`

  return { fullDate }
}

export default useDate
