(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
  //in our name space variable the property login = the function log in on this file
  window.thoughter.login = login;
console.log('hi');
 function login(username, password){
   //creating ajax for log in ajax passes data through objects
  $.ajax({
    url: 'https://thoughter.herokuapp.com/api/Authors/login',
    method: 'POST',
    dataType: 'json',
    //creating data block/body which are always objects
    //server doesnt take any data type other then json so we are making this data
    //block into json
    data: JSON.stringify({
      'username': username,
      'password': password,
    }),
    headers: {
       'Content-Type': 'application/json'
    }
  })
    //creating promise handlers
    //any ajax call will always return a promise either a error or success
    .done(function sucess(data){

      window.thoughter.user = data;
      console.log(data);
    })
    .fail(function error(err){
      console.log(err);
    });
}
}());
