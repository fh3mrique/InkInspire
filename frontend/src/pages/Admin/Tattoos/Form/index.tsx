import "./styles.css";

const Form = () => {
  return (
    <div className="tattoo-crud-container">
      <div className=" tattoo-crud-form-card">
        <h1 className="tattoo-crud-form-title">Dados da Tatuagem</h1>

        <form action="">
          <div className="row">
            <div className="col-lg-6">
              <input className="form-control base-input" type="text" />
              <input className="form-control base-input" type="text" />
              <input className="form-control base-input" type="text" />
            </div>
            <div className="col-lg-6">
              <textarea className="form-control base-input" name="" rows={10}></textarea>
            </div>
          </div>

          <div>
            <button className="btn btn-outline-danger">CANCELAR</button>
            <button className="btn btn-primary">SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
