import fetch from "node-fetch";
globalThis.fetch = fetch;

// Async version of fetchURLData
async function fetchURLDataAsync(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (err) {
        throw new Error(`Fetch error: ${err.message}`);
    }
}

// Test valid and invalid URLs
const validURL = "https://jsonplaceholder.typicode.com/todos/1";
const invalidURL = "https://jsonplaceholder.typicode.com/invalid-endpoint";

fetchURLDataAsync(validURL)
    .then((data) => console.log("Valid URL response:", data))
    .catch((err) => console.error("Valid URL error:", err.message));

fetchURLDataAsync(invalidURL)
    .then((data) => console.log("Invalid URL response:", data))
    .catch((err) => console.error("Invalid URL error:", err.message));

// Extension: Fetch multiple URLs
async function fetchMultipleURLs(urls) {
    const fetchPromises = urls.map((url) => fetchURLDataAsync(url));
    try {
        const results = await Promise.all(fetchPromises);
        console.log(" All fetch results:", results);
    } catch (err) {
        console.error(" One or more requests failed:", err.message);
    }
}

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/invalid-url"
];

fetchMultipleURLs(urls);
