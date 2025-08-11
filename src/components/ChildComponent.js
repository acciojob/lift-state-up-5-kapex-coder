import React, { useEffect, useState } from "react";

const ChildComponent = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        console.log(formData);
    }, [formData])

    const handleInputChange = (event, key) => {
        // const value = event.target.value;
        event.persist();

        setFormData(prevData => ({
            ...prevData,
            [key]: event.target.value
        }))
    }

    return <>
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsLoggedIn(true);
        }}>
            <div>
                <label htmlFor="username" >Username:</label>
                <input id="username" name="username" type="text" value={formData?.username} onChange={(e) => handleInputChange(e, "username")} required />
            </div>
            <div>
                <label htmlFor="password" >Password:</label>
                <input id="password" name="password" type="password" value={formData?.password} onChange={(e) => handleInputChange(e, "password")} required />
            </div>
            <button type="submit">Login</button>
        </form>
    </>
}

export default ChildComponent;