import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [groupData, setGroupData] = useState([]);
  const [hostelData, setHostelData] = useState([]);
  const [allocation, setAllocation] = useState([]);
  const [error, setError] = useState('');

  const handleFileUpload = (e, setData) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
      error: (error) => {
        setError('Error parsing CSV file: ' + error.message);
      }
    });
  };

  const handleAllocateRooms = async () => {
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/allocate', {
        groupData,
        hostelData
      });
      setAllocation(response.data);
    } catch (error) {
      setError('Error allocating rooms: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Room Allocation</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Upload Group Information CSV</h2>
          <input type="file" className="form-control" accept=".csv" onChange={(e) => handleFileUpload(e, setGroupData)} />
        </div>
        <div className="col-md-6">
          <h2>Upload Hostel Information CSV</h2>
          <input type="file" className="form-control" accept=".csv" onChange={(e) => handleFileUpload(e, setHostelData)} />
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleAllocateRooms}>Allocate Rooms</button>
      </div>
      {error && (
        <div className="alert alert-danger mt-4">
          {error}
        </div>
      )}
      {allocation.length > 0 && (
        <div className="mt-4">
          <h2>Allocation Results</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Hostel Name</th>
                <th>Room Number</th>
                <th>Members Allocated</th>
              </tr>
            </thead>
            <tbody>
              {allocation.map((alloc, index) => (
                <tr key={index}>
                  <td>{alloc.GroupID}</td>
                  <td>{alloc.HostelName}</td>
                  <td>{alloc.RoomNumber}</td>
                  <td>{alloc.MembersAllocated}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-4">
            <CSVLink className="btn btn-success" data={allocation} filename={"room-allocation.csv"}>
              Download Allocation
            </CSVLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
