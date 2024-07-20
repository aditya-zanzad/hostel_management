Digitalization of the Hospitality Process
Objective
Develop a web application using the MERN stack to facilitate the digitalization of the hospitality process for group accommodation. The application should allow users to upload two CSV files to efficiently allocate rooms in hostels while ensuring group members with the same ID stay together and adhere to hostel capacities and gender-specific accommodations.
Technical Details
CSV File 1 (Group Information):
•	Contains information about groups with a common ID.
•	Each row represents a group, specifying the group ID, the number of members, and the gender (boys or girls).
CSV File 2 (Hostel Information):
•	Contains information about the hostels and their room capacities.
•	Each row represents a hostel room, specifying the hostel name, room number, room capacity, and gender accommodation (boys or girls).
Frontend Requirements
•	User-friendly interface to upload two CSV files.
•	Display of allocated rooms indicating which group members are in which room.
•	Downloadable CSV file with the allocation details.
Backend Requirements
•	Algorithm to allocate rooms based on the following criteria:
o	Members of the same group (same ID) should stay in the same room as much as possible.
o	Boys and girls should stay in their respective hostels.
o	Room capacity should not be exceeded.
Implementation Steps
1.	Setup the MERN Stack:
o	MongoDB: For storing group and hostel information.
o	Express: Backend framework to handle API requests.
o	React: Frontend library for building the user interface.
o	Node.js: Backend runtime environment.
2.	Create React Components:
o	File Upload Component: To upload the CSV files.
o	Display Component: To show the allocated rooms.
o	Download Component: To download the allocation details as a CSV file.
3.	Backend Logic:
o	Upload and Parse CSV Files:
	Parse the uploaded CSV files and store the data in MongoDB.
o	Room Allocation Algorithm:
	Allocate rooms based on group size, gender, and hostel capacities.
o	API Endpoints:
	Create API endpoints to handle file uploads, trigger room allocation, and fetch allocation results.
4.	Room Allocation Algorithm:
o	Loop through each group from the parsed data.
o	Check hostel rooms for availability based on group size and gender.
o	Allocate rooms ensuring group members stay together as much as possible.
o	Update the hostel room capacity accordingly.
Example Output
plaintext
Copy code
Group ID, Hostel Name, Room Number, Members Allocated
101, Boys Hostel A, 101, 3
102, Girls Hostel B, 202, 4
103, Boys Hostel A, 102, 2
104, Girls Hostel B, 202, 5
Submission Requirements
•	Source code on a public GitHub repository.
•	Brief documentation explaining the logic and usage.
•	Necessary instructions to run the application.
Instructions to Run the Application
1.	Clone the Repository:
bash
Copy code
git clone <repository-url>
cd <repository-folder>
2.	Install Dependencies:
bash
Copy code
npm install
cd client
npm install
3.	Run the Application:
bash
Copy code
cd ..
npm run dev

Conclusion
This project aims to simplify and digitalize the room allocation process in hostels, ensuring a seamless experience for users by leveraging the power of the MERN stack.

