import React from "react";
import { LiquidChart, LiquidChartProps } from "@opd/g2plot-react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const config: LiquidChartProps = {
    padding: 0,
    percent: 0.88,
    autoFit: true
    
}

export default () => (
    <section style = {{height:"100vh"}}>
        <LiquidChart {...config} style = {{height:"100vh"}}/>
    </section>
  );