import ActiveLink from '../../directives/ActiveLink';
const NavComponent = () => (
  <nav>
    <ul className="navCss.nav-header">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/card/card-list">
          <a className="nav-link">Card List</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/mqtt/mqtt">
          <a className="nav-link">Mqtt</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
)

export default NavComponent;
