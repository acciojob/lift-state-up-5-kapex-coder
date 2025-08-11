import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <>
        <h1>Parent Component</h1>
        {isLoggedIn ? "You are logged in!" : <ChildComponent setIsLoggedIn={setIsLoggedIn} />}
    </>

}

export default ParentComponent;