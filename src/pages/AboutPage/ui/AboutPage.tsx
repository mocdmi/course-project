import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};
