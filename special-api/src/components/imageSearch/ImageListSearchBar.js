import React from 'react';

class ImageListSearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = event =>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <input type="text" placeholder="Image Search..."
            value={this.state.term}
            onChange={e => this.setState({term: e.target.value})}
            />
        </form>
      </div>
    )
  }
}

export default ImageListSearchBar