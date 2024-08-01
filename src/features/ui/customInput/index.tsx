import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import S from "./index.module.scss";
import clsx from "clsx";
import { ITipDataProps } from "@features/layout";

interface IProps {
  data: ITipDataProps;
  setData: Dispatch<SetStateAction<ITipDataProps>>;
}

export const CustomInput: FC<IProps> = ({ data, setData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (setData) {
      setData((prevData) => ({
        ...prevData,
        tip: isNaN(value) ? null : value,
      }));
    }
  };

  return (
    <div className={clsx(S.root, data?.tip !== null && S.active)}>
      <label htmlFor="custom-input" className={S.label}>
        Custom
      </label>
      <input
        type="number"
        id="custom-input"
        className={S.root_input}
        value={data?.tip !== null ? data?.tip : ""}
        onChange={handleChange}
        aria-label="Custom Input"
        min="0"
        placeholder="Enter custom tip"
      />
    </div>
  );
};
