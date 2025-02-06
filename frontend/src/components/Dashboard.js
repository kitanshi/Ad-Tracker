import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch campaign data from the backend API
    fetch('http://localhost:5000/api/metrics')
      .then(response => response.json())
      .then(data => setCampaignData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value); // Update filter state
  };

  // Filtered data based on campaign name (case-insensitive)
  const filteredData = campaignData.filter(campaign =>
    campaign.campaign_name.toLowerCase().includes(filter.toLowerCase())
  );

  // Chart Data
  const chartData = {
    labels: filteredData.map(campaign => campaign.campaign_name), // X-axis: Campaign names
    datasets: [
      {
        label: 'Spend',
        data: filteredData.map(campaign => campaign.spend),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
      },
      {
        label: 'Conversions',
        data: filteredData.map(campaign => campaign.conversions),
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        fill: true,
      }
    ]
  };

  return (
    <div>
      <h2>Campaign Dashboard</h2>

      {/* Filter Input */}
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by campaign name"
        style={{ marginBottom: '20px', padding: '8px', fontSize: '14px' }}
      />

      {/* Data Table */}
      <h3>Campaign Metrics</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Campaign ID</th>
            <th>Campaign Name</th>
            <th>Clicks</th>
            <th>Impressions</th>
            <th>Spend</th>
            <th>Conversions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((campaign) => (
            <tr key={campaign.campaign_id}>
              <td>{campaign.date}</td>
              <td>{campaign.campaign_id}</td>
              <td>{campaign.campaign_name}</td>
              <td>{campaign.clicks}</td>
              <td>{campaign.impressions}</td>
              <td>{campaign.spend}</td>
              <td>{campaign.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Line Chart */}
      <h3>Spend vs Conversions</h3>
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default Dashboard;
