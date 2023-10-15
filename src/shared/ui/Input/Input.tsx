import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { types } from 'sass';
import cls from './Input.module.scss';
import String = types.String;

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'autoFocus' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        onChange,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(value?.toString().length || 0);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
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
                    readOnly={readonly}
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
