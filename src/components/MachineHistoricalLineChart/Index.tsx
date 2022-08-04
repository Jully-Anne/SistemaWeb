//Gráfico de linha com as informações históricas de disponibilidade, eficiencia e status da máquina selecionada
import { Chart } from "react-google-charts"

export const data = [
  ["Tempo", "Disponibilidade", "Eficiência", "Status"],
  ["08:00", 1000, 400, 1000],
  ["09:00", 1170, 460, 1000],
  ["10:00", 660, 1120, 1000],
  ["11:00", 1030, 540, 1000],
];

export const options = {
  title: "DISPONIBILIDADE-EFICIÊNCIA-STATUS",
  fontSize: "15",
  titleColor: "#1976D2",
  curveType: "function",
  backgroundColor: '#F8F9FA',
  legend: { position: "bottom" },
  colors: ['#10215F', '#0060FF', '#1AC640'],
  chartArea: { width: "90%", height: "70%" },

};
export const style = {
  maxWidth: '100%'
}

export function MachineHistoricalLineChart() {
  return (

    <Chart
      chartType="LineChart"
      width="98%"
      height="20rem"
      data={data}
      options={options}
      style={style}
    />
  );
}

