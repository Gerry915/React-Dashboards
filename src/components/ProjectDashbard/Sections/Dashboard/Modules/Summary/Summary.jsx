import { SummaryItem } from "./Modules/SummaryItem";
import '../../../../../../style/ProjectDashboard/projectDash.scss'

const summaryItem = [
  {
    title: "Sessions",
    value: "24k",
    summary: "+33.45%",
  },
  {
    title: "Avg. Sessions",
    value: "00:18",
    summary: "-123.45%",
  },
  {
    title: "Bounce Rate",
    value: "$2400",
    summary: "+62.45%",
  },
  {
    title: "Avg. Wath time",
    value: "45.21",
    summary: "+3.45%",
  },
];

export const Summary = () => {
  return (
    <div className="summary-row">
      {summaryItem.map((item) => (
        <SummaryItem
          title={item.title}
          value={item.value}
          summary={item.summary}
        />
      ))}
    </div>
  );
};
