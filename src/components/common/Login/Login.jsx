import { Form, Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { usersAPI } from "../../../api/api"
import { login } from "../../../redux/auth-reducer"
import classes from "./Login.module.css"
import {connect} from "react-redux"
import { Redirect } from "react-router"


function Login (props) {        

    if(props.isAuth) {
        return <Redirect to ={'/profile'}/>
    }
    return <Formik initialValues = {{
        login: '',
        password: '',
        rememberMe: false
        }}
        validationSchema = {Yup.object({
            login: Yup.string()
            .min(5, 'At least 5 characters')
            .max(32, 'Maximum 32 characters')
            .required('Required'),
            password: Yup.string()
            .min(8, 'At least 8 characters')
            .required('Required')
        })}
        onSubmit = {(values) => {
            let formData = {
                email: values.login,
                password: values.password,
                rememberMe: values.rememberMe
            }
            props.login(formData)
            
         }
         
         }>
    <Form><div>
    <label htmlFor="login">Login </label>
    <Field className = {classes.login}name={'login'} placeholder={'login'}
           
           >
           </Field>
           <ErrorMessage name ='login'/>
    </div>
<div>
    <label htmlFor="password">Password </label>
    <Field className = {classes.pass}type={'password'} name={'password'} placeholder= {'password'}
           >
           
           </Field>
           <ErrorMessage name ='password'/>
</div>
<div>
    <label htmlFor="checkbox">Remember me </label>
    <Field type= {'checkbox'} name = {'rememberMe'}
        ></Field>
</div>
<div>
    
    <button type = "submit" name = {'loginBtn'}>Log in</button>
</div>
</Form>
</Formik>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login);