
(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  console.log(window.thoughter);

  window.thoughter.newThought = newThought;

  // const user = JSON.parse(localStorage.getItem('user'));
console.log('hi data new thought');
/**
 * fetch user data inputted through newThought.html from API
 * @param  {JSON} newThought users new thought
 * @return {void}
 */
function newThought(newThought){
console.log(newThought);

  fetch('https://thoughter.herokuapp.com/api/Thoughts',

        {
          method: 'POST',
          dataType: 'json',
          body: JSON.stringify({
            'content': newThought,
            'authorId': ''
          }),
          headers: {
              Authorization: 'IuiL0gsrlxnlPIZQDp6gAZZVlmNlfrTpMgmVIRJIq08DPFxyq5FRrCBh4k55LOC6',
              'Content-Type': 'application/json'
            }
      }

  ).then(
/**
 * handles response of newThought to determine if status is successfull
 * @param  {Promise} response response from newThought
 * @return {void}
 */
    function handleResponse(response) {
      if (response.status > 199 && response.status < 300) {
          console.log('SUCCESS' + response.status);

          response.json().then(
            /**
             * successfull response status that prints a new 'thought'
             * @param  {JSON} thought prints new thought
             * @return {void}
             */
            function printData(thought) {
               console.log(thought);
          });

              } else {
                console.log('ERROR- ' + response.status);

              }

            });
  }

}());
