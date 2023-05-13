import React from 'react';

import About from '../../components/About/About';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import ContactForm from '../../components/ContactForm/ContactForm';
import works from '../../works';
import Finder from '../../components/Finder/Finder';
import Adress from '../../Adress';
import Items from '../../components/Items/Items';

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

                <div>
                    <Finder></Finder>
                </div>

                <div className='back'>
                    <div className='portfolio'>
                        <div className='container'>
                            {
                            Adress.map((Adress) =>
                            (<Items key={Adress.id} Adres={Adress}/>
                            ))}
                        </div>
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
