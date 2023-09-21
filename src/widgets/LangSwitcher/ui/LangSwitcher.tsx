import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {
        className,
        short,
    } = props;

    const { t, i18n } = useTranslation();

    const toggleTranslate = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className as string])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTranslate}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
