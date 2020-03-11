// This is a walkthrough of Twilio Blog's Guide to JS Promises
//  Link : https://www.twilio.com/blog/2016/10/guide-to-javascript-promises.html

'use strict';

const fetch = require('node-fetch');
const request = require('request')


// // Simple Request/Response Logic
// request.get('http://httpbin.org/get', (error, response, body) => {
//     if (error) {
//         console.error('oh shoot! Something went wrong');
//         console.error(error.message);
//         return
//     }
//     console.log(`Request done. Response status: %d`, response.statusCode)
// })
// 

// // Promises Logic (same utlity as above)
// fetch('http://httpbin.org/get')
//     .then(response => {
//         console.log('Request using Promises done. Response status code: %d', response.status);
//     })
//     .catch(error => {
//         console.error(`Oh shoot! Something went wrong with the Promise Code:`);
//         console.error(error.message)
//     });

// Function chaining w/ Promises
function extractStatusCode(response) {
    return response.status;
}

// // Error Handling - Round 1 - Upfront Error handling w/out catch
// fetch('invalid URL')
// .then(extractStatusCode, errorInFetch => {
//     console.error('An error occurred in the fetch call.');
//     console.error(errorInFetch.message);
//     // return null as response code since no request has been performed
//     return null;
// })
// .then(statusCode => {
//     console.log('Request using Promises, part II. Response status code: %s', statusCode);
// })
// .catch(error => {
//     console.error('This will never be executed as the Promise is still returned')
//     console.error(error.message);
// });

// // Error Handling - Round 2 - Error handling with rejections & catch 
// fetch('invalid url')
// .then(extractStatusCode, errorInFetch => {
//     console.error('An error occurred in the fetch call.')
//     console.error(errorInFetch.message);
//     // forward the error 
//     return Promise.reject(errorInFetch);
// })
// .then(statusCode => {
//     console.log('Request using Promises. Response status code: $s', statusCode);
// })
// .catch(error => {
//     console.error('This will now be executed as another excpetion handler.')
// })

// // Error Handling - Round 3 - Error handling with extractStatusCode error
// function extractStatusCode(response) {
//     response = undefined;
//     return response.status;
// }

// fetch('http://httpbin.org/get')
// .then(extractStatusCode, errorInFetch => {
//     console.error('This will not be exectued.')
//     console.error(errorInFetch.message);
//     // forward the error
//     return Promise.reject(errorInFetch)
// })
// .then(statusCode => {
//     console.log('Request using PRomises. Response status code: %s', statusCode);
// })
// .catch(error => {
//     console.error('There was an error somewhere in the chain');
//     console.error(error.message);
// })

// Error Handling - Executing Promises in Parallel
// Note: that the console output shows that these requests are made all at once with no guaranteed order
// const queryParameters = ['ahoy', 'hello', 'hallo'];

// const fetchPromises = queryParameters.map(queryParam => {
//     return fetch(`http://httpbin.org/get?${queryParam}`)
//     .then(response => {
//         return response.json()
//     })
//     .then(response => {
//         // extract the URL property from the response object
//         let url = response.url;
//         console.log('Response from: %s', url);
//         return url;
//     });
// });

// Promise.all(fetchPromises).then(allUrls => {
//     console.log('The return values of all requests are passed as an array: ');
//     console.log(allUrls);
// }).catch(error => {
//     console.error('A call failerd: ');
//     console.error(error.message);
// })


