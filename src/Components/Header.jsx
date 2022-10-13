import React from 'react'

function Header() {
    const date = new Date().getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div>
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's {days[date]}. 🌝 ☕ </h2>
            </div>
        </div>
    )
}

export default Header