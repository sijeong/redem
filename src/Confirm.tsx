import React, { FC } from 'react'
import './Confirm.css';


// import * as React from 'react'
const Confirm: React.FC<__Props> = (props) => {

    console.log("Confirm rendering");

    const [cancelClickCount, setCancelClickCount] = React.useState(0);

    const handleOKClick = () => {
        props.onOkClick();
    }
    const handleCancelClick = () => {
        const newCount = cancelClickCount + 1;
        setCancelClickCount(newCount);
        if (newCount >= 2) {
            props.onCancelClick();
        }
    }

    return (
        // <div className="confirm-wrapper confirm-visible">
        <div className={props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}>
            <div className="confirm-container">
                <div className="confirm-title-container">
                    <span>{props.title || "default title"}</span>
                </div>
                <div className="confirm-content-container">
                    <p>{props.content || "default content"}</p>
                </div>
                <div className="confirm-buttons-container">
                    <button className="confirm-cancel" onClick={handleCancelClick} >{(cancelClickCount === 0 ? props.cancelCaption : 'Really') || 'Cancel'}</button>
                    <button className="confirm-ok" onClick={props.onOkClick} >{props.okCaption || 'OK'}</button>
                </div>
            </div>
        </div>
    );
}

// interface IProps {
//     title: string;
//     content: string;
// }


type __Props = {
    open: boolean;
    title: string;
    content: string;
    okCaption?: string;
    cancelCaption?: string;
    onOkClick: () => void;
    onCancelClick: () => void;
    test?: any;
}

const ConfirmMemo = React.memo(Confirm);

export default ConfirmMemo;