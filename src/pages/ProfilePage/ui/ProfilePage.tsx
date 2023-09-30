import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducersList: ReducersList = {
    profile: profileReducer,
};

export default () => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    );
};
