import React from 'react';

import About from '../../components/About/About';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import ContactForm from '../../components/ContactForm/ContactForm';
import works from '../../works';
import Finder from '../../components/Finder/Finder';
import Adress from '../../Adress';
import Items from '../../components/Items/Items';
import FinderM from '../../components/FinderMain/FinderMain';

class FinderMain extends React.Component {
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
                <FinderM></FinderM>
            </div>
        );
    }
}

export default FinderMain;
