import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div className="style">
            <p>
                {name} : {email}
            </p>
        </div>
    );
};

export default Comment;