import React, { useEffect, useRef } from 'react';

const Message = ({ message }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
    <div ref={ref} className={`message ${message?.tel === 'my' && 'owner'}`}>
      <div className="messageContent">
        <p>{message?.msg}</p>
      </div>
    </div>
  );
};

export default Message;
