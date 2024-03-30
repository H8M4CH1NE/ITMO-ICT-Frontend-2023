const { Console } = require("console");

if (location.href == "http://192.168.0.110:5500/html/register.html") {
    document.getElementById("Register").className += " active"
    this.className += " active";
}
else if(location.href == "http://192.168.0.110:5500/html/login.html"){
    document.getElementById("Login").className += " active"
    this.className += " active";
}


var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")

function loginBTN() {
  x.style.left = "50px"
  y.style.left = "450px"
}
function registerBTN() {
  x.style.left = "-450px"
  y.style.left = "50px"
}


function searchAuthors(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const author = document.querySelectorAll('.editors-picks');

  const searchResults = [];

  author.forEach((author) => {
    const title = author.querySelector(".author").textContent.toLowerCase();

    if (title.includes(searchInput)) {
        console.log(title)
      searchResults.push({
        title: title,
      });
    }
  });

  displaySearchResults(searchResults, searchInput);
}

function displaySearchResults(results, searchInput) {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '';

  if (results.length === 0) {
    searchResultsContainer.innerHTML = 'No results found.';
    return;
  }

  results.forEach((result) => {
    const resultItem = document.createElement('div');
    const highlightedText = highlightSearchTerm(result.title, searchInput);
    resultItem.innerHTML = `<h3>${result.title}</h3><p>${highlightedText}</p>`;
    searchResultsContainer.appendChild(resultItem);
  });
}

function highlightSearchTerm(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<span class="highlighted">$1</span>');
}

async function login(event) {
    event.preventDefault();
  
    const email = document.getElementById('inputEmail1').value;
    const password = document.getElementById('inputPassword1').value;
  
    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful!', data);
  
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
  
        window.location.href = `profile.html?name=${data.name}&email=${data.email}`;
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  
  async function register(event) {
    event.preventDefault();
  
    const name = document.getElementById('inputName2').value;
    const email = document.getElementById('inputEmail2').value;
    const password = document.getElementById('inputPassword2').value;
    const repeatPassword = document.getElementById('inputPassword3').value;
  
    if (password !== repeatPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({ name, email, password, repeatPassword }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful!', data);
  
        const user = data.user;
  
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', user.name);
        localStorage.setItem('email', user.email);
  
        console.log('localStorage name:', localStorage.getItem('name'));
        console.log('localStorage email:', localStorage.getItem('email'));
  
        window.location.href = `profile.html?name=${user.name}&email=${user.email}`;
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
  
function changeProfile() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    const email = params.get('email');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    if (username !== null && email !== null) {
        nameInput.value = username;
        emailInput.value = email;
        localStorage.setItem('profileName', username);
        localStorage.setItem('profileEmail', email);
    }
};

document.addEventListener('DOMContentLoaded', updateProfileView);
document.addEventListener('DOMContentLoaded', function () {
    const storedName = localStorage.getItem('profileName');
    const storedEmail = localStorage.getItem('profileEmail');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    if (storedName !== null && storedEmail !== null) {
        nameInput.value = storedName;
        emailInput.value = storedEmail;
    }
});

function logout() {
    localStorage.removeItem('profileName');
    localStorage.removeItem('profileEmail');
    window.location.href = 'index.html';
}