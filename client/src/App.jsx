// App.jsx
import React from 'react';
import axios from 'axios';

function App() {
  const handleClick = async () => {
    try {
      const respond = await axios.post('http://172.25.33.194:3000/log');
      console.log(respond);
      alert(`Requst Successful! ${respond.data}`);
    } catch (error) {
      alert('Request failed:' + error.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
