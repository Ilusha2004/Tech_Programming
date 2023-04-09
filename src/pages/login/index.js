import React from 'react';

import Login from '../../components/Login/Login'

class LoginPage extends React.Component {
    state = {
        closed: true,
    };

    openForm() {
        this.setState({
            closed: false,
        });
    }

    closeForm() {
        this.setState({
            closed: true,
        });
    }

    render() {
        return <Login closeForm='port'></Login>;
    }
}

export default LoginPage;