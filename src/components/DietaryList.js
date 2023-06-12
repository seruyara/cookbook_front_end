import React, { useEffect, useState } from 'react';

const DietaryList = () => {
  const [dietaries, setDietaries] = useState([]);
  const [newDietary, setNewDietary] = useState('');

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

  const handleInputChange = (e) => {
    setNewDietary(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9292/dietaries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preference: newDietary }),
      });
      if (response.ok) {
        // Refresh the dietaries list
        fetchDietaries();
        setNewDietary('');
      } else {
        console.error('Failed to create dietary');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Dietaries</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newDietary} onChange={handleInputChange} />
        <button type="submit">Add Dietary</button>
      </form>
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
