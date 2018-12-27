const template = <p>Did this JSX change from app.js!?</p>;
const appRoot = document.getElementById('app');
const user = {
    name: 'Piero',
    age: 27,
    location: 'Kansas City'
};

const template2 = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

ReactDOM.render(template2, appRoot);