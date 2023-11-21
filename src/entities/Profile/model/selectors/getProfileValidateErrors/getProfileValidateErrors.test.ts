import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return validateErrors', () => {
        const data = [
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: data,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(data);
    });

    test('should work with empty validateErrors', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
