const day = new Date();
const options1 = { weekday: 'long' };
//const currentDay = now.toLocalDateString('en-GB', options);
const currentDay = now.toLocaleDateString('en-GB', options);
document.getElementById("day").innerText = currentDay;



//const now = new Date();
//const options2 = { day: 'numeric' };
//const currentDay = now.toLocalDateString('en-GB', options);
//const currentDate = now.toLocaleDateString('en-GB', options);
//document.getElementById("date").innerText = currentDate;










//const now = new Date(); // Get the current date
//const options = { weekday: 'long' }; // Specify that we only want the full name of the day
//const currentDay = now.toLocaleDateString('en-GB', options); // Extract only the day (e.g., "Monday")

//document.getElementById('day').innerText = currentDay; // Update the HTML element with the day