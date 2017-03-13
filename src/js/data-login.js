(function() {
    'use strict';
    window.thoughter = window.thoughter || {};
    window.thoughter.login = login;
    console.log('hi');

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

            .then(function handleResponse(response) { //.then is our promise returned from fetch
                if (response.status > 199 && response.status < 300) {
                    console.log("SUCCESS " + response.status);

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
