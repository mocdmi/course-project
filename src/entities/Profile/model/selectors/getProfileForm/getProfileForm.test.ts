import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return form', () => {
        const data = {
            first: 'Дмитрий',
            lastname: 'Мосин',
            age: 36,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Череповец',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty form', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
