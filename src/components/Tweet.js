import React from 'react';


const Tweet = ({name}) => {
    return(
    <div>
        <h2>User Name: {name}</h2>
        <button>Like</button>
        <button>Delete</button>
    </div>
    );
};

export default Tweet;



