import React, {Component} from 'react';
import {nanoid} from 'nanoid';

import {MessageList} from "../MessageList";
import {MessageForm} from "../MessageForm";
import {ChatList} from "../ChatList";

import './Messenger.css';
import {Message} from "../Message";


export class Messenger extends Component
{
  state = {
    messages: [
      {author: "Dev", text: "Hi", id: nanoid()},
      {author: "Bee", text: "JJJJ", id: nanoid()},
    ]
  };

  handleMessageSend = (message) => {
    message.id = nanoid();
    this.setState({messages: this.state.messages.concat([message])});
  };

  componentDidUpdate(){
    const {author} = this.state.messages[this.state.messages.length - 1];
    if( author !== 'Bot' ){
      setTimeout(() => {
        this.handleMessageSend({author: 'Bot', text: `Hi ${author}! Это бот...`});
      }, 2000);
    }
  }

  render()
  {
    const {messages} = this.state;

    return (
      <div className="layout">
        <div className="chat-list">
          <ChatList  />
        </div>
      <div className="messenger">
        <div className="messages-list">
          <MessageList items={messages}/>
        </div>
        <MessageForm onSend={this.handleMessageSend}/>
      </div>
      </div>
    );
  }
}
