import React, {Component} from 'react';

import {MessageList} from "./MessageList";
import {MessageForm} from "./MessageForm";

export class Messenger extends Component
{
  state = {
    messages: [{author: "Dev", text: "Hi"}, {author: "Bee", text: "JJJJ"}],
  };

  handleMessageSend = (message) => {
    this.setState({messages: this.state.messages.concat([message.author, message.text])});
  };

  componentDidUpdate(){
    if (this.state.messages.length % 2 === 1) {
      setTimeout(() =>
          this.setState(
            { messages: [ ...this.state.messages, 'Я робот!' ] }),
        1000);
    }
  }

  render()
  {
    const {messages} = this.state;

    return (
      <>
        <MessageList items={messages}/>
        <MessageForm onSend={this.handleMessageSend}/>
      </>
    );
  }
}
