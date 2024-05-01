import "./styles.css";

const Form = () => {
  return (
    <div className="tattoo-crud-container">
      <div className=" tattoo-crud-form-card">
        <h1 className="tattoo-crud-form-title">Dados da Tatuagem</h1>

        <form action="">
          <div className="row tattoo-crud-inputs-container">
            <div className="col-lg-6 tattoo-crud-inputs-left">
              <div className="margin-bottom-30">
                <input className="form-control base-input" type="text" />
              </div>
              <div className="margin-bottom-30">
                <input className="form-control base-input" type="text" />
              </div>

              <div>
                <input className="form-control base-input" type="text" />
              </div>
            </div>
            <div className="col-lg-6">
              <textarea
                className="form-control base-input"
                name=""
                rows={10}
              ></textarea>
            </div>
          </div>

          <div className="tattoo-crud-buttons-container">
            <button className="btn btn-outline-danger">CANCELAR</button>
            <button className="btn btn-primary">SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
