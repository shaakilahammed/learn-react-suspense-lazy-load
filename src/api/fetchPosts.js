import { wrapPromise } from '../utils/utils';

export const fetchPosts = (url) => {
    const response = fetch(url).then((res) => res.json());
    return wrapPromise(response);
};

let cache = new Map();

export function fetchData(url) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }
    return cache.get(url);
}

async function getData(url) {
    if (url.includes('/comments')) {
        return await getComments(url);
    } else {
        throw Error('Not implemented');
    }
}

async function getComments(url) {
    const response = await fetch(url);

    const comments = await response.json();

    return comments;
}
