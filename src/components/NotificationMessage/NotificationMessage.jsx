import { Component } from 'react';
import css from 'components/NotificationMessage/NotificationMessage.module.css';

class NotificationMessage extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <p className={css.NotificationMessage}>{message}</p>
      </div>
    );
  }
}

export default NotificationMessage;
