export default function Header() {
  return (
    <div className="container">
      <img className="logo-dc" src="./img/dc-logo.png" alt="logo-dc"></img>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#">CHARACTERS</a>
          </li>
          <li>
            <a id="button" href="#">
              COMICS
            </a>
            <hr class name="line"></hr>
          </li>
          <li>
            <a href="#">MOVIES</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">GAMES</a>
          </li>
          <li>
            <a href="#">COLLECTIBLES</a>
          </li>
          <li>
            <a href="#">VIDEOS</a>
          </li>
          <li>
            <a href="#">FANS</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
