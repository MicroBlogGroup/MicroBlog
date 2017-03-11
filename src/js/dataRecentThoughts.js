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
                // console.log(thoughts); //this returns the thought data object
                thoughts.forEach(function getThoughtAndDate(data) {
                    console.log(data);

                      let newDate = Date(data.createTime);//turn this into a date object so we manipulate it
                      console.log(newDate);
                      let newArticle = $('<article></article>');
                        newArticle.addClass('panel-body').text(data.content);

                      let newAside = $('<aside></aside>');
                      newAside.addClass('panel-heading').text("Posted at " + newDate);

                      let newLi = $('<li></li');
                      newLi.addClass('panel panel-info').append(newAside, newArticle);

                      $('ul').append(newLi);

                    });

                  });

                } else {
                  console.log('ERROR- ' + response.status);

                }

              });

            }());
