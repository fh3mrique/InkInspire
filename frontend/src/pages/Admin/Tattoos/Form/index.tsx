import { useForm, Controller } from "react-hook-form";
import "./styles.css";
import { Tattoo } from "../../../../types/Tattoo";
import { requestBackend } from "../../../../utils/request";
import { AxiosRequestConfig } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Select, { GroupBase, StylesConfig } from "react-select";
import { Style } from "../../../../types/style";
import CurrencyInput from "react-currency-input-field";

type UrlParams = {
  tattooId: string;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<Tattoo>();

  const [selectStyles, setSelectStyles] = useState<Style[]>([]);

  const customStyles: StylesConfig<Style, false, GroupBase<Style>> = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "black" : "black",
    }),
  };

  const navigate = useNavigate();

  const { tattooId } = useParams<UrlParams>();

  const isEditing = tattooId !== "create";

  useEffect(() => {
    requestBackend({ url: "/styles" }).then((response) => {
      setSelectStyles(response.data);
    });
  }, []);

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

  const onSubmit = (formData: Tattoo) => {

    const requesthandled = {...formData, price : String(formData.price).replace(',', '.')}

    const config: AxiosRequestConfig = {
      method: isEditing ? "PUT" : "POST",
      url: isEditing ? `/tattoo/${tattooId}` : `/tattoo`,
      data: requesthandled,
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
                <Controller
                  name="style"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectStyles}
                      classNamePrefix="tattoo-crud-select"
                      getOptionLabel={(style: Style) => style.name}
                      getOptionValue={(style: Style) => String(style.id)}
                      styles={customStyles}
                    />
                  )}
                />

                {errors.style && (
                  <div className="invalid-feedback d-block">
                    Campo obrigatório
                  </div>
                )}
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register("artUrl", {
                    required: "Campo obrigatório",
                    pattern: {
                      value:
                        /^(?:https?:\/\/)?(?:www\.)?[\w\.-]+\.\w{2,}(?:\/\S*)?$/,
                      message: "Deve ser uma url válida",
                    },
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Url da arte"
                  name="artUrl"
                />
                <div className="invalid-feedback d-block">
                  {errors.artUrl?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
              <Controller
                  name="price"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <CurrencyInput
                      placeholder="Preço"
                      className={`form-control base-input ${
                        errors.price ? "is-invalid" : ""
                      }`}
                      decimalScale={2}
                      /* disableGroupSeparators={true} */
                      /* prefix="$" */
                      value={field.value}
                      onChange={field.onChange}
                      /* type="number" */

                    />
                  )}/>
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </div>

              {/* <div className="margin-bottom-30">
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
              </div> */}
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
