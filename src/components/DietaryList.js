import React, { useEffect, useState } from 'react';

const DietaryList = () => {
  const [dietaries, setDietaries] = useState([]);

  useEffect(() => {
    fetchDietaries();
  }, []);

  const fetchDietaries = async () => {
    try {
      const response = await fetch('http://localhost:9292/dietaries');
      if (response.ok) {
        const data = await response.json();
        setDietaries(data);
      } else {
        console.error('Failed to fetch dietaries');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Dietaries</h2>
      {dietaries.map((dietary) => (
        <div key={dietary.id}>
          <h3>{dietary.preference}</h3>
          {/* Render additional dietary details */}
        </div>
      ))}
    </div>
  );
};

export default DietaryList;
