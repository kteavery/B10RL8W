import * as React from 'react'
import { ResponsiveLine } from '@nivo/line'

export type SplineProps = {
  data: {
    id: string
    data: { x: number; y: number }[]
    color: string
  }[]
  minY?: number
  maxY?: number
  yAxisTitle: string
}

const defaultTextColor = '#000000'
const defaultFontSize = 16
const theme = {
  background: 'transparent',
  axis: {
    domain: {
      line: {
        stroke: 'transparent',
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: '#777',
        strokeWidth: 1,
      },
      text: {
        fill: defaultTextColor,
        fontSize: defaultFontSize,
      },
    },
    legend: {
      text: {
        fill: defaultTextColor,
        fontSize: defaultFontSize,
      },
    },
  },
  grid: {
    line: {
      stroke: '#ddd',
      strokeWidth: 1,
    },
  },
  legends: {
    text: {
      fill: defaultTextColor,
      fontSize: defaultFontSize,
    },
  },
  labels: {
    text: {
      fill: defaultTextColor,
      fontSize: defaultFontSize,
    },
  },
  markers: {
    lineColor: '#000',
    lineStrokeWidth: 1,
    textColor: defaultTextColor,
    fontSize: defaultFontSize,
  },
  dots: {
    text: {
      fill: defaultTextColor,
      fontSize: defaultFontSize,
    },
  },
  tooltip: {
    container: {
      background: 'white',
      color: 'inherit',
      fontSize: 'inherit',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
      padding: '5px 9px',
    },
    basic: {
      whiteSpace: 'pre',
      display: 'flex',
      alignItems: 'center',
    },
    table: {},
    tableCell: {
      padding: '3px 5px',
    },
  },
}

export default class SplinePlot extends React.Component<SplineProps> {
  render() {
    const { data, minY, maxY } = this.props
    return (
      <ResponsiveLine
        theme={theme}
        data={data}
        margin={{
          top: 4,
          right: 48,
          bottom: 80,
          left: 64,
        }}
        xScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
        }}
        yScale={{
          type: 'linear',
          stacked: false,
          min: minY !== undefined ? minY : 'auto',
          max: maxY !== undefined ? maxY : 'auto',
        }}
        curve="monotoneX"
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'epochs',
          legendOffset: 50,
          legendPosition: 'center',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: this.props.yAxisTitle,
          legendOffset: -50,
          legendPosition: 'center',
        }}
        colorBy={function(e: any) {
          return e.color
        }}
        enableGridX={false}
        lineWidth={3}
        enableDots={false}
        animate={true}
        motionStiffness={250}
        motionDamping={30}
      />
    )
  }
}
