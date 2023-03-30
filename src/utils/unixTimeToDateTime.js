const unixTimeToDateTime = (unixTime) => {
  const dateObj = new Date(unixTime * 1000);

  return dateObj.toLocaleDateString('ru-ru', {
    hour: 'numeric',
    minute: 'numeric'
  })

};

export default unixTimeToDateTime;
