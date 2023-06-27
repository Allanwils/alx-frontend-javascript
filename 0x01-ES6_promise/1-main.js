import getFullResponseFromAPI from './1-promise';

getFullResponseFromAPI(true)
  .then(response => {
    console.log(`Promise resolved: ${JSON.stringify(response)}`);
  })
  .catch(error => {
    console.log(`Promise rejected: ${error.message}`);
  });

getFullResponseFromAPI(false)
  .then(response => {
    console.log(`Promise resolved: ${JSON.stringify(response)}`);
  })
  .catch(error => {
    console.log(`Promise rejected: ${error.message}`);
  });
