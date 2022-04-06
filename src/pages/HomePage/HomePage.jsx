import React, { Component } from 'react';
// Utilities
import { v4 as uuidv4 } from 'uuid';
// Components
import Card from '../../components/Card/CardContainer';
import SearchForm from '../../components/SearchForm/SearchForm';
import Search from '../../components/Search/search';
// Styles
import { gallery } from './HomePage.module.css';

class HomePage extends Component {
  componentDidMount() {
    const { addCities } = this.props;
    const previousCities = JSON.parse(localStorage.getItem('cities'));

    if (!previousCities) return;

    addCities(previousCities);
  }

  componentDidUpdate(prevProps) {
    const { cities, query, onLoad } = this.props;

    localStorage.setItem('cities', JSON.stringify(cities));

    if (prevProps.query === query) return;

    onLoad(query);
  }

  render() {
    const { cities, onSubmit } = this.props;
    return (
      <>
        <div>
          <div><Search/></div>
        <div>
        <SearchForm onSubmit={onSubmit} />
        <ul className={gallery}>
          {!!cities && cities.map(city => <Card key={uuidv4()} city={city} />)}
        </ul>
        </div>
        </div>
      </>
    );
  }
}

export default HomePage;
