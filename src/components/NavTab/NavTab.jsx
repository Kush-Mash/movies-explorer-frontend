function NavTab() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <a className="each-link nav__link" href="#project">
            О&nbsp;проекте
          </a>
        </li>
        <li>
          <a className="each-link nav__link" href="#techs">
            Технологии
          </a>
        </li>
        <li>
          <a className="each-link nav__link" href="#me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
