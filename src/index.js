import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from 'styled-components'
import theme from './components/theme/index'

export const BASE_URL = 'https://swapi.dev/api/people'



ReactDOM.render(
    <ThemeProvider theme = {theme}>
        <App />
    </ThemeProvider>, 

    document.getElementById('root')
    
    );
