//Simple Basic standard fetch
async function myFetch(url, successCallback, errorCallback) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Bad Fetch - ${response.status}`);
    }
    const data = await response.json();
    successCallback(data);
    return data;
  }
  catch (error) {
    console.error(`${error}. Could not get data from ${url}`);
    errorCallback(error);
  }
}

export default myFetch;