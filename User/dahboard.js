document.addEventListener('DOMContentLoaded', () => {
  
    loadUserData();
  });
  
  async function loadUserData() {
    try{

     
      const userData = await fetchUserData();



      displayUserData(userData);
    }catch (error) {
      console.error('Error loading user data:', error);
    }
  }
  
  async function fetchUserData() {
    const apiUrl = 'https://mock-service-t88m.onrender.com/users';

    const response = await fetch(apiUrl);
  
    if (!response.ok) {

      throw new Error(`Status: ${response.status}`);
    }
  
    return response.json();
  }
  
  function displayUserData(userData) {

    const dashboardContent = document.createElement('div');
   
  
    if (Array.isArray(userData) && userData.length > 0) {
   
      userData.forEach((user) => {

        const userDiv = document.createElement('div');
        userDiv.innerHTML =
         `
        <h1>User Dashboard</h1>

        <img src="${user.profile_picture}" alt="Profile Picture" style="max-width: 100%;">

          <p>Welcome, ${user.name}!</p>

          <p>Email: ${user.email}</p>

          <p>Profession: ${user.profession}</p>

          <p>Hourly Rate: ${user.hourly_rate}</p>

          <p>Booked Status: ${user.isBooked ? 'Booked' : 'Available'}</p>
         
        
        `;
                  dashboardContent.appendChild(userDiv);
      });
    } else {
  
      dashboardContent.innerHTML = '<p>No user data available.</p>';
      
    }
  

    document.body.appendChild(dashboardContent);
}