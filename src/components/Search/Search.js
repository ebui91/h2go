import React, { Component } from 'react';
// import Card from 'material-ui/Card';
// import axios from 'axios';
import './Search.css'


export default class Search extends Component {
  componentDidMount() {
    const client = window.algoliasearch('RHAZKFEJVE', '4e8d2ff29787a405f9c8e5e4263263d6');
    const index = client.initIndex('WATER');
    window.autocomplete('#search-input', { hint: false }, [
      {
        source: window.autocomplete.sources.hits(index, { hitsPerPage: 8 }),
        displayKey: 'my_attribute',
        templates: {
          suggestion: function(suggestion) {
          return '<div class="name">' +
          suggestion._highlightResult.name.value + '</div>';
          }
        }
      }
    ]).on('autocomplete:selected', function(event, suggestion, dataset) {
      console.log('Selected Item: ', suggestion, dataset);
      console.log('Desc: ', suggestion);

      window.location.replace(`https://h2go-project.herokuapp.com//details/${suggestion.id}`);

    });
  }

  render(){
    return(
      <input id='search-input' type='text' onChange={ (e)=> this.props.handleSearch(e.target.value) }></input>
    )
  }

}
