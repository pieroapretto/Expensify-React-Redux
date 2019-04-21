// Higher Order Components (HOC) - A component that renders another component
// The goal is to reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Big Facts Page</h1>
        <p>Here is the creamy dets:</p>
        <h3>{props.info}</h3>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private ifno. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

// requireAuthentication
class requireAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false
      };
    };

    handleLogin = () => {
        this.setState(() => ({ isAuthenticated:true}));
    };

    render() {
    return  (
        <div>
            {this.state.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <div>
                    <p>Please login to view big facts</p>
                    <button onClick={handleLogin}>Login in to view big facts</button>
                </div>
            )}
        </div>
    );
    }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo info="Brett Ward blew a 32 point lead in the fantasy championship game"/>, document.getElementById('app'));
