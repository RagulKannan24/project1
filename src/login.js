import React from 'react';
import './login.css';
function Login(){
    return(
        <div>
    <header>
        <h1>Event Organizer Portal</h1>
    </header>

    <section>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <label for="password">Confirm Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit">Login</button>
        </form>
    </section>

        </div>
    )
}
export default Login;