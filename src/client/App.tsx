import * as React from 'react';
import QuestionsList from './QuestionsList';
import './QuestionsList.css';

export const App = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="questionCockpitStyle">
        <QuestionsList/>
        </div>
    </div>

);
