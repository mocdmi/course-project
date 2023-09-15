import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};
