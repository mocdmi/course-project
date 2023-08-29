import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

export default () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};
