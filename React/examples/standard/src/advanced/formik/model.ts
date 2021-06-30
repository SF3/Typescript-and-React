import moment from "moment";

export interface Applicant {
    name: string;
    dob: string;
}

export interface LoanDetails {
    propertyValue: number;
    deposit: number;
    interest: number;
    durationMonths: number;
}

export interface MortgageApplication {
    applicant: Applicant;
    loan: LoanDetails;
}

// Rules
// 1. All fields must not be empty
// 2. Applicant must be >= 18 today
// 3. Property value must be >= 10k and <= 1,000,000
// 4. Deposit must be >= 10% of the property value
// 5. The loan amount must be at least £10,000
// 6. Interest must > 0%
// 7. Duration must be integer and >= 48 (4 years) and <= 480 (40 years)

export const INPUT_DATE_FMT = "YYYY-MM-DD";

export const MIN_AGE = 18;
export const MIN_PROPERTY_VALUE = 10_000;
export const MAX_PROPERTY_VALUE = 1_000_000;
export const MIN_LOAN_AMOUNT = 10_000;
export const MIN_DEPOSIT_PERCENT = 10;
export const MIN_DURATION = 48;
export const MAX_DURATION = 480;

export const initialValues: MortgageApplication = {
    applicant: {
        name: '',
        dob: moment().subtract(18, "years").format(INPUT_DATE_FMT)
    },
    loan: {
        propertyValue: 100_000,
        deposit: 0,
        durationMonths: 25 * 12,
        interest: 2
    }
}
