import React from "react";

async function fetchRegisterAPI(registerFormInfo) {
    try {
        await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormInfo)
    });
    } catch (error) {
        console.error('Error registering user: ', error);
    }
}

export default function RegisterForm () {
    async function registerUser(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const verifyPassword = document.getElementById("verifyPassword").value;

        const registerFormInfo = {
            username: username,
            password: password,
            verifyPassword: verifyPassword,
        };

        try {
            const response = await fetchRegisterAPI(registerFormInfo);

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <div>
                <form onSubmit={registerUser}>
                    <label htmlFor="username">Username: 
                        <input type="text" id="username" name="username" />
                    </label>
                    <label htmlFor="password">Password: 
                        <input type="password" id="password" name="password" />
                    </label>
                    <label htmlFor="verifyPassword">Verify Password: 
                        <input type="password" id="verifyPassword" name="verifyPassword" />
                    </label>
                    
                    <input type="submit" value="Register"/>
                    
                </form>
            </div>
        </>
    )
}
