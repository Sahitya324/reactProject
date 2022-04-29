import React from 'react'
import styles from './Circular.css'

function useAnimateValue( value, duration ) {
  const [current, setCurrent] = React.useState(value)

  React.useLayoutEffect(() => {
    const stepDuration = 1/50
    const totalSteps = duration / stepDuration
    const stepSize = (value - current) / totalSteps
    let currentStep = 0

    const interval = setInterval(() => setCurrent(current => {
      currentStep++
      if (currentStep >= totalSteps) {
        clearInterval(interval)
        return value
      }

      return current + stepSize
    }), stepDuration * 1000)

    return () => clearInterval(interval)
  }, [value, duration])

  return current
}

const AnimatePercentage = React.memo(({ value, duration }) => {
  const v = useAnimateValue(value, duration)
  return Math.round(v * 100) / 100
})

function _Progress({
    progress = 0,
    strokeWidth = 3,
    ballStrokeWidth = 10,
    reduction = 0.25,
    transitionDuration = 0.5,
    transitionTimingFunction = 'ease',
    background = '#b3fac4',
    hideBall = false,
    hideValue = false,
    gradient = [{stop: 0.0, color: '#00bc9b'}, {stop: 1, color: '#0fd76d'}],
    subtitle = "",
    style,
    className,
    suffix = '%',
  }) {
  progress = Math.round(progress * 100) / 100
  const width = 200
  const center = width / 2.5
  const height = 200 || center + center * Math.cos(reduction * Math.PI)
  const [unique] = React.useState(() => Math.random().toString())
  const rotate = 90 + 180 * reduction
  const r = center - strokeWidth / 2 - (ballStrokeWidth / 2)
  const circumference = Math.PI * r * 2
  const offset = circumference * (50 - progress * (1 - reduction)) / 100

  return (
    <div className={`${className} ${styles.progress}`} style={style}>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.svg}>
        <defs>
          <linearGradient id={"gradient" + unique} x1="0%" y1="0%" x2="0%" y2="100%">
            {gradient.map(({stop, color}) => <stop key={stop} offset={stop * 100 + (suffix || '')} stopColor={color} />)}
          </linearGradient>
        </defs>
        {!hideValue && 
          <text x={center} y={center} textAnchor="middle" fontSize="30" fill="#93f5aa">
            {/* <AnimatePercentage value={progress} duration={transitionDuration} /> */}
            {progress}%
          </text>
        }
        <text x={center} y={center + 30*3/4} textAnchor="middle" fill="#93f5aa">{subtitle}</text>
        <circle
          transform={`rotate(${rotate} ${center} ${center})`}
          id="path"
          cx={center}
          cy={center}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * reduction}
          fill="none"
          stroke={background}
          strokeLinecap="round">
        </circle>
        <circle
          style={{transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}`}}
          transform={`rotate(${rotate} ${center} ${center})`}
          id="path"
          cx={center}
          cy={center}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          fill="none"
          stroke={`url(#gradient${unique})`}
          strokeLinecap="round">
        </circle>
        {!hideBall && <circle
          style={{transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}`}}
          transform={`rotate(${rotate} ${center} ${center})`}
          id="path"
          cx={center}
          cy={center}
          r={r}
          strokeWidth={ballStrokeWidth}
          strokeDasharray={`1 ${circumference}`}
          strokeDashoffset={offset}
          fill="none"
          stroke={`url(#gradient${unique})`}
          strokeLinecap="round">
        </circle>}
      </svg>
    </div>)
}

export const Progress = React.memo(_Progress)
Progress.displayName = "Progress"

export default Progress