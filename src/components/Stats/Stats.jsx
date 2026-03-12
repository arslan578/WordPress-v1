import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useCounterAnimation } from '../../hooks/useCounterAnimation'
import styles from './Stats.module.css'

const statData = [
  { value: 200, suffix: '+', label: 'WordPress Projects Delivered' },
  { value: 99.9, suffix: '%', label: 'WordPress Uptime' },
  { value: 50, suffix: '+', label: 'Custom Plugins Built' },
  { value: null, display: '24/7', label: 'WordPress Support' },
]

const StatItem = ({ data, isVisible, delay }) => {
  const count = useCounterAnimation(data.value || 0, isVisible)

  return (
    <div
      className={styles.item}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s`,
      }}
    >
      <h3>{data.display || `${count}${data.suffix}`}</h3>
      <p>{data.label}</p>
    </div>
  )
}

const Stats = () => {
  const [ref, isVisible] = useScrollAnimation(0.3)

  return (
    <div className={styles.statsBar} ref={ref}>
      <div className={styles.grid}>
        {statData.map((stat, i) => (
          <StatItem key={i} data={stat} isVisible={isVisible} delay={i * 0.1} />
        ))}
      </div>
    </div>
  )
}

export default Stats
