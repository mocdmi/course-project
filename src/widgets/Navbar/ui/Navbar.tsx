import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={RouterPath.main}
                    className={cls.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={RouterPath.about}
                    theme={AppLinkTheme.RED}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
