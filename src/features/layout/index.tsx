import { BillInput } from "@features/ui";
import S from "./index.module.scss";

const MainCard = () => {
  return (
    <section className={S.root}>
      <div className={S.root_control}>
        <BillInput />
      </div>
      <div className={S.root_view}></div>
    </section>
  );
};

export default MainCard;
