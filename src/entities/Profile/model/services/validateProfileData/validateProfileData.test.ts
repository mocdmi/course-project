import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Дмитрий',
    lastname: 'Мосин',
    age: 36,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Череповец',
    username: 'admin',
};

describe('validateProfileData', () => {
    test('success validate', () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('no data', () => {
        expect(validateProfileData())
            .toEqual([ValidateProfileError.NO_DATA]);
    });

    test('without first and lastname', () => {
        expect(validateProfileData({ ...data, first: '', lastname: '' }))
            .toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        expect(validateProfileData({ ...data, age: 0 }))
            .toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('age not integer', () => {
        expect(validateProfileData({ ...data, age: 30.5 }))
            .toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        expect(validateProfileData({ ...data, country: undefined }))
            .toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', () => {
        expect(validateProfileData({
            ...data,
            first: '',
            lastname: '',
            age: 0,
            country: undefined,
        }))
            .toEqual([
                ValidateProfileError.INCORRECT_USER_DATA,
                ValidateProfileError.INCORRECT_AGE,
                ValidateProfileError.INCORRECT_COUNTRY,
            ]);
    });
});
