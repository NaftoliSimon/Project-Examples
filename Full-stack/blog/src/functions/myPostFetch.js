//Simple basic POST fetch
async function myPostFetch(url, headers, errorCallback = false) {
    try {
        const response = await fetch(url, headers);
        if (!response.ok) {
            throw new Error(`Bad POST Fetch - ${response.status}`);
        }
    }
    catch (error) {
        console.error(`${error}. Could not POST data to ${url}`);
        if (errorCallback) {
            errorCallback(error);
        }
    }
}

export default myPostFetch;