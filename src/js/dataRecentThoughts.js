(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    console.log("hello from recenthoughts!!!");


    fetch('https://thoughter.herokuapp.com/api/thoughts',

        {
            method: 'GET',
            headers: {
                Authorization: 'IuiL0gsrlxnlPIZQDp6gAZZVlmNlfrTpMgmVIRJIq08DPFxyq5FRrCBh4k55LOC6',
                'Content-Type': 'application/json'


            }
        }

    ).then(function handleResponse(response){
      //check response code



        response.json().then(function printData(thoughts){
              console.log(thoughts[0].content);//this returns the thought data object
              //next step will be to retrurn each object inside the object array from
              // a for each loop, populating the panels inside li's within the html
              // using jquery
              //

        });


    });








}());
