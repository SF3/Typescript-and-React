import moment from "moment";
import {
    Applicant,
    LoanDetails,
    MAX_DURATION,
    MAX_PROPERTY_VALUE,
    MIN_AGE,
    MIN_DEPOSIT_PERCENT,
    MIN_DURATION,
    MIN_LOAN_AMOUNT,
    MIN_PROPERTY_VALUE,
    MortgageApplication
} from "./model";
import {FormikErrors} from "formik";
import * as _ from "lodash";

function age(dob: string) {
    return moment().diff(moment(dob), 'years')
}

function validateApplication({name, dob}: Applicant): FormikErrors<Applicant> {
    const errors: FormikErrors<Applicant> = {};
    if (name.trim() === '') errors.name = "Applicant requires a name";
    if (age(dob) < MIN_AGE) errors.dob = "Applicant must be over 18 years old"
    return errors;
}

function validateLoan({propertyValue, deposit, durationMonths, interest}: LoanDetails): FormikErrors<LoanDetails> {
    const errors: FormikErrors<LoanDetails> = {};
    if (propertyValue < MIN_PROPERTY_VALUE) errors.propertyValue = `The property value must be at least £${MIN_PROPERTY_VALUE}`;
    else if (propertyValue > MAX_PROPERTY_VALUE) errors.propertyValue = `The property value must not exceed £${MAX_PROPERTY_VALUE}`;

    if (deposit <= 0) errors.deposit = `The deposit must be greater than zero`;
    else if (deposit >= propertyValue) errors.deposit = `The deposit must not exceed the property value`;
    else {
        const loanAmount = propertyValue - deposit;
        if (loanAmount < MIN_LOAN_AMOUNT) errors.propertyValue = `The loan amount must be at least ${loanAmount}`;
        else if (deposit / propertyValue * 100 < MIN_DEPOSIT_PERCENT) errors.deposit = `The deposit must be at least ${MIN_DEPOSIT_PERCENT}% of the property value`;
    }

    if (durationMonths < MIN_DURATION) errors.durationMonths = `The duration must be at least ${MIN_DURATION} months`;
    else if (durationMonths > MAX_DURATION) errors.durationMonths = `The duration must not exceed ${MAX_DURATION} months`;

    if (interest < 0) errors.interest = `The interest must be positive`;
    return errors;
}

export function validate({applicant, loan}: MortgageApplication): FormikErrors<MortgageApplication> {
    const noErrors = {applicant: {}, loan: {}};
    let errors = {
        applicant: validateApplication(applicant),
        loan: validateLoan(loan)
    };

    return _.isEqual(errors, noErrors) ? {} : errors; // This allows the isValid flag to operate correctly
}
