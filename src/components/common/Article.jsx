import React from 'react';
import styles from '../../styles/common/Article.module.css';

export default function Article({
    children,
    variant = 'primary',
    style = {},
    className = '',
    ...rest
}) {
    
    const Tag = 'article'; 

    return (
        <Tag
            className={`${styles[variant]} ${className}`}
            style={{...style}}
            {...rest}
        >
            {children} 
        </Tag>
    );
}