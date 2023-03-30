const updateData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error while updating data');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default updateData;
