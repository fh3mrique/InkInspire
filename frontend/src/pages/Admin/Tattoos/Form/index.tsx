import { useForm } from "react-hook-form";
import "./styles.css";
import { Tattoo } from "../../../../types/Tattoo";
import { BASE_URL, requestBackend } from "../../../../utils/request";
import { AxiosRequestConfig } from "axios";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tattoo>();

  const onSubmit = (formData: Tattoo) => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/tattoo`,
      data: formData,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="tattoo-crud-container">
      <div className=" tattoo-crud-form-card">
        <h1 className="tattoo-crud-form-title">Dados da Tatuagem</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row tattoo-crud-inputs-container">
            <div className="col-lg-6 tattoo-crud-inputs-left">
              <div className="margin-bottom-30">
                <input
                  {...register("name", {
                    required: "Campo obrigatório", 
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Nome da art"
                  name="username"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <input className="form-control base-input" type="text" />
              </div>

              <div>
                <input className="form-control base-input" type="text" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  className="form-control base-input h-auto"
                  name=""
                  rows={10}
                />
              </div>
            </div>
          </div>

          <div className="tattoo-crud-buttons-container">
            <button className="btn btn-outline-danger tattoo-crud-button">
              CANCELAR
            </button>
            <button className="btn btn-primary tattoo-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
