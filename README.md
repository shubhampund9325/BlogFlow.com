BlogFlow.com

BlogFlow.com is a blogging platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication for secure access. It is designed to provide users with an intuitive interface to create, read, update, and delete blog posts while ensuring user data privacy and authentication security.

Features
	•	User Authentication: Secure login and signup using JWT (JSON Web Tokens).
	•	Create Blogs: Easily compose and publish blog posts with an editor.
	•	Read Blogs: Browse and read blog posts from various users.
	•	Edit Blogs: Edit your existing posts as required.
	•	Delete Blogs: Remove posts you no longer want to keep.
	•	Responsive Design: Accessible on devices of all sizes.

Tech Stack
	•	Frontend: React.js with CSS for styling
	•	Backend: Node.js and Express.js
	•	Database: MongoDB for storing blog and user data
	•	Authentication: JWT (JSON Web Tokens) for secure access

Installation

Prerequisites
	•	Node.js installed on your system
	•	MongoDB installed locally or access to MongoDB Atlas

Steps
	1.	Clone the repository:

git clone https://github.com/shubhampund9325/BlogFlow.com.git  


	2.	Navigate to the project directory:

cd BlogFlow.com  


	3.	Install dependencies for both the frontend and backend:
	•	Backend:

cd server  
npm install  


	•	Frontend:

cd client  
npm install  


	4.	Set up environment variables:
Create a .env file in the server directory and configure the following:

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
PORT=5000  


	5.	Run the application:
	•	Backend:

cd server  
npm start  


	•	Frontend:

cd client  
npm start  


	6.	Open your browser and navigate to http://localhost:3000 to access the application.

Project Structure

BlogFlow.com/  
├── client/       # Frontend (React.js)  
├── server/       # Backend (Node.js, Express.js)  
├── .env          # Environment configuration (not included in GitHub)  
└── README.md     # Project documentation  

Future Enhancements
	•	Add categories and tags for blogs
	•	Implement a rich-text editor
	•	Add user profiles and dashboards
	•	Introduce commenting functionality
	•	Optimize performance for larger-scale deployments



Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests for review.

Contact

For any queries, reach out to:
Shubham
GitHub: shubhampund9325


