import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top shadow-lg bg-light">
      <div className="col-md-4 d-flex align-items-center">
        <span className="text-muted">
          Created by Moti Hemo &copy; {new Date().getFullYear()}
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://www.facebook.com/elinor.karni"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="mx-2 fa-2xl text-primary rounded"
            />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://instagram.com/e.k_flowers?r=nametag"
          >
            <FontAwesomeIcon
              className="mx-2 fa-2xl text-light rounded instegram"
              icon={faInstagram}
            />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="https://wa.me/0523711115">
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className="mx-2 fa-2xl text-success rounded"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
