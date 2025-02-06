# Ad Tracking Dashboard
# Overview
This project is a full-stack application for tracking ad campaign metrics. It allows users to view campaign data, filter the data by campaign name, and visualize the relationship between spend and conversions using charts. The app consists of a Node.js backend for serving API data and a React frontend for displaying the data in a user-friendly dashboard.

# Features:
Display ad campaign data in a table.
Filter campaigns by name.
Visualize spend vs. conversions using a line chart (Chart.js).
Add new campaign metrics through a form submission.
# Tech Stack:
Frontend: React.js, Chart.js
Backend: Node.js, Express.js
State Management: React hooks
Data Storage: In-memory (mock data storage, no database)
Table of Contents
Installation
Usage
API Endpoints
Frontend Features
State Management
Bonus Features
Deployment
Evaluation Criteria
Contributing
License
Installation
# Follow the steps below to set up and run the application locally.

1. Clone the repository:
bash
Copy
Edit
git clone https://github.com/yourusername/ad-tracking-dashboard.git
cd ad-tracking-dashboard
2. Install dependencies for both backend and frontend:
Backend (Node.js + Express)
bash
Copy
Edit
cd backend
npm install
Frontend (React)
bash
Copy
Edit
cd frontend
npm install
3. Start the application:
Start Backend Server:
bash
Copy
Edit
cd backend
npm start
The backend will run on http://localhost:5000.
Start Frontend Server:
bash
Copy
Edit
cd frontend
npm start
The frontend will run on http://localhost:3000.
Now open your browser and navigate to http://localhost:3000 to see the dashboard.

Usage
The Dashboard will display the campaign data in a table format.
You can filter the campaigns by typing the campaign name in the filter input box.
The line chart will display the spend and conversions for the filtered campaigns.
Use the form to add new campaigns, which will update the table and chart dynamically.
API Endpoints
Here are the API endpoints provided by the backend:

1. GET /api/metrics
Fetch all campaign metrics.

Response:

json
Copy
Edit
[
  {
    "date": "2025-02-01",
    "campaign_id": "12345",
    "campaign_name": "Test Campaign",
    "clicks": 150,
    "impressions": 5000,
    "spend": 75.50,
    "conversions": 10
  },
  // More campaigns...
]
2. POST /api/metrics
Store a new campaign entry.

Request body:

json
Copy
Edit
{
  "date": "2025-02-04",
  "campaign_id": "67891",
  "campaign_name": "New Campaign",
  "clicks": 100,
  "impressions": 4000,
  "spend": 50.00,
  "conversions": 7
}
Response:

json
Copy
Edit
{
  "message": "Campaign added successfully"
}
3. GET /api/metrics?campaign_id=12345
Fetch campaign data by campaign ID.

Response:

json
Copy
Edit
{
  "date": "2025-02-01",
  "campaign_id": "12345",
  "campaign_name": "Test Campaign",
  "clicks": 150,
  "impressions": 5000,
  "spend": 75.50,
  "conversions": 10
}
Frontend Features
Data Table: Displays campaign metrics such as clicks, impressions, spend, and conversions.
Filtering: Filters campaigns based on campaign name. The filtering is done dynamically in the table and chart.
Data Visualization: Uses Chart.js to visualize spend vs. conversions for the campaigns.
Form Submission: Allows users to add new campaign data, which updates both the table and chart in real time.
State Management
The state management is handled using React's useState and useEffect hooks. The data is fetched from the backend API and stored in the frontend state. The filtering input updates the table and chart data dynamically based on the user's input.

React Hooks:
useState: Manages local state for the campaigns and filter.
useEffect: Fetches campaign data from the backend when the component mounts.
Bonus Features
Local Storage: Data persistence between page refreshes can be achieved by saving the campaign data to localStorage. This feature is optional and can be added for additional points.
![image](https://github.com/user-attachments/assets/f8e6cc16-4d0c-4a81-a6ab-f130d3e9cbfd)

![image](https://github.com/user-attachments/assets/518bdb21-73db-45e4-9c97-c0bd4dc45535)


License
This project is licensed under the MIT License.

