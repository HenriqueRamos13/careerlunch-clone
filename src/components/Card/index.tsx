import Image from "next/image";
import Badge from "../Badges";

interface Props {
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full md:w-[240px] md:h-[464px] rounded-3xl shadow-xl shadow-gray-300 hover:shadow-gray-400 border-[1px] border-t-white border-l-white border-r-gray-500 border-b-gray-400 bg-primary"
    >
      <div className="w-full h-full rounded-3xl text-sm shadow-inner bg-white relative">
        <Image
          layout="responsive"
          width={240}
          height={240}
          objectFit="cover"
          src={"/assets/bg2.jpeg"}
          className="h-[80%] md:h-[50%] w-full rounded-3xl"
          alt="Bg Card"
        />
        <div className="h-[20%] md:h-[50%] w-full" />
        <div className="rounded-3xl w-full h-[65%] md:h-[320px] bg-primary absolute bottom-0 left-0 flex flex-col justify-between p-4 pt-8">
          <div className="relative h-[20px] w-[120px]">
            <Image
              layout="responsive"
              width={120}
              height={20}
              src={"/assets/logo.png"}
              className="w-[40%] md:w-[70%]"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col w-full items-start gap-2">
            <b className="font-bold">Groupe Mutuel</b>
            <p className="text-left">
              Wir sind im Bereich der Krankenversicherung führend in der
              Schweiz. // Nous sommes un des leaders suisses de
              lassurance-maladie.
            </p>
          </div>
          <div className="flex flex-row w-full gap-2">
            <Badge text="London" />
            <Badge text="Virtual" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
