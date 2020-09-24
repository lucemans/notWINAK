import * as React from 'react';
import "./Body.scss";

export function Body(props: {children}) {

    return (
        <div className="body flex center">
            <div className="inner">
                {props.children}
            </div>
        </div>
    )
}