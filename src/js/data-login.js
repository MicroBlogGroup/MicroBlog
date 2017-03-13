(function() {
    'use strict';
    window.thoughter = window.thoughter || {};
    window.thoughter.login = login;
    console.log('hi');
    /**
     * Passes JSON data into the API with fetch
     * @param  {json} username  The username string converted to JSON sent to the API
     * @param  {json} password  The password string converted to JSON sent to the API
     * @return {void}
     */
    function login(username, password) {

        fetch('https://thoughter.herokuapp.com/api/Authors/login', {
                method: 'POST',
                dataType: 'json',

                body: JSON.stringify({
                    'username': username,
                    'password': password,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            /**
             * Handles the response code from the server.
             * @type {Promise}
             */
            .then(function handleResponse(response) { //.then is our promise returned from fetch
                if (response.status > 199 && response.status < 300) {
                    console.log('SUCCESS ' + response.status);
                    /**
                     * Passes the stored user name given at login on a positive
                     *  response from the server, otherwise it will log an error
                     *  corresponding to the code.
                     * @type {Promise}
                     */
                    response.json().then(function printData(data) {

                        window.thoughter.user = data;
                        console.log(data);
                    });
                } else {
                    console.log('ERROR- ' + response.status);

                }
            });
    }

}());
