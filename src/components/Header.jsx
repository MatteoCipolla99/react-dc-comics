import navBarData from "../data/navBarData";

export default function Header() {
  return (
    <div className="container">
      <img className="logo-dc" src="./img/dc-logo.png" alt="logo-dc"></img>
      <nav className="nav-bar">
        <ul>
          {navBarData.map((navBar) => {
            return (
              <li key={navBarData.id} className={navBar.current ? "line" : ""}>
                <a href={navBar.url}>{navBar.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
