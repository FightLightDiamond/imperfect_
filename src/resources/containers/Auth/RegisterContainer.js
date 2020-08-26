import React from "react";
import {connect} from "react-redux";
import {registerUser} from "../../../stores/redux/actions";
import {ErrorMessage} from "@hookform/error-message";
import Loading from "../../components/common/Loading";
import {useForm} from "react-hook-form";

const RegisterContainer = (props) => {
    const {register, errors, watch, handleSubmit} = useForm()
    const {loading, registerUser, history} = props

    const onSubmit = (values) => {
        registerUser(values, history);
    }

    return (
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
                    type='password'
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    ref={register({
                        required: "Password is required",
                        validate: value => value.length > 5 || value.length + "Password must be 6 characters at minimum"
                    })}
                />
                <ErrorMessage className="invalid-feedback" name="password" as="div" errors={errors}/>
            </div>

            <div className="form-group">
                <label htmlFor="password_confirmation">Password confirmation</label>
                <input
                    type='password'
                    name="password_confirmation"
                    placeholder="Enter password"
                    className={`form-control ${errors.password_confirmation ? "is-invalid" : ""}`}
                    ref={register({
                        required: "Password is required",
                        validate: value => {
                            if(value.length < 5)  return  value.length + "Password must be 6 characters at minimum"
                            if(value !== watch('password')) return  'Password not same'
                        },
                    })}
                />
                <ErrorMessage className="invalid-feedback" name="password_confirmation" as="div" errors={errors}/>
            </div>

            {
                loading
                    ? <Loading/>
                    : <button className="btn btn-primary btn-block" type="submit">Submit</button>
            }
        </form>
    );
}

const mapStateToProps = ({authUser}) => {
    const {user, loading} = authUser;
    return {user, loading};
};

export default connect(
    mapStateToProps,
    {
        registerUser
    }
)(RegisterContainer);
