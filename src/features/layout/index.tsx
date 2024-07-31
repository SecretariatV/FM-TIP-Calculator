import { BillInput } from "@features/ui";
import S from "./index.module.scss";
import TipPanel from "./tipPanel";

const MainCard = () => {
  return (
    <section className={S.root}>
      <div className={S.root_control}>
        <BillInput />
        <TipPanel />
      </div>
      <div className={S.root_view}></div>
    </section>
  );
};

export default MainCard;
