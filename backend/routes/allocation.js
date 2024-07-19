const express = require('express');
const router = express.Router();

router.post('/allocate', (req, res) => {
  const groupData = req.body.groupData;
  const hostelData = req.body.hostelData;

  const allocation = allocateRooms(groupData, hostelData);
  res.json(allocation);
});

function allocateRooms(groups, hostels) {
  const allocation = [];

  // Sort groups by size (descending)
  groups.sort((a, b) => b.Members - a.Members);

  groups.forEach(group => {
    const { GroupID, Members, Gender } = group;
    const groupSize = parseInt(Members, 10);

    for (let i = 0; i < hostels.length; i++) {
      const { HostelName, RoomNumber, Capacity, Gender: RoomGender } = hostels[i];
      const roomCapacity = parseInt(Capacity, 10);

      if (groupSize <= roomCapacity && Gender === RoomGender) {
        allocation.push({
          GroupID,
          HostelName,
          RoomNumber,
          MembersAllocated: groupSize
        });

        // Remove allocated room from the hostel list
        hostels.splice(i, 1);
        break;
      }
    }
  });

  return allocation;
}

module.exports = router;
