//A reusable fetch file to fetch data from the server, but also gets the data from a local JSON file when failed to fetch it from the server
import jsonData from "../data/data.json";
import toJson from "./toJson";

async function myFetch(url, successCallback, errorCallback = null) {
  let type = toJson(url); //toJson extracts the json type from the url

  // Check if session storage flag is set for 'blogs' type to be from JSON data (instead of from server)
  const sessionFlag = sessionStorage.getItem('blogsFromJSON'); //flag is used to only attempt a fetch from the server if the blogs have been successfully fetched from the server (this stops a lot of unnecessary server fetches, since we know that there is no server access if the blogs aren't set from the server )
  if ((sessionFlag === 'true' && type !== 'blogs') && type !== 'blogsTotal') { //if the blogs data has been fetched from the local JSON file (and current data being fetched isn't the blogs (and isn't the blogs total))
    // Load data from JSON file directly and avoid fetching from server
    let results = jsonData[type];
    if (typeof type !== "string") {
      const postId = type[1];
      type = type[0];
      if (type === 'comments') {
        results = jsonData[type].filter((comment) => comment.postId === +postId);
      } else if (type === 'posts') {
        results = jsonData[type].filter((post) => post.userId === +postId);
      }
      // console.log(`${type} data fetched from JSON file`);
    }
    successCallback(results);
    return results;
  }
  //if blogs data has not been previously fetched from the JSON file (or blogs data is currently being fetched), then attempt to fetch data from the server, (or fetching other data):
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Bad Fetch - ${response.status}`);
    }
    const data = await response.json();
    successCallback(data);
    // console.log('Data fetched from mySQL database');

    if (type === 'blogs') {
      sessionStorage.removeItem('blogsFromJSON'); // Set session storage flag if type is 'blogs'
    }

    return data;
  } catch (error) {
    // console.error(`${error}. Could not get data from ${url}`);

    if (errorCallback) {
      errorCallback(error);
    }

    // Load limited data from JSON file (since it failed to get data from the server)
    if (type === 'blogs') {
      sessionStorage.setItem('blogsFromJSON', 'true'); // Set session storage flag if type is 'blogs'
    }
    // else if (type === 'blogsTotal') {
    //   return 1; //the json file has only one page of blogs total to display (totalPages already defaults to 1, (see app.js))
    // }

    // console.log(`${type} data fetched from JSON file`);
    let results = jsonData[type];
    if (typeof type !== "string") {
      const postId = type[1];
      type = type[0];
      if (type === 'comments') {
        results = jsonData[type].filter(comment => comment.postId === +postId);
      } else if (type === 'posts') {
        results = jsonData[type].filter(post => post.userId === +postId);
      }
    }
    if (type !== 'blogsTotal') {
      successCallback(results);
    }
  }
}

export default myFetch;
