import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="bg-[#0a3e4b] text-slate-300 py-12 md:py-24 2xl:py-36">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-12 flex-wrap justify-between px-6">
          <h1 className="self-start md:self-center serif text-3xl lg:text-4xl">
            <a href="/">Arctic Travels</a>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg">Sitemap</h2>
              <ul>
                <li>
                  <a href="#regions">Regions</a>
                </li>
                <li>
                  <a href="#lodging">Lodging</a>
                </li>
                <li>
                  <a href="#resorts">Resorts</a>
                </li>
                <li>
                  <a href="#passes">Passes</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg">About</h2>
              <ul>
                <li>
                  <a href="/">How to Book</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Affiliate Partner Program</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg">Contact</h2>
              <ul>
                <li>
                  <a href="/">(123) 456-7890</a>
                </li>
                <li>
                  <a href="/">hello@arctictravels.com</a>
                </li>
                <li>
                  5865 Dan Extension, Jennellview, <br /> MO 12098-8714
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg">Legal</h2>
              <ul>
                <li>
                  <a href="/">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/">Privacy Notice</a>
                </li>
                <li>
                  <a href="/">
                    <span>Arctic Travels</span> for Corporate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#08313a] text-slate-300 py-6 md:py-12 lg:py-6">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-row justify-between items-center">
          <p>&copy; Arctic Travels, 2024</p>
          <ul className="flex flex-row gap-6">
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li>
              <a href="/"></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
