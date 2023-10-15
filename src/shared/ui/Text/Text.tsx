import { memo } from 'react';
import { Additional, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    align?: TextAlign;
    theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
    } = props;

    const additional: Additional = [
        className,
        cls[theme],
        cls[align],
    ];

    return (
        <div className={classNames('', {}, additional)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
