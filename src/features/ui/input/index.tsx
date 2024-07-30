import S from "./index.module.scss";
import dollar from "@assets/icon-dollar.svg";

export const BillInput = () => {
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
        />
      </div>
    </div>
  );
};
