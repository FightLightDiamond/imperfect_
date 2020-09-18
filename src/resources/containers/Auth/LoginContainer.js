import React from "react";
import {connect} from "react-redux";
import {loginUser} from "../../../stores/redux/actions";
import {FormProvider, useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';
import Loading from "../../components/common/Loading";

const LoginContainer = (props) => {
    const methods = useForm();
    const {register, errors, handleSubmit} = methods
    const {loading, loginUser, history} = props

    const onSubmit = values => {
        loginUser(values, history)
    }

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login form with React Hook Form</h1>
                </div>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            placeholder="Enter email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address format"
                                }
                            })}
                        />
                        <ErrorMessage className="invalid-feedback" name="email" as="div" errors={errors}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type={'password'}
                            name="password"
                            placeholder="Enter password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            ref={register({
                                required: "Password is required",
                                validate: value => value.length > 5 || value.length + "Password must be 3 characters at minimum"
                            })}
                        />
                        <ErrorMessage className="invalid-feedback" name="password" as="div" errors={errors}/>
                    </div>
                    {
                        loading
                            ? <Loading/>
                            : <button className="btn btn-primary btn-block" type="submit">Submit</button>
                    }
                </form>
            </FormProvider>
        </div>
    );
};

const mapStateToProps = ({authUser}) => {
    const {loading, error} = authUser;
    return {loading, error};
};

export default connect(
    mapStateToProps,
    {
        loginUser
    }
)(LoginContainer)
