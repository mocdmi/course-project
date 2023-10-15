import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string,
    readonly?: boolean,
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => (
        options?.map(({ value, content }) => (
            <option
                key={value}
                value={value}
                className={cls.option}
            >
                {content}
            </option>
        ))
    ), [options]);

    const mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
