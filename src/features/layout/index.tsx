import { BillInput, DetailView } from "@features/ui";
import S from "./index.module.scss";
import TipPanel from "./tipPanel";
import { PeopleInput } from "@features/ui/peopleInput";
import { useEffect, useState } from "react";
import clsx from "clsx";

export interface ITipDataProps {
  bill: number | null;
  tip: number | null;
  person: number | null;
}

const MainCard = () => {
  const [tipData, setTipData] = useState<ITipDataProps>({
    bill: null,
    tip: null,
    person: null,
  });

  const [tip, setTip] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let tempData = 0;
    if (tipData.bill && tipData.tip) {
      tempData = (tipData.bill / 100) * tipData.tip;
    }

    if (tempData) {
      setTip(tempData);

      if (tipData.person) {
        setTotal(tempData * tipData.person);
      } else {
        setTotal(0);
      }
    } else {
      setTip(0);
      setTotal(0);
    }
  }, [tipData]);

  const handleReset = () => {
    setTipData({ bill: 0, tip: 0, person: 0 });
  };

  return (
    <section className={S.root} aria-labelledby="main-card-title">
      <h1 id="main-card-title" className={S.root_none}>
        Main Card
      </h1>
      <div className={S.root_control}>
        <BillInput data={tipData} setData={setTipData} />
        <TipPanel data={tipData} setData={setTipData} />
        <PeopleInput data={tipData} setData={setTipData} />
      </div>
      <div className={S.root_view}>
        <div className={S.root_view_grid}>
          <DetailView title="Tip Amount" amount={tip} />
          <DetailView title="Total" amount={total} />
        </div>
        <button
          className={clsx(S.root_reset, tip !== 0 && S.active)}
          onClick={handleReset}
          aria-live="polite"
        >
          RESET
        </button>
      </div>
    </section>
  );
};

export default MainCard;
