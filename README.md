# Dynamic Content via React and Axios
Example on how to to load external data via React and Axios.

## React
React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.  
- https://github.com/facebook/react

## Axios
Promise based HTTP client
- https://github.com/axios/axios

### Examples

#### GET()
`function getUserAccount() {
  return axios.get('/user/12345');
}`

#### POST()
`function getUserAccount() {
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}`