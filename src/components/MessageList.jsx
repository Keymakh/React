import React, {Component} from 'react';
import {Message} from './Message';

export class MessageList extends Component {
  constructor(props) {
    super(props);
    this.items = props.items;
  }

  render() {
    return (
      <>
        {
          this.items.map((item1, item2,index) =>
            <Message author={item1} text={item2} key={index} />
            )
        }
      </>
    );
  };
}
