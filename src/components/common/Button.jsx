import React from 'react';
import styles from '../../styles/common/Button.module.css';

/**
 * @param {ReactNode} children 
 * @param {primary} variant 
 * @param {string} imageSrc
 * @param {object} style
 * @param {string} className
 * @param {object} rest
 * @param {object} alt
 */

export default function Button({
    children,
    variant = 'primary',
    imageSrc,
    style = {},
    className = '',
    alt = '',
    ...rest
}) {

    const Tag = 'button'; 

    return (
        <Tag
            className={`${styles[variant]} ${className}`}
            style={{...style}}
            {...rest}
        >
            {imageSrc && (<img src={imageSrc} alt={alt} />)}
            {children}
        </Tag>
    );
}