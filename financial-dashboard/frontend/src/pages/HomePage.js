import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InstrumentCard from '../components/InstrumentCard';

const HomePage = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    axios.get('/api/instruments').then((response) => {
      setInstruments(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Financial Instruments</h1>
      {instruments.map((instrument) => (
        <InstrumentCard key={instrument.id} instrument={instrument} />
      ))}
    </div>
  );
};

export default HomePage;
