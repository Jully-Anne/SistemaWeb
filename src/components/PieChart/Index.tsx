//Gráfico de pizza com informações de porcentagem em relação ao tempo de disponibilidade da máquina selecionada
import { Chart } from "react-google-charts"

export const data = [
  ["Task", "Hours per Day"],
  ["Produzindo", 15],
  ["Parada", 2],
  ["Sem Programação", 2],
  ["Sem Dados", 2],
];

export const options = {
  title: "DISPONIBILIDADE",
  pieHole: 0.4,
  fontSize: "15",
  titleColor: "#1976D2",
  backgroundColor: '#F8F9FA',
  colors: ["#1AC640", "#FF0000", "#808080", "#1C1C1C"],
  legend: { position: "bottom" },
  chartArea: { width: "80%", height: "80%" }
};


export function PieChart() {
  return (

    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="20rem"

    />
  );
}