// Assuming you have blogs.json file in the correct directory
import jsonData from "../data/data.json";
import toJson from "./toJson";

// Simple basic fetch
async function myFetch(url, successCallback, errorCallback = null) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Bad Fetch - ${response.status}`);
    }
    const data = await response.json();
    successCallback(data);
    // console.log('Data fetched from mySQL database');
    return data;
  } catch (error) {
    console.error(`${error}. Could not get data from ${url}`);

    if (errorCallback) {
      errorCallback(error);
    }
    //Load limited data from JSON file, (since it failed to get data from the server)
    console.log('Data fetched from JSON file');
    let type = toJson(url); //toJson extracts the json type from the url (ie '${baseUrl}/posts/6' becomes 'posts')
    let results = jsonData[type];
    if (typeof type !== "string") {
      const postId = type[1];
      type = type[0];
      if (type === 'comments') {
      results = jsonData[type].filter((comment) => comment.postId === +postId)
      }
      else if (type === 'posts') {
        results = jsonData[type].filter((post) => post.id === +postId)
      }
    }
    successCallback(results);
  }
}

export default myFetch;
