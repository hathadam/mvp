import React from 'react';
import axios from 'axios';
import ImageListSearchBar from './ImageListSearchBar.js';
import ImageList from './ImageList.js';
import {TOKEN} from '../../api-key/config';

class ImageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.onImageSearchSubmit = this.onImageSearchSubmit.bind(this);
  }

  onImageSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${TOKEN}`
      }
    })
    .then(res => {
      this.setState({images: res.data.results});

    })
    .catch(err => console.log("error from Axios GET:: ", err));
  }

  render() {
    return (
        <div className="ui container">
          <ImageListSearchBar onSubmit={this.onImageSearchSubmit}/>
          <ImageList images={this.state.images}/>
        </div>
    );
  }
}

export default ImageApp;