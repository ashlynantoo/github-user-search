import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ExampleChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        subCaption: "in %",
        xAxisName: "Languages",
        yAxisName: "Usage (%)",
        numberSuffix: "%",
        theme: "fusion",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ExampleChart;
