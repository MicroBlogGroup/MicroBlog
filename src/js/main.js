
(function() {
  'use strict';
  window.thoughter = window.thoughter || {};
  // console.log('hello world');
  // console.log($('h1'));


  /**
   * Prevents the submit event from reseting the forms
   * @param  {eventhandler} e sumbit event on login
   * @return {void}
   */
  function login(e){
    e.preventDefault();
    let username = $('#userName')[0].value;
    console.log(username);
    let password = $('#exampleInputPassword1')[0].value;
    console.log(password);

    window.thoughter.login(username, password);
  }

  $('.login').on('submit', login);

  
  /**
   * Prevents the submit event from resseting on the form
   * @param  {eventhandler} e submit event on new thought
   * @return {void}
   */
  function newThought(e){
    e.preventDefault();

    let newThought = $('#newThoughts')[0].value;
    console.log(newThought);
    window.thoughter.newThought(newThought);
  }
  $('.newThought').on('submit', newThought);
}());
