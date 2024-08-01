import { CustomInput, TipButton } from "@features/ui";
import S from "./index.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
import { ITipDataProps } from "..";

interface IProps {
  data: ITipDataProps;
  setData: Dispatch<SetStateAction<ITipDataProps>>;
}

export const buttons = [
  {
    title: "5%",
    value: 5,
  },
  {
    title: "10%",
    value: 10,
  },
  {
    title: "15%",
    value: 15,
  },
  {
    title: "25%",
    value: 25,
  },
  {
    title: "50%",
    value: 50,
  },
];

const TipPanel: FC<IProps> = ({ data, setData }) => {
  const handleChange = (tip: number) => {
    setData((prevData) => ({ ...prevData, tip: tip }));
  };

  return (
    <div className={S.root} aria-labelledby="tip-title">
      <span id="tip-title" className={S.root_title}>
        Select Tip %
      </span>
      <div className={S.root_panel}>
        {buttons.map((button, index) => (
          <TipButton
            key={index}
            title={button.title}
            value={button.value}
            active={button.value === data.tip}
            setValue={handleChange}
            ari-label={`Tip ${button.value}%`}
          />
        ))}
        <CustomInput />
      </div>
    </div>
  );
};

export default TipPanel;
