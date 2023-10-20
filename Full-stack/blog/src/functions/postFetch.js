//Simple basic reusable POST fetch
async function postFetch(url, data, errorCallback = false) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
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

export default postFetch;