// sends HTTP request, sending data back, saving data in local storage

const API_URL = 'http://localhost:5000/api/users/'

// Register user
const register = async (userData) => {
   const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         name: userData.name,
         email: userData.email,
         password: userData.pw,
       }),
   });

   if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
   }

   return response.data
}

// Login user
const login = async (userData) => {
   const response = await fetch(API_URL + "login", {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         email: userData.email,
         password: userData.pw, 
       }),
   });

   if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
   }

   return response.data
}

// Logout user
// STANDARD: use server to set HTTP-only cookie --Did not do this in the course so will need  to learn later
const logout = () => {
   localStorage.removeItem('user')
}

const authService = {
   register,
   logout,
   login
}

export default authService