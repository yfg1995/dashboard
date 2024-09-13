import { FC, useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { formatNumberWithCommas } from "../helpers/helpers";

export interface ISmoothedLineChart {}

export const SmoothedLineChart: FC<ISmoothedLineChart> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.EChartsType | null>(null);
  const isFirstRender = useRef(true);

  const [tooltipEnabled, setTooltipEnabled] = useState(true);

  const toggleTooltip = () => {
    setTooltipEnabled(!tooltipEnabled);
  };

  useEffect(() => {
    if (ref.current) {
      if (chartRef.current) {
        chartRef.current.dispose();
      }

      const chart = echarts.init(ref.current);
      chartRef.current = chart;

      const { innerWidth } = window;

      const getResponsiveLabel = () => {
        if (innerWidth < 500) {
          return {
            fontSize: 14,
            padding: [0, 12, 0, 0],
          };
        } else {
          return {
            fontSize: 16,
            padding: [0, 12, 0, 0],
          };
        }
      };

      const option = {
        grid: {
          height: "180px",
          top: "14%",
          left: "7%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          backgroundColor: "transparent",
          textStyle: {
            color: "#fff",
          },
          show: tooltipEnabled,
          borderWidth: 0,
          formatter: function (params: any) {
            const dataPoint = params[1];
            if (dataPoint) {
              return `<div class="rounded-xl text-brandTextGray overflow-hidden flex flex-col justify-center items-center">
                        <div class="flex items-center text-center w-full text-sm justify-between px-3 py-2 bg-[#1d1d1d]">
                          Revenue
                        </div>

                        <div class="text-center w-full p-3 bg-[#252525]">
                          <div class="text-white font-bold text-lg">$${formatNumberWithCommas(
                            dataPoint.value
                          )}</div>
                          <div>Revenue from 230 sales</div>
                        </div>
                      </div>
              `;
            }
            return "";
          },
        },
        xAxis: {
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "var(--clr-charcoal-grey)",
              width: 1,
            },
          },
          data: [
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
          ],
          boundaryGap: false,
          axisLabel: {
            fontSize: 15,
            padding: [8, 0, 0, 0],
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#333",
              width: 6,
            },
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisLabel: getResponsiveLabel(),
        },
        series: [
          {
            data: [
              850.42, 1700.11, 1500.68, 2050.75, 700.46, 1450.21, 2500.88,
              1550.64, 700.43,
            ],
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#333",
              width: 3,
              type: "dashed",
            },
            showSymbol: false,
            z: 1,
          },
          {
            data: [
              800.54, 2250.86, 800.36, 1150.94, 700.06, 750.45, 2000.75, 700.43,
              1500.31,
            ],
            type: "line",
            smooth: true,
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#42c2dd" },
                { offset: 1, color: "#2f49d0" },
              ]),
              width: 4,
            },

            emphasis: {
              itemStyle: {
                color: "#334ed8",
                borderWidth: 2,
                borderColor: "#fff",
              },
              symbolSize: 20,
            },
            showSymbol: false,
            z: 2,
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => {
        if (!isFirstRender.current) {
          chart.resize();
        } else {
          isFirstRender.current = false;
        }
      };

      const observer = new ResizeObserver(handleResize);
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
        isFirstRender.current = true;
      };
    }
  }, [tooltipEnabled]);

  return (
    <>
      <div className="h-[240px]" ref={ref} />
      <button onClick={toggleTooltip}>
        {tooltipEnabled ? "Disable" : "Enable"} Tooltip
      </button>
    </>
  );
};
