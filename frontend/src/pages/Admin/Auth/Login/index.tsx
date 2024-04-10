import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { useForm } from "react-hook-form";
import { getAuthData, getTokenData, requestBackendLogin, saveAuthData } from "../../../../utils/request";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../AuthContext";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const {setAuthContextData} = useContext(AuthContext);


  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        })
        navigate("/admin")
      })
      .catch((error) => {
        setHasError(true);
        console.log("ERRO", error);
      });
  };

  return (
    <div className="login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Ocorreu um erro ao tenter efetuar o login
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Email no formato inválido'
              }
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
              required: 'Campo obrigatório'
            })}
            type="password"
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">{errors.password?.message}</div>
        </div>
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </Link>
        <div className="login-submit">
          <button>Fazer login</button>
        </div>
        <div className="signup-container">
          <span className="not-registered">Não tem Cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">
            CADASTRAR
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
