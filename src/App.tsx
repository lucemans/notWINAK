import * as React from 'react';
import { Body } from './components/Body';
import { Header } from "./components/Header";
import { Widget } from './components/Widget';
import { Home } from './pages/Home';

export function App() {
    return (
        <div className="app">
            <Header></Header>
            <Body>
                <Home></Home>
            </Body>
        </div>
    )
}