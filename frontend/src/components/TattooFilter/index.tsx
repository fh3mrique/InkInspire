import "./styles.css";
import SearchIcon from "../../assets/img/search-icon.svg";
import { Controller, useForm } from "react-hook-form";
import Select, { GroupBase, StylesConfig } from "react-select";
import { Style } from "../../types/style";
import { useEffect, useState } from "react";
import { requestBackend } from "../../utils/request";

type TattooFilterData = {
  name: String;
  style: Style;
};

const TattooFilter = () => {
  const { register, handleSubmit, control } = useForm<TattooFilterData>();

  const [selectStyles, setSelectStyles] = useState<Style[]>([]);

  const onSubmit = (formData: TattooFilterData) => {
    console.log("ENVIOU", formData);
  };

  useEffect(() => {
    requestBackend({ url: "/styles" }).then((response) => {
      setSelectStyles(response.data);
    });
  }, []);

  return (
    <div className="base-card tatoo-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="tattoo-filter-form">
        <div className="tattoo-filter-name-container">
          <input
            {...register("name")}
            type="text"
            className={"form-control"}
            placeholder="Nome da art"
            name="name"
          />
          <button>
            <img src={SearchIcon} alt="" />
          </button>
        </div>

        <div className="tattoo-filter-bottom-container">
          <div className="tattoo-filter-styles-container">
            <Controller
              name="style"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectStyles}
                  isClearable
                  classNamePrefix="tattoo-crud-select"
                  getOptionLabel={(style: Style) => style.name}
                  getOptionValue={(style: Style) => String(style.id)}
                />
              )}
            />
          </div>
          <button className="btn btn-outline-secondary">Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default TattooFilter;
