import React, { SyntheticEvent, useState } from "react";


interface FormElements extends HTMLFormElement {
    username: { value: string };
    email: { value: string };
    message: { value: string };
}


/**
 * 
 * @returns 
 */
export default function Contact(): JSX.Element {
    const [status, setStatus] = useState("Submit");

    /**
     * 
     * @param e 
     */
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        /* Send to server */
        setStatus("Sending...");
        const target = e.target as FormElements;
        const details = {
            username: target.username.value,
            email: target.email.value,
            message: target.message.value,
        };
        const response = await fetch(
            "http://localhost:5000/contact",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            },
        );

        /* Got response from server */
        setStatus("Submit");
        const result = await response.json();
        alert(result.status);
    };

    return (
        <div>
            <p>I'd love to hear from you.  Send a message!</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Name:</label>
                    <input type="text" id="name" placeholder="Name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="user@domain.extension" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" placeholder="Message" required />
                </div>
                <button type="submit">{status}</button>
            </form>
        </div>
    );
}