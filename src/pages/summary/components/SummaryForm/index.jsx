import { useState } from "react";
export default function SummaryForm() {
  const [checked, setChecked] = useState(false);
  const [isOver, setIsOver] = useState(false);

  return (
    <form>
      <div
        style={{ position: "relative" }}
        onMouseOver={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      >
        <label htmlFor="agree-checkbox">약관동의</label>
        <input
          type="checkbox"
          id="agree-checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {isOver && (
          <div>
            <p>주문을 완료해도 배달되지 않습니다.</p>
          </div>
        )}
      </div>
      <div>
        <button type="submit" disabled={!checked}>
          주문
        </button>
      </div>
    </form>
  );
}
