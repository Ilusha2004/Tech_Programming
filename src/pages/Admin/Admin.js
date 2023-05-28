import React from 'react';
import Admin from '../../components/Admin/Admin';

class AdminMain extends React.Component {
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
        return (
            <div>
                <Admin></Admin>
            </div>
        );
    }
}

export default AdminMain;
