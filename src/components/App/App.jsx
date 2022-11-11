import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import LoadMoreBtn from 'components/Load More Btn';

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
        {/* {searchQuery && <LoadMoreBtn></LoadMoreBtn>} */}
      </>
    );
  }
}
