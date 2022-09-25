export const getGreeting = (date: Date) => {
  const hour = date.getHours()
  if (hour >= 5 && hour < 12) {
    return 'Good Morning'
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon'
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return 'Good Evening'
  }
}
