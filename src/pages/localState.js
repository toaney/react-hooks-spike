import React, { useState } from 'react';

const LocalStateExample = () => {
    // set up local state with useState hook
    const [ userInput, setUserInput ] = useState("");

    return (
        <div className="content-container">
            <div className="content">
                <div className="content-centered content-container">
                    <h4>Quick example of tracking local state in a component</h4>
                    <p>This component implements the useState hook to add React state to function components. Input text below and see the "User Input" value update</p>
                    
                    <p>Input Text: <input className="input-field" onChange={e => setUserInput(e.target.value)} value={userInput}/></p>
                    <p>User Input: {userInput}</p>
                </div>
            </div>
        </div>
    )
}

export default LocalStateExample 