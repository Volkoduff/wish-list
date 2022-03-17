import * as React from "react";

const Button: React.FC<{name: string}> = (props) => {
    return (
        <button>{props.name}</button>
    )
}

export default Button;
