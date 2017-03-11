(function() {
  'use strict';
  //telling browser i want it to = window.thoughter if it already exists
  //if it doesn't create a new global name space object
  window.thoughter = window.thoughter || {};
  //creating something called new thought with in the object thoughter
  //and what we want new thought to = is this function newthought
  window.thoughter.newThought = newThought;
console.log("hi data new thought");

function newThought(newThought, author){


  fetch('https://thoughter.herokuapp.com/api/Thoughts',

        {
          method: 'POST',
          data: {
            'content': newThought,
            'authorId': window.thoughter.user.userId
          },
          headers: {
              Authorization: window.thoughter.user.id,
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