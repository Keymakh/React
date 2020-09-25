import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component
{
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render()
  {
    return (
      <div>
        <p><b>{this.props.author}:</b> {this.props.text}</p>
      </div>
    );
  };
}
