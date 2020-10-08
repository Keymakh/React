import React, {Component} from "react";
import {List, ListItem, Divider } from '@material-ui/core';
import {chats} from "../../helpers/chatsData";

import './ChatList.scss'

export class ChatList extends Component {
  state = {
   chats,
  }

  render() {
    return (
      <div className='chatList'>
        <List>
          {this.state.chats.map((item,idx) => <ListItem className="chatListItem" key={idx}>{item}</ListItem>)}
        </List>
      </div>
    )
  }
}