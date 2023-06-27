// 0-promise.js
export function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation here
    
    // If the operation is successful, resolve the promise
    resolve(/* Your response data */);
    
    // If there's an error, reject the promise
    // reject(new Error("Error message"));
  });
}
