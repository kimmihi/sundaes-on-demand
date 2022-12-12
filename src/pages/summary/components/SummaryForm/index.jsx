import { useState } from "react";
export default function SummaryForm() {
  const [checked, setChecked] = useState(false);
  return (
    <form>
      <div>
        <label htmlFor="agree-checkbox">약관동의</label>
        <input
          type="checkbox"
          id="agree-checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
      <div>
        <button type="submit" disabled={!checked}>
          주문
        </button>
      </div>
    </form>
  );
}
