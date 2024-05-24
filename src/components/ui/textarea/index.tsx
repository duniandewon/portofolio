import {forwardRef, TextareaHTMLAttributes, useRef, useState} from "react";

import './style.css';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(({onChange, value, ...props},ref) => {
    return (
        <div className="input-container" data-value={value}>
            <textarea
                rows={1}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
})
Textarea.displayName = "Textarea"