(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
console.log('hi');
 function login(username, password){
   //creating ajax for log in ajax passes data through objects
  $.ajax({
    url: 'https://thoughter.herokuapp.com/api',
    method: 'POST',
    dataType: 'json',
    //creating data block/body which are always objects
    data: {
      'email': username,
      'password': password,
    },
    headers: {
       'Content-Type': 'application/json'
    }
  })
    //creating promise handlers
    //any ajax call will always return a promise either a error or success
    .done(function sucess(data){
      console.log(data);
    })
    .fail(function error(err){
      console.log(err);
    });

}
}());
