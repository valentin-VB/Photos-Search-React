import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handelFormSubmit = searchTerm => {
    this.setState({ searchQuery: searchTerm });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit}></Searchbar>
        <ImageGallery searchQuery={searchQuery}></ImageGallery>
      </>
    );
  }
}
