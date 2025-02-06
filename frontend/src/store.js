import { create } from "zustand";
import axios from "axios";

const useCampaignStore = create((set) => ({
  campaigns: [],
  fetchCampaigns: async () => {
    const response = await axios.get("http://localhost:5000/api/metrics");
    set({ campaigns: response.data });
  },
  addCampaign: async (campaign) => {
    await axios.post("http://localhost:5000/api/metrics", campaign);
    set((state) => ({ campaigns: [...state.campaigns, campaign] }));
  },
}));

export default useCampaignStore;
