import React from 'react';
import Adress from '../../Adress';

import './index.css';

class ProjectPage extends React.Component {
    state = {
        project: null,
        error: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        setTimeout(() => {
            const project = Adress.find(Adres => Adres.id === id);

            this.setState({
                project: project,
                error: !project
            });
        }, 1000);
    }

    render() {
        const { project, error } = this.state;

        if (error)
            return <div>Что-то пошло не так...</div>;

        if (!project) return <div>Loading...</div>;

        return (
            <p>hi</p>
        );
    }
}

export default ProjectPage;
