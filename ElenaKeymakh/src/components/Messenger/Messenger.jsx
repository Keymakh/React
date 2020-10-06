import React, {Component} from 'react';
import {nanoid} from 'nanoid';
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
  state = {
    chats,
  };

  handleMessageSend = (message) => {
    const {chats} = this.state;
    const {match} = this.props;

    const chat = chats[match.params.id];
    message.id = nanoid();
    chat.messages = this.messages.concat([message]);

    console.log(message, chat);

    chats[match.params.id] = chat;

    this.setState({
      chats,
    });
  };

  handleChatAdd = (title) => {
    chats.titles = this.messages.concat([title]);
};

  componentDidUpdate(){
    if(this.messages.length){
      const {author} = this.messages[this.messages.length - 1];
      if( author !== 'Bot' ){
        setTimeout(() => {
          this.handleMessageSend({author: 'Bot', text: `Hi ${author}! Это бот...`});
        }, 2000);
      }
    }
  }

  get messages(){
    const {chats} = this.state;
    const {match} = this.props;

    let messages = null;

    if(match && chats[match.params.id]){
      messages = chats[match.params.id].messages;
    }
    return messages;
  }


  render()
  {
    console.log(this.state);
    const {chats} = this.state;
    const messages = this.messages;

    const chatList = chats.map((item) => (
      <ListItem key={item.id}>
        <Link to={`/chats/${item.id}`}><ListItemText primary={item.title}/></Link>
      </ListItem>
    ));

    //console.log(this.props.match);

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
              <Link to="/profile"><ListItemText primary="Мой профиль" /></Link>
            </ListItem>
            <ListItem>
              <Link to="/pagenotfount"><ListItemText primary="Страница с ошибкой" /></Link>
            </ListItem>
          </List>
          <ChatForm {title}/>
        </div>

        {/* <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch> */}
        <div className="messenger">
          <div className="messages-list ">
            {messages ? <MessageList items={messages} /> : <div>Выберите чат слева</div>}
          </div>
          {messages && <MessageForm onSend={this.handleMessageSend} />}
        </div>
      </>
    );
  }
}
