import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from 'react';
import './MainAppPage.css';

export default function MainApp() {
    const [visible, setVisible] = useState(false);
    return(
        <div className="main-app-page">
            <header>
                <div className="custom-sidebar">
                    <Sidebar visible={visible} onHide={() => setVisible(false)} className="custom-sidebar">
                        <h2>Your to-do lists</h2>
                    </Sidebar>
                    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
                </div>
                <h1>To-Do List</h1>
            </header>
        </div>
    );
}
