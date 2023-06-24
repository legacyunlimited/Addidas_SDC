import React, { useState } from 'react';

const AccordionButton = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {title} 
      </button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default AccordionButton;