import { FC } from "react";
import S from "./index.module.scss";

interface IProps {
  title: string;
  amount: number;
}

export const DetailView: FC<IProps> = ({ title, amount }) => {
  return (
    <div className={S.root}>
      <span className={S.root_title} aria-label="Detail Title">
        {title}
      </span>
      <p className={S.root_detail}>/ person</p>
      <h3 className={S.root_amount} aria-label="Amount">
        ${amount.toFixed(2)}
      </h3>
    </div>
  );
};
