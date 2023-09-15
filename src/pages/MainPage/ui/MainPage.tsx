import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

export default () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};
