import S from "./index.module.scss";

export const CustomInput = () => {
  return (
    <div className={S.root}>
      <label htmlFor="custom-input" className={S.root_label}>
        Custom
      </label>
      <input type="number" id="custom-input" className={S.root_input} />
    </div>
  );
};
