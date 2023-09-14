import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    type="button"
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal
                    isOpen={isAuthModal}
                    onClose={onToggleModal}
                >
                    {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')}
                </Modal>
            </div>
        </div>
    );
};
