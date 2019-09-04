import React from 'react';
import {CountriesTable} from './CountriesTable';
import './styles.css';
import loaderGif from './9wcA.gif';
const TABLE_HEADERS = ['Страна', 'Язык', 'Валюта'];

export class CountriesTableContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            serverError: '',
            isLoading: true,
            countriesData: null,
        }
    }
componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(response => this.setState({isLoading: false, countriesData: response}))
        .catch(error => this.setState({ isLoading: false, error}))
}

    render() {
        if(this.state.error) {
            return <h2>{this.state.error.message}</h2>
        }
        if (this.state.isLoading) {
            return <img src={loaderGif} alt="loading"/>
        }
    return (
        <>
            <CountriesTable>
                <thead>
                <tr>
                    {TABLE_HEADERS.map(header => (<th key={header}>{header}</th>))}
                </tr>
                </thead>
                <tbody>
                {this.state.countriesData.map((country, index) => (
                    <tr key={index}>
                        <td>{country.name}</td>
                        <td>{country.languages.map(lan => lan.name)}</td>
                        <td>{country.currencies.map(curr => curr.name)}</td>
                    </tr>
                ))}
                </tbody>
            </CountriesTable>
        </> )
    }
}
