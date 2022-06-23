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
  legend: { position: "bottom" },
  chartArea: { width: "100%", height: "80%"},

};
export const style = {
  maxWidth: '100%',
}

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="22rem"
      data={data}
      options={options}
      style = {style}
    
     
    />
  );
}
