import classNames from 'classnames/bind';
import { LucideCode } from 'lucide-react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <Navbar className={cx('Header', 'bg-blur')} fixed="top">
      <Container>
        <NavbarBrand href="/">
          <LucideCode />
        </NavbarBrand>
        <Nav className="float-end">
          <div className="d-flex gap-20px">
            <NavLink href="#experience">Experiences</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
