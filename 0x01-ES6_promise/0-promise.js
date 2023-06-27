// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your API logic here
    // For example, making an API request using fetch
    fetch('https://api.example.com')
      .then((response) => {
        resolve(response); // Resolve the Promise with the API response
      })
      .catch((error) => {
        reject(error); // Reject the Promise with the error
      });
  });
}

export { getResponseFromAPI };
