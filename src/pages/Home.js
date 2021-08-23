import React, {useState} from 'react'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import About from '.././materialUi/About';
import Contact from '.././materialUi/Contact';

export default function Home() {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (e, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="About"/>
                    <Tab label="Contact Us"/>
                </Tabs>
            </AppBar>
            {setSelectedTab === 0 && <About />}
            {setSelectedTab === 1 && <Contact />}
        </>
    )
}
