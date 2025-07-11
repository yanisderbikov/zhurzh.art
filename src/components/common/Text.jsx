import React from 'react';
import styles from '../../styles/common/Text.module.css';

/**
 * Text component
 *
 * @param {ReactNode} children – содержимое
 * @param {'h1'|'h2'|'h4'|'body'|'sign'} variant – тип текста (по-умолчанию 'body')
 * @param {string} color – произвольный цвет (любая CSS-строка)
 * @param {boolean} italic – курсив?
 * @param {object} style – доп. inline-стили, если нужны
 * @param {string} className – доп. классы
 */
export default function Text({
                                 children,
                                 variant = 'body',
                                 color,
                                 italic = false,
                                 style = {},
                                 className = '',
                                 ...rest
                             }) {
    const Tag =
        variant === 'sign'
            ? 'sign'
            : variant === 'h1'
                ? 'h1'
                : variant === 'h2'
                    ? 'h2'
                    : variant === 'h4'
                        ? 'h4'
                        : 'p';

    return (
        <Tag
            className={`${styles[variant]} ${className}`}
            style={{
                color,
                fontStyle: italic ? 'italic' : 'normal',
                ...style,
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
