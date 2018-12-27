'use strict';

var template = React.createElement(
    'p',
    null,
    'Did this JSX change from app.js!?'
);
var appRoot = document.getElementById('app');
var user = {
    name: 'Piero',
    age: 27,
    location: 'Kansas City'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

ReactDOM.render(template2, appRoot);
