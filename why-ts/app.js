// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {



/**
 * 
 * @typedef {object} Address
 * @property {string} strict
 * @property {string} city
 */

/**
 * 
 * @typedef {object} Use
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

  /**
 * 
 * @returns {Promise<Use>}
 */
const fetchurl =() => axios.get(url)



fetchurl()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email
      address.innerText = user.address.street
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
