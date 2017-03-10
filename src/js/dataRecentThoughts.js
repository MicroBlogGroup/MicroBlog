(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    console.log("hello from recenthoughts!!!");

    fetch('https://thoughter.herokuapp.com/api/thoughts?filter={"order":"createTime DESC", "limit": 20}',

        {
            method: 'GET',
            headers: {
                Authorization: 'IuiL0gsrlxnlPIZQDp6gAZZVlmNlfrTpMgmVIRJIq08DPFxyq5FRrCBh4k55LOC6',
                'Content-Type': 'application/json'


            }
        }

    ).then(function handleResponse(response) {
        if (response.status > 199 && response.status < 300) {
            console.log("SUCCESS " + response.status);

            response.json().then(function printData(thoughts) {
                console.log(thoughts[0].content);
                console.log(thoughts); //this returns the thought data object
                //next step will be to retrurn each object inside the object array from
                // a for each loop, populating the panels inside li's within the html
                // using jquery


                thoughts.forEach(function getThoughtAndDate(data) {
                    console.log(data);
                    $('ul')
                      .append('<li><aside>' +
                        data.createTime + '</aside><article>' +
                        data.content + '</article></li>');

                });


              });


        } else {

            console.log('ERROR- ' + response.status);



        }




    });








}());
