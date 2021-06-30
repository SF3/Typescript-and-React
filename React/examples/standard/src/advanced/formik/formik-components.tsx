import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {FC, useState} from "react";
import {initialValues, INPUT_DATE_FMT, LoanDetails, MortgageApplication} from "./model";
import {validate} from "./custom-validation";
import moment from "moment";

const MortgageCalculation: FC<{ onComplete: (_: MortgageApplication) => void }> = ({onComplete}) => {
    return <Formik
        initialValues={initialValues}
        validate={validate}
        validateOnChange={false} // Only validate when you tab
        onSubmit={(values, {setSubmitting}) => {
            onComplete(values);
            setSubmitting(false);
        }}
    >
        {({isSubmitting}) =>
            <div>
                <Form>
                    <div className="form-group">
                        <label>Name:
                            <Field className="form-control" type="text" name="applicant.name"/>
                        </label>
                        <ErrorMessage name="applicant.name"/>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth:
                            <Field className="form-control" type="date" name="applicant.dob" max={moment().format(INPUT_DATE_FMT)}/>
                        </label>
                        <ErrorMessage name="applicant.dob"/>
                    </div>

                    <hr/>

                    <div className="form-group">
                        <label>Property Value: £
                            <Field className="form-control" type="number" step="0.01" name="loan.propertyValue"/>
                        </label>
                        <ErrorMessage name="loan.propertyValue"/>
                    </div>

                    <div className="form-group">
                        <label>Deposit: £
                            <Field className="form-control" type="number" step="0.01" name="loan.deposit"/>
                        </label>
                        <ErrorMessage name="loan.deposit"/>
                    </div>

                    <div className="form-group">
                        <label>Duration: Months
                            <Field className="form-control" type="number" step="1" name="loan.durationMonths"/>
                        </label>
                        <ErrorMessage name="loan.durationMonths"/>
                    </div>

                    <div className="form-group">
                        <label>Interest: %
                            <Field className="form-control" type="number" step="0.001" name="loan.interest"/>
                        </label>
                        <ErrorMessage name="loan.interest"/>
                    </div>

                    <hr/>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            </div>
        }
    </Formik>
}


export const FormikComponentExample: FC = () => {
    const [repayment, setRepaymnet] = useState<string | null>(null);

    const onComplete = (application: MortgageApplication) => setRepaymnet(`£${monthlyPayment(application.loan).toFixed(2)}`);

    return (
        <div>
            <h1>Using Formik's Components</h1>
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
