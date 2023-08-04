import dayjs from "dayjs";
import { MessageCount, Channel } from "../../../types";
export const engagementMessageOverTimeChartOptions = (
  messageCountList: MessageCount[],
  channels: Channel[]
) => {
  const filterMessageCountList = messageCountList.filter(
    (item: MessageCount) => {
      return channels.find(
        (channel) => Number(channel.id) === Number(item.channelId)
      );
    }
  );

  return {
    title: {
      text: "Total Messages Over Time",
      align: "left",
      style: {
        color: "#FFFFFF",
      },
    },
    dataLabels: {
      enabled: true,
    },
    chart: {
      type: "spline",
      backgroundColor: "#22222C",
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "General",
        data: filterMessageCountList.map((item: MessageCount) => {
          return {
            x: new Date(item.timeBucket),
            y: Number(item.count),
          };
        }),
      },
    ],
    colors: ["#008F8D"],
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          return dayjs(this.value).format("MMM DD");
        },
        style: {
          color: "#59595E",
        },
      },
      tickColor: "#59595E",
      lineColor: "#59595E",
      crosshair: {
        enabled: true,
      },
    },
    yAxis: {
      gridLineWidth: 0,
      labels: {
        style: {
          color: "#59595E",
        },
      },
    },

    grid: {
      row: {
        colors: ["#ACACAE", "transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      formatter: function () {
        return `${this.y} messages on ${dayjs(this.x).format("MMM DD")}`;
      },
      backgroundColor: "#15161B",
      borderColor: "#008F8D",
      borderWidth: 1,
      style: {
        color: "#FFFFFF",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      borderColor: "#15161B",
      backgroundColor: "#15161B",
      borderWidth: 1,
      borderRadius: 2,
      itemStyle: {
        color: "#FFFFFF",
      },
      itemHoverStyle: {
        color: "#FFFFFF",
      },
      offsetX: 40,
    },
  };
};
