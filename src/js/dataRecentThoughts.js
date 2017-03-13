(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    console.log('hello from recenthoughts!!!');
    /**
     * sends a fetch to the API for the "thoughts"
     * @type {Promise}
     */
    fetch('https://thoughter.herokuapp.com/api/thoughts?filter={"order":"createTime DESC", "limit": 20}',

            {
                method: 'GET',
                headers: {
                    Authorization: 'IuiL0gsrlxnlPIZQDp6gAZZVlmNlfrTpMgmVIRJIq08DPFxyq5FRrCBh4k55LOC6',
                    'Content-Type': 'application/json'
                }
            }

        )


        /**
         * Handles the response code from the server.
         * @type {Promise}
         */
        .then(function handleResponse(response) {
            if (response.status > 199 && response.status < 300) {
                console.log('SUCCESS ' + response.status);
                /**
                 * on a positive response, will call the thought object from the API,
                 * otherwise it will return an error code
                 *
                 * @type {Promise}
                 */
                response.json().then(function printData(thoughts) {
                    // console.log(thoughts); //this returns the thought data object
                    //
                    /**
                     * Iterates through the "thought" data and populates the html
                     * with a list containing the data.
                     * @type {Promise}
                     */
                    thoughts.forEach(function getThoughtAndDate(data) {
                        console.log(data);

                        let newDate = new Date(data.createTime);
                        console.log(newDate);

                        let time = newDate.getHours() + ':' + newDate.getMinutes();
                        let day = newDate.getMonth() + '/' + newDate.getDate() + '/' + newDate.getUTCFullYear();
                        let newArticle = $('<article></article>');
                        newArticle.addClass('panel-body').text(data.content);

                        let newAside = $('<aside></aside>');
                        newAside.addClass('panel-heading').text('Posted at ' + time + ' on ' + day);

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
