import { useState } from "react";
import S from "./index.module.scss";
import clsx from "clsx";

export const CustomInput = () => {
  const [value, setValue] = useState<number>();
  return (
    <div className={clsx(S.root, value && S.active)}>
      <label htmlFor="custom-input" className={S.label}>
        Custom
      </label>
      <input
        type="number"
        id="custom-input"
        className={S.root_input}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        aria-label="Custom Input"
      />
    </div>
  );
};
