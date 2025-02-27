export function Cursos({ title, lista, button, img }) {
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {lista && lista.map((item, index) => (
            <li key={index}>
              <img src="/src/assets/Check.png" alt="check" /> {item}
            </li>
          ))}
        </ul>
        <button>{button}</button>
        <img src={img} alt="imagen" />
      </div>
    );
  }