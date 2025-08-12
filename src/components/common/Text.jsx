import React from 'react';
import styles from '../../styles/common/Text.module.css';

/**
 * Text component
 *
 * @param {ReactNode} children – содержимое
 * @param {'h1'|'h2'|'h4'|'body'|'sign'|'button'} variant – тип текста (по-умолчанию 'body')
 * @param {string} color – произвольный цвет (любая CSS-строка)
 * @param {boolean} italic – курсив?
 * @param {number|string} indent – отступ первой строки (например 24 или '2em'). Если не указан, отступ не применяется.
 * @param {object} style – доп. inline-стили, если нужны
 * @param {string} className – доп. классы
 */
export default function Text({
                                 children,
                                 variant = 'body',
                                 color,
                                 italic = false,
                                 indent,
                                 style = {},
                                 className = '',
                                 ...rest
                             }) {
    const Tag =
        variant === 'sign'
            ? 'small'
            : variant === 'h1'
                ? 'h1'
                : variant === 'h2'
                    ? 'h2'
                    : variant === 'h4'
                        ? 'h4'
                        : 'p';

    const computedIndent =
        indent === undefined || indent === null
            ? undefined
            : typeof indent === 'number'
                ? `${indent}px`
                : indent;

    return (
        <Tag
            className={`${styles[variant]} ${className}`}
            style={{
                color,
                fontStyle: italic ? 'italic' : 'normal',
                textIndent: computedIndent,
                ...style,
            }}
            {...rest}
        >   
            {children}
        </Tag>
    );
}
