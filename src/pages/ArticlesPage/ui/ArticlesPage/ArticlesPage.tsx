import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

export default (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('Статьи')}
        </div>
    );
};
