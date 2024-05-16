import React, { useState, useEffect } from 'react';

const UpdateTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      document.title = 'React App';
    };
  }, [count]);

  return (
    <div>
      <h1>Update Document Title</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Current Count: {count}</p>
    </div>
  );
};

export default UpdateTitle;
