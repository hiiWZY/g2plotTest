import React from "react";
import { LiquidChart, LiquidChartProps } from "@opd/g2plot-react";

const config: LiquidChartProps = {
    padding: 0,
    percent: 0.88,
    autoFit: true
}

export default () => (
    <section>
        <LiquidChart {...config} />
    </section>

  );