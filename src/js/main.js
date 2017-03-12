
(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
  // console.log('hello world');
  // console.log($('h1'));
  //$ means im using jquery
  //setting up event handler for login submit
  $('.login').on('submit', function login(e){
    //the events default is to reset the form we dont want it to reset because
    //we still have stuff we want to do with the values
    e.preventDefault();
    //once this is submited do some stuff - collect the values from the inputs
    let username = $('#userName')[0].value;
    console.log(username);
    let password = $('#exampleInputPassword1')[0].value;
    console.log(password);
    //now im going to the other js and passing the other file the log in
    //now calling the function
    window.thoughter.login(username, password);
  });
  //---------------Creating event handler for newThought submit-------
  $('.newThought').on('submit', function newThought(e){
    e.preventDefault();
    // withought 0 you will not be able to use jquery goodness and itll
    // print the html as a string
    let newThought = $('#newThoughts')[0].value;
    console.log(newThought);
    window.thoughter.newThought(newThought);
  });
}());
