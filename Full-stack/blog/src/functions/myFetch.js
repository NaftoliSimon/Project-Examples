const headers = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

//Simple Basic standard fetch
async function myFetch(url, successCallback, errorCallback = false) {
  try {
    const response = await fetch(url, headers);
    if (!response.ok) {
      throw new Error(`Bad Fetch - ${response.status}`);
    }
    const data = await response.json();
    // console.log('data:', data);
    successCallback(data);
    return data;
  }
  catch (error) {
    console.error(`${error}. Could not get data from ${url}`);
    if (errorCallback) {
      errorCallback(error);
    }
  }
}

export default myFetch;