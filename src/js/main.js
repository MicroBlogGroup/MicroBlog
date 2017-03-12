
(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
  // console.log('hello world');
  // console.log($('h1'));
  //$ means im using jquery
  //setting up event handler for login submit
  $('.login').on('submit', function login(e){
    //submit is event and function is the handler
    //the events default is to reset the form we dont want it to reset because
    //we still have stuff we want to do with the values
    e.preventDefault();
    //once this is submited do some stuff - collect the values from the inputs
    let username = $('#userName')[0].value;//using jquery to capture user name value
    //0 because jquery goodness is returned in an array and have to tap into that array
    //to find value
    console.log(username);
    let password = $('#exampleInputPassword1')[0].value;
    console.log(password);
    //now im going to the other js and passing the other file the log in
    //now calling the function
    window.thoughter.login(username, password);//once we have user name and password
    //executing log in function which was passed in our name space from our data
    //log in file
  });
  //---------------Creating event handler for newThought submit-------
  $('.newThought').on('submit', function newThought(e){
    e.preventDefault();
    // withought 0 you will not be able to use jquery goodness and itll
    // print the html as a string
    let newThought = $('#newThoughts')[0].value;
    console.log(newThought);
    window.thoughter.newThought(newThought);//once we have our new thought value
    //executing new thought function which was passed in our name space from
    //our data new thought file 
  });
}());
