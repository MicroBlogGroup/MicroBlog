
(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
  // console.log('hello world');
  // console.log($('h1'));

  $('.login').on('submit', function login(e){

    e.preventDefault();
    let username = $('#userName')[0].value;
    console.log(username);
    let password = $('#exampleInputPassword1')[0].value;
    console.log(password);

    window.thoughter.login(username, password);
  });
  //---------------Creating event handler for newThought submit-------
  $('.newThought').on('submit', function newThought(e){
    e.preventDefault();

    let newThought = $('#newThoughts')[0].value;
    console.log(newThought);
    window.thoughter.newThought(newThought);
  });
}());
