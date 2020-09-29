import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

export class ChatList extends Component {
  state = {
    chats: ['Work', 'My dear Friend', 'Sister',]
  }

  render() {
    const {chats} = this.state;

    return (<div className="chat">{chats}</div>);
    /**const {chats} = this.state;

     return this.state.chats.map((item, index) =>
     <div> {...item} key={index} </div>
     )*/
  }
}