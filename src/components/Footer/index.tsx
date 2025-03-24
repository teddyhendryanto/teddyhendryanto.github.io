import moment from 'moment';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-3">
      <Container>
        <div className="d-flex flex-column justify-content-center">
          © Copyright {moment().format('YYYY')} teddyhendryanto. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
