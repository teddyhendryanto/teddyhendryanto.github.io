import moment from 'moment';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-3 bg-gray-50">
      <Container>
        <div className="d-flex flex-column justify-content-center">
          <div className="body-sm">
            © {moment().format('YYYY')} teddyhendryanto. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
