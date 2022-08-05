//Gráfico de linha com as informações históricas de disponibilidade, eficiencia e status da máquina selecionada
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Temperaturas",
    "Esteira",
    "Incinerador",
    "Pré-Zona 1",
    "Pré-Zona 2",
    "Zona 1",
    "Zona 2",
    "Zona 3",
    "Zona 4",
    "Zona 5"
  ],
  [1, 116, 550, 680, 800, 1050, 1117, 1120, 1119, 1115],
  [2, 114, 547, 675, 802, 1080, 1110, 1118, 1112, 1111],
  [3, 118, 555, 690, 790, 1100, 1115, 1120, 1115, 1115],
  [4, 116, 550, 680, 800, 1050, 1117, 1120, 1119, 1115],
  [5, 114, 547, 675, 802, 1080, 1110, 1118, 1112, 1111],
  [6, 118, 555, 690, 790, 1100, 1115, 1120, 1115, 1115],
  [7, 116, 550, 680, 800, 1050, 1117, 1120, 1119, 1115],
  [8, 114, 547, 675, 802, 1080, 1110, 1118, 1112, 1111],
  [9, 118, 555, 690, 790, 1100, 1115, 1120, 1115, 1115],
  [10, 116, 550, 680, 800, 1050, 1117, 1120, 1119, 1115],
  [11, 114, 547, 675, 802, 1080, 1110, 1118, 1112, 1111],
  [12, 118, 555, 690, 790, 1100, 1115, 1120, 1115, 1115],
  [13, 116, 550, 680, 800, 1050, 1117, 1120, 1119, 1115],
  [14, 114, 547, 675, 802, 1080, 1110, 1118, 1112, 1111],
 

];

export const options = {
  chart: {
    title: "Histórico Temperaturas",
    fontSize: "15",
    titleColor: "#1976D2",
    backgroundColor: '#F8F9FA',
    chartArea: { width: "90%", height: "70%" },
  
  },
};

export function FurnaceHistoricalLineChart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}