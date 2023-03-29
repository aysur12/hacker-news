const updateData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error while updating data');
    }

    const data = await response.json();

    const dataArr = await Promise.all(data)
    

    return dataArr;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateData;
