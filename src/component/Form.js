import React from 'react';

export default function Form() {
    return (
        <>
            <form action="" method="post">
                <label htmlFor="username"> Username :</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">password :</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="submit" />
            </form>
        </>
    )
}