import React, { useState } from 'react';
import './App.css'; // Ensure your CSS file is properly linked

const App = () => {
  const [country, setCountry] = useState(null);
  const [viewedCountries, setViewedCountries] = useState([]);
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error('Failed to fetch countries');

      const countries = await response.json();
      let randomCountry;

      do {
        const randomIndex = Math.floor(Math.random() * countries.length);
        randomCountry = countries[randomIndex];
      } while (banList.includes(`Language: ${Object.values(randomCountry.languages)[0] || 'N/A'}`) ||
               banList.includes(`Region: ${randomCountry.region}`) ||
               banList.includes(`Timezone: ${randomCountry.timezones.join(', ') || 'N/A'}`));

      // Extract country attributes
      const attributes = [
        `Language: ${Object.values(randomCountry.languages)[0] || 'N/A'}`,
        `Region: ${randomCountry.region}`,
        `Timezone: ${randomCountry.timezones.join(', ') || 'N/A'}`,
      ];

      setCountry({
        title: randomCountry.name.common,
        attributes,
        flag: randomCountry.flags.png || 'https://via.placeholder.com/200', // Fallback image if flag is missing
      });

      setViewedCountries((prev) => [...prev, randomCountry.name.common]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBan = (attribute) => {
    // Update the ban list
    setBanList((prev) => [...new Set([...prev, attribute])]); // Use Set to avoid duplicates
  };

  return (
    <div>
      <h1>Discover a Country!</h1>
      <button onClick={fetchRandomCountry}>Get Random Country</button>
      {loading && <p className="loading">Loading...</p>}
      {country && (
        <div>
          <h2>{country.title}</h2>
          <img src={country.flag} alt={`Flag of ${country.title}`} style={{ width: '200px', display: 'block', margin: '10px 0' }} />
          <p>Attributes:</p>
          <ul>
            {country.attributes
              .filter(attr => !banList.includes(attr)) // Filter out banned attributes
              .map((attr, index) => (
                <li key={index}>
                  {attr} <button onClick={() => handleBan(attr)}>Ban</button>
                </li>
              ))}
          </ul>
        </div>
      )}
      <h3>Viewed Countries:</h3>
      <ul>
        {viewedCountries.map((viewedCountry, index) => (
          <li key={index}>{viewedCountry}</li>
        ))}
      </ul>
      <h3>Ban List:</h3>
      <ul>
        {banList.map((bannedAttr, index) => (
          <li key={index}>
            {bannedAttr} 
            <button onClick={() => setBanList(banList.filter(attr => attr !== bannedAttr))}>Remove</button> {/* Remove from ban list */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
