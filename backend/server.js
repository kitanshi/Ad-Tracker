const express = require('express');
const app = express();
const port = 5000;

// In-memory storage for campaigns (simulating a database)
let campaigns = [];

app.use(express.json()); // Middleware to parse JSON bodies

// GET /api/metrics - Fetch all campaign metrics
app.get('/api/metrics', (req, res) => {
  res.json(campaigns);
});

// POST /api/metrics - Store a new campaign entry
app.post('/api/metrics', (req, res) => {
  const { date, campaign_id, campaign_name, clicks, impressions, spend, conversions } = req.body;

  // Check if all required fields are provided
  if (!date || !campaign_id || !campaign_name || !clicks || !impressions || !spend || !conversions) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Create a new campaign object and add it to the in-memory array
  const newCampaign = { date, campaign_id, campaign_name, clicks, impressions, spend, conversions };
  campaigns.push(newCampaign);

  // Return the newly added campaign with a 201 status
  res.status(201).json(newCampaign);
});

// GET /api/metrics?campaign_id=12345 - Fetch filtered campaign data by campaign_id
app.get('/api/metrics', (req, res) => {
  const { campaign_id } = req.query;
  if (campaign_id) {
    const filteredCampaigns = campaigns.filter(campaign => campaign.campaign_id === campaign_id);
    return res.json(filteredCampaigns);
  }
  res.json(campaigns); // If no query parameter, return all campaigns
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
