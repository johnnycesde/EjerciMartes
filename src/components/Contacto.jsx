import "./Contacto.css";
import Select from "../Select";
import Option from "./Option";
const Contacto = () => {
  let select = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let option = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <main className="contact">
      <h2>Contactos</h2>
      <div className="contactos">
        <div className="select">
          {select.map((item) => (
            <Select />
          ))}
        </div>
        <div className="option">
          {option.map((item) => (
            <Option />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contacto;
