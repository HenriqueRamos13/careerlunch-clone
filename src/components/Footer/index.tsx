import RoundedBadge from "../RoundendBadge";

interface Props {
  onClick?: () => void;
}

const Footer: React.FC<Props> = ({ onClick }) => {
  return (
    <footer className="w-full mt-8 pb-8 flex md:flex-row flex-col justify-between flex-wrap items-center gap-8 md:gap-0">
      <img
        src="https://career-lunch-storage.s3.eu-central-1.amazonaws.com/v2/layout/logo-mini-color.svg"
        width="40"
        className="StyledBox-sc-qq8vs4-0 jYEooS"
        alt="mini logo"
      />
      <div className="flex flex-col items-center md:items-start">
        <p className="text-md text-secondary">hello@careerlunch.com</p>
        <p className="text-gray-900 text-md">
          Bahnhofstrasse 2 | 6060 Sarnen | Switzerland
        </p>
      </div>
      <div className="flex flex-row items-center gap-8">
        <RoundedBadge>
          <i className="fa fa-linkedin" style={{ fontSize: 20 }}></i>
        </RoundedBadge>
        <RoundedBadge>
          <i className="fa fa-facebook" style={{ fontSize: 20 }}></i>
        </RoundedBadge>
        <RoundedBadge>
          <i className="fa fa-twitter" style={{ fontSize: 20 }}></i>
        </RoundedBadge>
        <RoundedBadge>
          <i className="fa fa-instagram" style={{ fontSize: 20 }}></i>
        </RoundedBadge>
      </div>
      <div></div>
      <div></div>
      <p className="text-xs text-gray-400">© 2022 CareerLunch AG</p>
    </footer>
  );
};

export default Footer;
