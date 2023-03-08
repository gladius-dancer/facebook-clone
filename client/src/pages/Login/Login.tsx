import * as React from "react";
import "./Login.scss";
import logo from "../../assets/img/facebook.svg";
import {useForm} from "react-hook-form";
import {Button, FormHelperText} from '@mui/material';
import {Link} from "react-router-dom";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';

import {InputText} from "../../components/FormComponents/InputText";
import {InputPassword} from "../../components/FormComponents/InputPassword";

const Login = () => {
    const schema = yup.object().shape({
        login: yup.string().email().required(),
        password: yup.string().required().min(6),
    });

    const methods = useForm({resolver: yupResolver(schema)});
    const {handleSubmit, reset, control, setValue, watch, formState: {errors}} = methods;
    const onSubmit = (data) => alert("Submited");

    return (
        <div className="login">
            <div className="container">
                <div className="login-inner">
                    <div className="left-content">
                        <div className="left-content-inner">
                            <img src={logo} alt=""/>
                            <p>Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.</p>
                        </div>
                    </div>
                    <div className="right-content">
                        <form className="login-form" onSubmit={handleSubmit(onSubmit)} >
                            <InputText
                                name="login"
                                label=""
                                control={control}
                                status={true}
                                placeholder="Электронный адрес или номер телефона"
                            />
                            <InputPassword
                                name="password"
                                control={control}
                                placeholder="Пароль"
                            />
                            {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}

                            <Button fullWidth  size="large" type="submit" variant="contained" color="primary">Вход</Button>

                            <Link to={'/restore'}>Забыли пароль?</Link>
                            <span className="horizontal-line"></span>
                            <Button className="register-button" size="large" type="submit" variant="contained" >Создать новый аккаунт</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;