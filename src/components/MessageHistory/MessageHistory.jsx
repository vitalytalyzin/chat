import React from 'react';
import Message from '../Message/Message';
import Response from '../Response/Response';
import Typing from '../Typing/Typing';

const MessageHistory = ({ list = [] }) => {
  if (list.length === 0) {
    return null;
  }

  return (
    <ul>
      {list.map(item => {
        const { id, type, time, text, from } = item;

        switch (type) {
          case 'response':
            return <Response
              key={id}
              message={text}
              from={from.name}
              time={time}
            />;
          case 'message':
            return <Message
              key={id}
              message={text}
              from={from.name}
              time={time}
            />;
          case 'typing':
            return <Typing
              key={id}
            />;
          default:
            return null;
        }
      })}
    </ul>
  );
};

export default MessageHistory;
