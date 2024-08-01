import { FC } from "react";
import S from "./index.module.scss";
import clsx from "clsx";

interface IProps {
  title: string;
  value: number;
  active: boolean;
  setValue: (data: number) => void;
}

export const TipButton: FC<IProps> = ({ title, value, active, setValue }) => {
  return (
    <button
      className={clsx(S.root, active && S.active)}
      aria-label={`Tip ${value}%`}
      onClick={() => setValue(value)}
    >
      <span className={S.title}>{title}</span>
    </button>
  );
};
