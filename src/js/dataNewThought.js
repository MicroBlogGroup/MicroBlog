(function() {
  'use strict';
  //telling browser i want it to = window.thoughter if it already exists
  //if it doesn't create a new global name space object
  window.thoughter = window.thoughter || {};
  console.log(window.thoughter);
  //creating something called new thought with in the object thoughter
  //and what we want new thought to = is this function newthought
  window.thoughter.newThought = newThought;
  //grabbing local storage data for user that i already
  //unstringifying with json.parse
  const user = JSON.parse(localStorage.getItem('user'));
console.log("hi data new thought");

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

  ).then(function handleResponse(response) {
      if (response.status > 199 && response.status < 300) {
          console.log("SUCCESS " + response.status);

          response.json().then(function printData(thought) {
               console.log(thought); //this returns the thought data object
          });

              } else {
                console.log('ERROR- ' + response.status);

              }

            });
  }

}());
