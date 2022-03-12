const getData = async (url) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }catch(err) {
        const status = err.status;
        const statusText = err.statusText;
        const message = `Error: ${status} - ${statusText}`;
        console.error(message);
    }
}

export default getData;