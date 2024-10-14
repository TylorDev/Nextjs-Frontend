import "./Styles.scss";

export default function Home() {
  return (
    <div className={"hello"}>
      <label htmlFor="username">Nombre de usuario</label>
      <input
        type="text"
        id="username"
        placeholder="Introduce tu nombre de usuario"
        title="Nombre de usuario"
      />
    </div>
  );
}
