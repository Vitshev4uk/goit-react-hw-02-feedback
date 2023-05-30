import { Component } from 'react';
import css from 'components/NotificationMessage/NotificationMessage.module.css';
import PropTypes from 'prop-types';

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

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default NotificationMessage;
