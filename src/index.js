// const element = document.createElement('h1')
// element.innerText = 'Hola React'

// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstname : 'Fede',
  lastname : 'Miguez',
  avatar : 'https://img2.freepng.es/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
}

function getName(user){
  return `${user.firstname} ${user.lastname}`
}

function getGreeting(user){
  if(user){
    return <h1> Hola {getName(user)} </h1>
  }
  return <h1> Hola Extrano </h1>
}

// const element = <div> {getGreeting(user)} </div>
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
)
const container = document.getElementById('root')




ReactDOM.render(element,container)