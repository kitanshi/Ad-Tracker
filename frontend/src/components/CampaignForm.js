import React, { useState } from 'react';

const CampaignForm = ({ setCampaigns }) => {
  const [formData, setFormData] = useState({
    date: '',
    campaign_id: '',
    campaign_name: '',
    clicks: '',
    impressions: '',
    spend: '',
    conversions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setCampaigns((prevCampaigns) => [...prevCampaigns, data]);
          setFormData({
            date: '',
            campaign_id: '',
            campaign_name: '',
            clicks: '',
            impressions: '',
            spend: '',
            conversions: '',
          });
        }
      })
      .catch((error) => {
        console.error('Error adding campaign:', error);
      });
  };

  return (
    <div>
      <h2>Add New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="campaign_id"
          placeholder="Campaign ID"
          value={formData.campaign_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="campaign_name"
          placeholder="Campaign Name"
          value={formData.campaign_name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="clicks"
          placeholder="Clicks"
          value={formData.clicks}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="impressions"
          placeholder="Impressions"
          value={formData.impressions}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="spend"
          placeholder="Spend"
          value={formData.spend}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="conversions"
          placeholder="Conversions"
          value={formData.conversions}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Campaign</button>
      </form>
    </div>
  );
};

export default CampaignForm;
