import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerData } from "./data/footerData";
import { footerSocials } from "./data/footerSocials";

function Footer() {
  return (
    <footer>
      <div className="bg-[#0a3e4b] text-slate-300 py-12 md:py-16 2xl:py-36 rounded-t-3xl">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-y-12 flex-wrap justify-between px-6">
          <h1 className="lg:w-2/5 text-slate-100 self-start md:self-center serif text-3xl lg:text-4xl">
            <a href="/">Arctic Travels</a>
          </h1>
          <ul className="w-full lg:w-3/5 text-slate-300 flex flex-row flex-wrap lg:flex-nowrap gap-y-12 md:gap-3 items-start justify-between">
            {footerData.map((data, index) => (
              <li
                key={index}
                className="w-1/2 md:w-36 lg:w-48 flex flex-col gap-3"
              >
                <h2 className="font-bold text-lg">{data.title}</h2>
                <ul>
                  {data.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.linkURL}>{link.linkName}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#08313a] text-slate-400 py-6 md:py-9 lg:py-6">
        <div className="max-w-screen-2xl mx-auto px-6 flex flex-row justify-between items-center">
          <p className="text-sm max-w-40 sm:max-w-full">
            Copyright &copy; 2024, Arctic Travels. All rights reserved.
          </p>
          <ul className="flex flex-row gap-4 md:gap-6">
            {footerSocials.map((social, index) => (
              <li key={index}>
                <a href={social.linkURL} aria-label={social.linkName}>
                  <FontAwesomeIcon
                    icon={social.linkIcon}
                    size="lg"
                    className="hover:text-slate-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
