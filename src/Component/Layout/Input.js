import * as React from 'react';

function Input({ placeholder, type }) {
  return (
    <input class="inputCss" placeholder={placeholder} type={type} />
  );
}

export default Input;
