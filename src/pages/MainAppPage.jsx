import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from 'react';

export default function MainApp() {
    const [visible, setVisible] = useState(false);
    return(
        <div className="main-app-page">
            <div className="header">
                <div className="card flex justify-content-center">
                    <Sidebar visible={visible} onHide={() => setVisible(false)}>
                        <h2>Your to-do lists</h2>
                    </Sidebar>
                    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
                </div>
                <h1>To-Do List</h1>
            </div>
        </div>
    );
}
