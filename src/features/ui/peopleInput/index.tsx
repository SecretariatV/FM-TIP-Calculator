import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import S from "./index.module.scss";
import person from "@assets/icon-person.svg";
import { ITipDataProps } from "@features/layout";
import clsx from "clsx";

interface IProps {
  data: ITipDataProps;
  setData: Dispatch<SetStateAction<ITipDataProps>>;
}

export const PeopleInput: FC<IProps> = ({ data, setData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, person: parseInt(e.target.value) }));
  };

  return (
    <div className={S.root}>
      <div className={S.root_label}>
        <label htmlFor="people" className={S.root_title}>
          Number of People
        </label>
        {!data.person && (
          <span className={S.root_label_error} id="people-error" role="alert">
            Can't be zero
          </span>
        )}
      </div>
      <div className={clsx(S.root_input, !data.person && S.active)}>
        <img src={person} alt="Person Icon" />
        <input
          type="number"
          name="people"
          id="people"
          placeholder="0"
          aria-label="Number of People"
          aria-describedby={data.person === 0 ? "people-error" : undefined}
          aria-invalid={data.person === 0}
          value={data.person ? data.person : ""}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};
