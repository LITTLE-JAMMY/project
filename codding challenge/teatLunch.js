function treatLunch() {
const friend = ["Lammy", "Sammy", "Tammy", "PPK", "N0R!"];

const totalFriend = friend.length;
const random = Math.floor(Math.random() * totalFriend ) ; //0 - 0.9
const treat = friend[random];
return `${treat} will buy lunch for all of us.` 
}