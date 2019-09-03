import React from 'react';
import {CountriesList} from './CountriesList';
import {ItemList} from './ItemList'
import loaderGif from './9wcA.gif';

export class CountriesListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isError: false,
            serverError: '',
            isLoading: true,
            countriesData: null,
        }
    }
componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(resolve => resolve.json())
        .then(resolve => this.setState({isLoading: false, countriesData: resolve}))
        .catch(err => this.setState({ isLoading: false, isError: true, serverError: err.message }))
}

    render() {
    return (
        <div>
            {this.state.isError && <h2>Ошибка!</h2>}
            {this.state.isLoading && <img src={loaderGif} alt="loading"/>}
            <CountriesList>
                <ItemList><h3>Страна</h3></ItemList>
                {!this.state.isLoading && this.state.countriesData.map((country, index) => (
                    <ItemList key={index} text={country.name} />))}
            </CountriesList>
            <CountriesList>
                <ItemList><h3>Валюта</h3></ItemList>
                {!this.state.isLoading && this.state.countriesData.map((country, index) => (
                    <ItemList key={index} text={country.currencies.map(curr => curr.name)} />))}
            </CountriesList>
            <CountriesList>
                <ItemList><h3>Язык</h3></ItemList>
                {!this.state.isLoading && this.state.countriesData.map((country, index) => (
                    <ItemList key={index} text={country.languages.map(lan => lan.name)} />))}
            </CountriesList>
        </div>
    )
}

}