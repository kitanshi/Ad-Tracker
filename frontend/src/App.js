import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard'; // Make sure the path is correct
import CampaignForm from './components/CampaignForm'; // Make sure the path is correct

const App = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/metrics')
      .then((response) => response.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <div>
      <h1>Ad Tracking Dashboard</h1>
      <CampaignForm setCampaigns={setCampaigns} />
      <Dashboard campaigns={campaigns} />
    </div>
  );
};

export default App;
