const friends = [
  { name: "Mango", online: false },
  { name: "Ajax", online: true },
  { name: "Anna", online: true },
  { name: "Max", online: true },
];

const findFriendByName = function (allFriends, friendNameToFind) {
  for (const friend of allFriends) {
    if (friend.name === friendNameToFind) {
      const status = friend.online ? "online" : "offline";
      return `Found! Friend ${friendNameToFind} is ${status}`;
    }
  }
  return "Friend with such name is not found!";
};

console.log(findFriendByName(friends, "Max"));
