//changes the string from using the db url to the json url (ie `${baseUrl}/blogs` becomes 'blogs.json')
// import baseUrl from "../data/URLpaths";
export default function toJson(str) {
    str = removeBaseUrl(str);
    str = removeQueryString(str);
    const parts = str.split('/');
    // console.log('parts:', parts);
    let fileName = parts[0];
    if (fileName === 'comments' || fileName === 'posts') {// || fileName === 'posts'
        const postId = parts[1]
        return [fileName, postId];
    }
    // if (fileName === 'posts') {
    //     console.log('parts:', parts);
    // }
    return fileName;
}
function removeBaseUrl(url) {
    // Remove http://localhost:3000/ or http:// from the beginning of the string
    return url.replace(/^https?:\/\/localhost:3000\//, '').replace(/^https?:\/\//, '');
    // return url.replace(baseUrl, '');
}
function removeQueryString(inputString) {
    // Check if the input string contains a question mark
    if (inputString.includes('?')) {
      // Split the string at the first occurrence of '?'
      const parts = inputString.split('?');
  
      // Return the part before the '?'
      return parts[0];
    } else {
      // If there's no '?', return the original string
      return inputString;
    }
  }