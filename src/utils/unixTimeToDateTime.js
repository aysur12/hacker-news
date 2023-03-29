const unixTimeToDateTime = (unixTime) => {
  const dateObj = new Date(unixTime * 1000);

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

export default unixTimeToDateTime;
