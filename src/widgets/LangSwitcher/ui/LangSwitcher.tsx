import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggleTranslate = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className as string])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTranslate}
        >
            {t('Язык')}
        </Button>
    );
};
