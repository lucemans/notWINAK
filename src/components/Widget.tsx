import * as React from 'react';

export function Widget(props: {children, title: string}) {

    return (
        <div className="widget flex stretch vertical">
            <div className="title">
                {props.title}
            </div>
            <div className="inner">
                {props.children}
            </div>
        </div>
    )
}