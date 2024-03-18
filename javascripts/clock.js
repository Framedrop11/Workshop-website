function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display the time immediately
  updateTime();
  