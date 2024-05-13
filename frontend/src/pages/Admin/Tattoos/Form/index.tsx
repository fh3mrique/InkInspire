import { useForm } from "react-hook-form";
import "./styles.css";
import { Tattoo } from "../../../../types/Tattoo";
import { BASE_URL, requestBackend } from "../../../../utils/request";
import { AxiosRequestConfig } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type UrlParams = {
  tattooId: string;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Tattoo>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/tattoo/${tattooId}` }).then((response) => {
        const tattoo = response.data as Tattoo;

        setValue("name", tattoo.name);
        setValue("price", tattoo.price);
        setValue("artUrl", tattoo.artUrl);
        setValue("artist", tattoo.artist);
        setValue("style", tattoo.style);
        setValue("description", tattoo.description);
      });
    }
  }, [setValue]);

  const navigate = useNavigate();

  const { tattooId } = useParams<UrlParams>();

  const isEditing = tattooId !== "create";

  const onSubmit = (formData: Tattoo) => {
    const dataf = {
      ...formData,
      artUrl: isEditing ? formData.artUrl : "https://i.pinimg.com/564x/b2/1f/91/b21f911c32aa6f11da75d70038f4f0ac.jpg",
      style: isEditing
        ? formData.style
        : {
            id: 1,
          },

      artist: {
        id: 2,
        name: "ARTISTA 2",
      },
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? "PUT" : "POST",
      url: isEditing ? `/tattoo/${tattooId}` : `/tattoo`,
      data: dataf,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      console.log(response.data);
      navigate("/admin/tattoo");
    });
  };

  const handleCancel = () => {
    navigate("/admin/tattoo");
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
                  name="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register("price", {
                    required: "Campo obrigatório",
                  })}
                  type="number"
                  className={`form-control base-input ${
                    errors.price ? "is-invalid" : ""
                  }`}
                  placeholder="Preço da Art"
                  name="price"
                />
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div>
                <textarea
                  rows={10}
                  {...register("description", {
                    required: "Campo obrigatório",
                  })}
                  className={`form-control base-input h-auto ${
                    errors.price ? "is-invalid" : ""
                  }`}
                  placeholder="Descrição da Art"
                  name="description"
                />
                <div className="invalid-feedback d-block">
                  {errors.description?.message}
                </div>
              </div>
            </div>
          </div>

          <div className="tattoo-crud-buttons-container">
            <button
              className="btn btn-outline-danger tattoo-crud-button"
              onClick={handleCancel}
            >
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
