import React from 'react';

import About from '../../components/About/About';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import ContactForm from '../../components/ContactForm/ContactForm';

import works from '../../works';

class HomePage extends React.Component {
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
                <About title='Tech_Programming'>
                    <p>
                        SPA template on the React JS
                        <br />
                        and also on HTML and CSS
                    </p>
                </About>

                <div className='portfolio'>
                    <div className='container'>
                        {works.map((work) => (
                            <PortfolioItem key={work.id} work={work} />
                        ))}
                    </div>
                </div>

                <div className='contacts'>
                    <div className='container'>
                        {this.state.closed ? (
                            <button className='button' onClick={() => this.openForm()}>
                                Contact me
                            </button>
                        ) : (
                            <div>
                                <hr/>
                                <ContactForm onSubmit={() => this.closeForm()}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
