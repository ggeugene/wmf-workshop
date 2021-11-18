import React from 'react';
import { render } from 'react-dom';
import Frame from './modules/Frame';
import client from './shared/client';
import theme from './shared/theme';

render(<Frame client={client} theme={theme} />, document.getElementById('root'));
