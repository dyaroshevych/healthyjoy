import React from 'react';

import './Button.scss'

const Button = ({ children, onClick }) => <button className='Button' type='submit' onClick={onClick}>{children}</button>

export default Button;