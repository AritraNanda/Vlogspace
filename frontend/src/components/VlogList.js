import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VlogList() {
  const [vlogs, setVlogs] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/vlogs`).then(res => {
      setVlogs(res.data);
    });
  }, []);

  return (
    <div>
      <h2>All Vlogs</h2>
      {vlogs.length === 0 ? (
        <p>No vlogs found.</p>
      ) : (
        <ul>
          {vlogs.map(vlog => (
            <li key={vlog._id}>
              <strong>{vlog.title}</strong> by {vlog.author} <br />
              Feature: {vlog.feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VlogList;
