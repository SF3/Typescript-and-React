import {Formik} from "formik";
import React, {FC, useState} from "react";
import moment from "moment";
import {initialValues, INPUT_DATE_FMT, LoanDetails, MortgageApplication} from "./model";
import {validate} from "./custom-validation";

const Debug: FC<{ title: string, value: any }> = ({title, value}) =>
    <div>
        {title}: <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>;

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
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              isSubmitting
          }) =>
            <div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label>Name:
                            <input className="form-control" type="text"
                                   name="applicant.name"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.applicant.name}/>
                        </label>
                        <span className="text-danger">{touched.applicant?.name && errors.applicant?.name}</span>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth:
                            <input className="form-control" type="date"
                                   name="applicant.dob"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   max={moment().format(INPUT_DATE_FMT)}
                                   value={values.applicant.dob}/>
                        </label>
                        <span className="text-danger">{touched.applicant?.dob && errors.applicant?.dob}</span>
                    </div>

                    <hr/>

                    <div className="form-group">
                        <label>Property Value: £
                            <input className="form-control" type="number" step="0.01"
                                   name="loan.propertyValue"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.loan.propertyValue}/>
                        </label>
                        <span
                            className="text-danger">{touched.loan?.deposit && touched.loan?.propertyValue && errors.loan?.propertyValue}</span>
                    </div>

                    <div className="form-group">
                        <label>Deposit: £
                            <input className="form-control" type="number" step="0.01"
                                   name="loan.deposit"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.loan.deposit}/>
                        </label>
                        <span
                            className="text-danger">{touched.loan?.propertyValue && touched.loan?.deposit && errors.loan?.deposit}</span>
                    </div>

                    <div className="form-group">
                        <label>Duration: Months
                            <input className="form-control" type="number" step="1"
                                   name="loan.durationMonths"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.loan.durationMonths}/>
                        </label>
                        <span
                            className="text-danger">{touched.loan?.durationMonths && errors.loan?.durationMonths}</span>
                    </div>

                    <div className="form-group">
                        <label>Interest: %
                            <input className="form-control" type="number" step="0.001"
                                   name="loan.interest"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.loan.interest}/>
                        </label>
                        <span
                            className="text-danger">{touched.loan?.interest && errors.loan?.interest}</span>
                    </div>

                    <hr/>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>

                <Debug title="Raw Value" value={values}/>
                <Debug title="Errors" value={errors}/>

            </div>
        }
    </Formik>
}


export const FormikManualExample: FC = () => {
    const [repayment, setRepaymnet] = useState<string | null>(null);

    const onComplete = (application: MortgageApplication) => setRepaymnet(`£${monthlyPayment(application.loan).toFixed(2)}`);

    return (
        <div>
            <h1>Using Formik Manually</h1>
            <MortgageCalculation onComplete={onComplete}/>
            <h2>{repayment}</h2>
        </div>
    );
}

function monthlyPayment({propertyValue, deposit, durationMonths, interest}: LoanDetails): number {
    const loan = propertyValue - deposit;
    const monthlyInterest = interest /100 / 12;
    if (interest === 0) {
        return loan / durationMonths;
    }
    return loan * monthlyInterest * Math.pow(1 + monthlyInterest, durationMonths) / (Math.pow(1 + monthlyInterest, durationMonths) - 1);
}
