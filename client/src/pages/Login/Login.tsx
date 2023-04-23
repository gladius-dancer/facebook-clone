import * as React from "react";
import {useState} from "react";
import "./Login.scss";
import logo from "../../assets/img/facebook.svg";
import {useForm} from "react-hook-form";
import {Button, FormHelperText, FormControl} from '@mui/material';
import {Link} from "react-router-dom";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {InputText} from "../../components/FormComponents/InputText";
import {InputPassword} from "../../components/FormComponents/InputPassword";
import {Dropdown} from "../../components/FormComponents/Dropdown";
import ModalComponent from "../../components/Modal/Modal";
import {FormValues} from "../../types/LoginFormTypes";
import CloseIcon from '@mui/icons-material/Close';
import {useAppSelector} from "../../hooks/redux";
import {InputRadioStart} from "../../components/FormComponents/RadioStart";

const Login = () => {

    const [modal, setModal] = useState(false);
    const date = useAppSelector(state => state.dateReduser);

    const schema = yup.object().shape({
        login: yup.string().email().required(),
        password: yup.string().required().min(6),
    });

    const methods = useForm<FormValues>({resolver: yupResolver(schema)});
    const {handleSubmit, control, setValue, watch, formState: {errors}} = methods;
    const onSubmit = (data: FormValues) => console.log(data);
    const registerSubmit = (data: FormValues)=>console.log(data)

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
                        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                            <InputText
                                className="col-12"
                                key="login"
                                name="login"
                                label=""
                                control={control}
                                status={true}
                                placeholder="Электронный адрес или номер телефона"
                            />
                            <FormControl fullWidth>
                                <InputPassword
                                    key="password"
                                    name="password"
                                    control={control}
                                    placeholder="Пароль"
                                />
                                {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
                            </FormControl>

                            <Button fullWidth size="large" type="submit" variant="contained"
                                    color="primary">Вход</Button>

                            <Link to={'/restore'}>Забыли пароль?</Link>
                            <span className="horizontal-line"></span>
                            <Button onClick={() => setModal(true)} className="register-button" size="large"
                                    variant="contained">
                                Создать новый аккаунт
                            </Button>

                        </form>
                    </div>
                </div>
            </div>
            <ModalComponent
                isOpen={modal}
                className="form-modal"
                overlayClassName="modal-overlay">
                <div className="modal-header d-flex flex-column align-items-start pt-2 ps-3 pe-3 border-bottom">
                    <CloseIcon className="modal-close position-absolute top-1 end-0 me-2"
                               onClick={() => setModal(false)}/>
                    <h2 className="modal-header">Регистрация</h2>
                    <p className="modal-sub-header">Быстро и легко.</p>
                </div>
                <form onSubmit={handleSubmit(registerSubmit)} className="d-flex flex-column gap-2 p-3">
                    <div className="d-flex gap-3">
                        <InputText
                            key="name"
                            name="name"
                            label=""
                            control={control}
                            status={true}
                            placeholder="Имя"
                            size="small"
                        />
                        <InputText
                            key="lastName"
                            name="lastName"
                            label=""
                            control={control}
                            status={true}
                            placeholder="Фамилия"
                            size="small"
                        />
                    </div>

                    <InputText
                        key="telephone"
                        name="telephone"
                        label=""
                        control={control}
                        status={true}
                        placeholder="Номер мобильного телефона или эл. адрес"
                        size="small"
                    />
                    <InputPassword
                        key="password"
                        name="password"
                        control={control}
                        placeholder="Пароль"
                        size="small"
                    />
                    <p className="form-title">Дата рождения</p>
                    <div className="d-flex justify-content-between gap-2">
                        <Dropdown
                            key="day"
                            name="day"
                            label=""
                            control={control}
                            status={true}
                            placeholder="Новый пароль"
                            options={date.day}
                            size="small"
                        />
                        <Dropdown
                            key="month"
                            name="month"
                            label=""
                            control={control}
                            status={true}
                            placeholder="Новый пароль"
                            options={date.month}
                            size="small"
                        />
                        <Dropdown
                            key="year"
                            name="year"
                            label=""
                            control={control}
                            status={true}
                            placeholder="Новый пароль"
                            options={date.year}
                            size="small"
                        />
                    </div>
                    <p className="form-title">Пол</p>
                    <div className="d-flex justify-content-between gap-2 me-3">
                        <InputRadioStart
                            key="male"
                            name="gender"
                            label="Мужской"
                            control={control}
                            size="small"
                            checked={true}
                        />
                        <InputRadioStart
                            key="female"
                            name="gender"
                            label="Женский"
                            control={control}
                            size="small"
                            checked={false}

                        />
                        <InputRadioStart
                            key="yourVersion"
                            name="gender"
                            label="Другое"
                            control={control}
                            size="small"
                            checked={false}

                        />
                    </div>
                    <div className="register-info">
                        <span>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию на Facebook.</span>
                        <Link to={"/"}>Подробнее</Link>
                        <span>Нажимая кнопку "Регистрация", вы принимаете наши </span>
                        <Link to={"/"}> Условия использования, </Link>
                        <Link to={"/"}>Политику конфиденциальности</Link><span> и </span>
                        <Link to={"/"}>Политику в отношении файлов cookie.</Link>
                    </div>

                    <Button type="submit" className="register-button text-capitalize fs-6 fw-bold pt-1 pb-1 ms-auto me-auto w-50" size="small"
                            variant="contained">
                        Регистрация
                    </Button>
                </form>
            </ModalComponent>

        </div>
    )
}

export default Login;