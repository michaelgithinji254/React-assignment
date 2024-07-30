
import React from 'react';

const Reach = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1>Feel free to reach us out</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Reach;