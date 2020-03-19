import React, {PureComponent} from 'react';
import Table from '../components/table';
import {connect} from 'react-redux';

import {fetchCountriesRequested} from '../actions/country'

import keys from 'lodash/keys';
import head from 'lodash/head';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCountries();
    }

    render() {
        const {countries, loading} = this.props;
        return (
            <div>
                <h3>Tabla de datos </h3>
                <hr/>
                {console.log(countries)}
                <Table {...{data: countries, columns: keys(head(countries))}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {countries, loading} = state.country;
    return {
        countries,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCountries: () => dispatch(fetchCountriesRequested())
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
