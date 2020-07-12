import React from 'react';
import PropTypes from 'prop-types';
import Response from '../Response/Response';

const Message = ({ from, message, time }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{from}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">
        {message}
      </div>
    </li>
  );
};

Response.propTypes = {
  from: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
};

export default Message;
