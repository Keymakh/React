import React, {Component} from 'react';

import {Switch, Route, Link} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

import {MessageList} from "../MessageList";
import {MessageForm} from "../MessageForm";
import {ChatList} from "../ChatList";
import {ChatForm} from "../ChatForm";

import {chats} from '../../helpers/chatsData';
import './Messenger.css';

export class Messenger extends Component
{


  //handleChatAdd = (title) => {
    //chats.titles = this.messages.concat([title]);
//};

  /**componentDidUpdate(){
    if(this.messages.length){
      const {author} = this.messages[this.messages.length - 1];
      if( author !== 'Bot' ){
        setTimeout(() => {
          this.handleMessageSend({author: 'Bot', text: `Hi ${author}! Это бот...`});
        }, 2000);
      }
    }
  }*/

  render()
  {
    const {chats, messages, handleMessageSend} = this.props;

    const chatList = chats.map((item) => (
      <ListItem key={item.id}>
        <Link to={`/chats/${item.id}`}><ListItemText primary={item.title}/></Link>
      </ListItem>
    ));


    return(
      <>
        <div>

          <List>
            {chatList}
            <ListItem>
              <Link to="/"><ListItemText primary="Главная" /></Link>
            </ListItem>
            <ListItem>
              <Link to="/about"><ListItemText primary="О нас" /></Link>
            </ListItem>
            <ListItem>
              <Link to="/pagenotfount"><ListItemText primary="Страница с ошибкой" /></Link>
            </ListItem>
          </List>

        </div>


        <div className="messenger">
          <div className="messages-list ">
            {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
          </div>
          {messages && <MessageForm onSend={handleMessageSend} />}
        </div>
      </>
    );
  }
}
