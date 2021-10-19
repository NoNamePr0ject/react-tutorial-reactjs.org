import React from 'react';
import ReactDOM from 'react-dom';

const User = {
  name: 'John',
  lastname: 'Nowak',
};

function showUser(user) {
  if (user) {
    return user.name + ' ' + user.lastname;
  } else return 'Nieznajomy';
}

const element = <h1> Wiataj {showUser(User)}</h1>;

ReactDOM.render(element, document.getElementById('root'));
