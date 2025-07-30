import React from 'react';
import styles from '../../styles/common/Button.module.css';

/**
 * @param {ReactNode} children 
 * @param {primary | 'subscribe'} variant - на будущее. Пока что к кнопкам применяются стили className, где есть 
 * @param {string} imageSrc
 * @param {string} className
 * @param {object} rest
 * @param {object} alt
 */

export default function Button({
    children,
    variant = 'primary',
    imageSrc, 
    className = '',
    alt = '',
    ...rest
}) {

    const Tag = 'button'; /* Возможно позже добавлю условие и для ссылок, если понадобится */

    return (
        <Tag
            className={`${styles[variant]} ${className}`}
            {...rest}
        >
            {imageSrc && (<img src={imageSrc} alt={alt} />)}
            {children}
        </Tag>
    );
}