import { TipButton } from "@features/ui";
import S from "./index.module.scss";
import { useState } from "react";

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

const TipPanel = () => {
  const [tip, setTip] = useState<number>(0);

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
            active={button.value === tip}
            setValue={setTip}
            ari-label={`Tip ${button.value}%`}
          />
        ))}
        <CustomInput />
      </div>
    </div>
  );
};

export default TipPanel;
