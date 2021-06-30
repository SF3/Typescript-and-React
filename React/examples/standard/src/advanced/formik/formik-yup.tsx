import {Form, Formik} from "formik";
import React, {FC, useState} from "react";
import {initialValues, INPUT_DATE_FMT, LoanDetails, MortgageApplication} from "./model";
import {DateInput, NumberInput, TextInput} from "./custom-form-controls";
import {mortgageSchema} from "./yup-validation";
import moment from "moment";

const MortgageCalculation: FC<{ onComplete: (_: MortgageApplication) => void }> = ({onComplete}) => {
    return <Formik
        initialValues={initialValues}
        validationSchema={mortgageSchema}
        validateOnChange={false} // Only validate when you tab
        onSubmit={(values, {setSubmitting}) => {
            onComplete(values);
            setSubmitting(false);
        }}
    >
        {({isSubmitting}) =>
            <div>
                <Form>
                    <TextInput label="Name" name="applicant.name"/>
                    <DateInput label="Date of Birth" name="applicant.dob" max={moment().format(INPUT_DATE_FMT)}/>

                    <hr/>

                    <NumberInput label="Property Value: £" step="0.01" name="loan.propertyValue" />
                    <NumberInput label="Deposit: £" step="0.01" name="loan.deposit" />
                    <NumberInput label="Duration: Months" step="1" name="loan.durationMonths" />
                    <NumberInput label="Interest: %" step="0.001" name="loan.interest" />

                    <hr/>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            </div>
        }
    </Formik>
}


export const FormikYupExample: FC = () => {
    const [repayment, setRepaymnet] = useState<string | null>(null);

    const onComplete = (application: MortgageApplication) => setRepaymnet(`£${monthlyPayment(application.loan).toFixed(2)}`);

    return (
        <div>
            <h1>Combining Formik and Yup</h1>
            <MortgageCalculation onComplete={onComplete}/>
            <h2>{repayment}</h2>
        </div>
    );
}

function monthlyPayment({propertyValue, deposit, durationMonths, interest}: LoanDetails): number {
    const loan = propertyValue - deposit;
    const monthlyInterest = interest / 100 / 12;
    if (interest === 0) {
        return loan / durationMonths;
    }
    return loan * monthlyInterest * Math.pow(1 + monthlyInterest, durationMonths) / (Math.pow(1 + monthlyInterest, durationMonths) - 1);
}
