import { ITipDataProps } from "@features/layout";
import S from "./index.module.scss";
import dollar from "@assets/icon-dollar.svg";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface IProps {
  data: ITipDataProps;
  setData: Dispatch<SetStateAction<ITipDataProps>>;
}

export const BillInput: FC<IProps> = ({ data, setData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, bill: parseFloat(e.target.value) }));
  };
  return (
    <div className={S.bill}>
      <label htmlFor="bill" className={S.bill_label}>
        Bill
      </label>
      <div className={S.bill_input}>
        <img src={dollar} alt="Dollar sign icon" />
        <input
          id="bill"
          type="number"
          name="bill"
          placeholder="0"
          aria-label="Bill amount"
          value={data.bill ? data.bill : ""}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};
