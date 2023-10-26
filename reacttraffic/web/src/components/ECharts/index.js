import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import 'echarts-wordcloud';

import {
  Bar3DChart,
  Line3DChart,
  Scatter3DChart,
  Lines3DChart,
  Polygons3DChart,
  SurfaceChart,
  Map3DChart,
  ScatterGLChart,
  GraphGLChart,
  FlowGLChart,
  LinesGLChart,
} from "echarts-gl/charts";

import {
  Grid3DComponent,
  Geo3DComponent,
  GlobeComponent,
  Mapbox3DComponent,
  Maptalks3DComponent,
} from "echarts-gl/components";

import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
} from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  LegendComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,
  DatasetComponent,
} from "echarts/components";
import themeConfig from "./theme";

echarts.registerTheme("dark", themeConfig.dark);
echarts.registerTheme("light", themeConfig.light);

echarts.use([
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  LegendComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,
  DatasetComponent,
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,

  Grid3DComponent,
  Geo3DComponent,
  GlobeComponent,
  Mapbox3DComponent,
  Maptalks3DComponent,
  Bar3DChart,
  Line3DChart,
  Scatter3DChart,
  Lines3DChart,
  Polygons3DChart,
  SurfaceChart,
  Map3DChart,
  ScatterGLChart,
  GraphGLChart,
  FlowGLChart,
  LinesGLChart,
  CanvasRenderer,

]);


class EChartV5 extends Component {
  render() {
    const { config, loading, height, theme } = this.props;

    return (
      <ReactEChartsCore
        id={`piechart-${moment().format("YYYYMMDDhhmmmss")}`}
        style={{ height, width: "100%" }}
        echarts={echarts}
        option={config}
        notMerge={true}
        lazyUpdate={true}
        showLoading={loading}
        theme={theme ? "dark" : "light"}
      />
    );
  }
}

EChartV5.defaultProps = {
  loading: false,
  height: 500,
  theme: false,
  config: {
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  },
};

EChartV5.propTypes = {
  config: PropTypes.object,
  height: PropTypes.number,
  loading: PropTypes.bool,
  theme: PropTypes.bool,
};

export default EChartV5;
