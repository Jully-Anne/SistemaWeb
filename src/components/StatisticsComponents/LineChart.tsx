import { Chart } from "react-google-charts";

export const data = [
  ["Tempo", "Produtividade", "Produção"],
  ["08:00", 1000, 400],
  ["09:00", 1170, 460],
  ["10:00", 660, 1120],
  ["11:00", 1030, 540],
];

export const options = {
  title: "PRODUTIVIDADE-PRODUÇÃO",
  fontSize: "15",
  titleColor: "#1976D2",
  curveType: "function",
  backgroundColor: '#F8F9FA',
  legend: { position: "bottom" },
  chartArea: { width: "85%", height: "70%"},
  colors: ['#10215F', '#0060FF', '#1AC640'],

};
export const style = {
  maxWidth: '100%'
}

export function LineChart() {
  return (
  
    <Chart
      chartType="LineChart"
      width="98%"
      height="20rem"
      data={data}
      options={options}
      style = {style}
    />
  );
}
