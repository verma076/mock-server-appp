
async function submitForm(event) {

    event.preventDefault();
  
  
    const formData = new FormData(event.target);

    const data = {

      name: formData.get('name'),

      profile_picture: formData.get('profilePicture').name,

      email: formData.get('email'),

      password: formData.get('password'),

      profession: formData.get('profession'),

      skills: formData.get('skills').split(',').map(skill => skill.trim()),

      hourly_rate: parseInt(formData.get('hourlyRate')),

      isBooked: formData.get('isBooked') === 'true',
    };
  
    try {
  
      await postDataToServer(data);
  

      alert('Successfully registered.');
  
    
      window.location.href = './dashboard.html';
    } catch (error) {
      console.error('Error:', error);
   
      alert('Failed to register. Please try again.');
    }
  }
  
  async function postDataToServer(data) {
    const apiUrl = 'https://mock-service-t88m.onrender.com/users';
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },


      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
  
    return response.json();
  }
  
