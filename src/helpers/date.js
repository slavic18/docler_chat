/**
 * format a javascript date into 12h AM/PM based on time string and format
 * @param date
 * @param format {string} can be 12 | 24
 * @return {string}
 */
export const formatDate = (date, format) => {
  const dateObj = new Date(date);
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  if (format === '12') {
    const amPM = (hours > 11) ? "pm" : "am";
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = "12";
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return `${hours}:${minute} ${amPM}`;
  }
  return `${hours}:${minutes}`;
};

