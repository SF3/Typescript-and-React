import {number, NumberSchema, object, SchemaOf, string} from 'yup';
import {
    Applicant,
    LoanDetails,
    MAX_DURATION,
    MAX_PROPERTY_VALUE,
    MIN_DEPOSIT_PERCENT,
    MIN_DURATION,
    MIN_PROPERTY_VALUE,
    MortgageApplication
} from "./model";

export const mortgageSchema: SchemaOf<MortgageApplication> = object({
    applicant: object({
        name: string().required().label('Your name'),
        dob: string().required().label('Your date of birth')
    }) as SchemaOf<Applicant>,
    loan: object({
        propertyValue: number().required().min(MIN_PROPERTY_VALUE).max(MAX_PROPERTY_VALUE).label('The property value'),
        deposit: number().required().min(0).label('The deposit')
            .when('propertyValue', (value: number, schema: NumberSchema) => schema
                .min(value * MIN_DEPOSIT_PERCENT / 100, `The deposit must be at least ${MIN_DEPOSIT_PERCENT}% of the property value`)
                .max(value, "The deposit must not exceed the property value")),
        durationMonths: number().integer().required().min(MIN_DURATION).max(MAX_DURATION).label('The loan duration'),
        interest: number().required().min(0).label("The annual interest")
    }) as SchemaOf<LoanDetails>
});
