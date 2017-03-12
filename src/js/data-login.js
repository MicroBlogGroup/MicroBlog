(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
  //in our name space variable the property login = the function log in on this file
  window.thoughter.login = login;
  //created this function log in in another file so im passing it into my name space
console.log('hi');
 function login(username, password){
   //creating fetch login post which enables people to log in
   //using fetch to connect with server and receive promises back that provide data for our app
   fetch('https://thoughter.herokuapp.com/api/Authors/login',
    {
      method: 'POST', //because we dont want to get anything
    dataType: 'json',
    //creating data block/body which are always objects
    //server doesnt take any data type other then json so we are making this data
    //block into json
    body: JSON.stringify({ //our servers expect jason data so this transforms our js through json
      'username': username,
      'password': password,
    }),
    headers: {
       'Content-Type': 'application/json'
    }
  })
    //creating promise handlers
    //any ajax call will always return a promise either a error or success
    .then(function handleResponse(response) {//.then is our promise returned from fetch
        if (response.status > 199 && response.status < 300) {
            console.log("SUCCESS " + response.status);

    response.json().then(function printData(data) {
    //storing user data in thoughter name space because we used the id and
    //author id in other files
      window.thoughter.user = data;
      console.log(data);
    });
    } else {
      console.log('ERROR- ' + response.status);

    }
  });
}

}());
