import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'autoFocus' | 'onChange'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        autoFocus,
        onChange,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            { placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={cls.input}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...otherProps}
                />
                <span
                    className={cls.caret}
                    style={{ left: `${caretPosition * 9}px` }}
                />
            </div>
        </div>
    );
});
