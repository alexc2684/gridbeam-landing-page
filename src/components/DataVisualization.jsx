import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2'
import { TrendingUp, Zap, PieChart } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
)

const DataVisualization = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('data-visualization')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Chart options with utility company styling
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 15,
          font: { size: 12, family: 'Inter' },
          color: '#666666',
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 12,
        cornerRadius: 8,
        titleFont: { family: 'Inter', size: 13 },
        bodyFont: { family: 'Inter', size: 12 },
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + ' MW';
          }
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: { family: 'Inter', size: 11 },
          color: '#666666',
          callback: function(value) {
            return value.toLocaleString() + ' MW';
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: { family: 'Inter', size: 11 },
          color: '#666666'
        }
      }
    }
  }

  // Function to add realistic jitter to data
  const addJitter = (baseValue, variance = 0.02) => {
    const jitter = (Math.random() - 0.5) * variance * baseValue
    return Math.round(baseValue + jitter)
  }

  // Generate sinusoidal load data - realistic electrical demand pattern
  const generateSinusoidalLoad = (hours, baseLoad = 650, amplitude = 120, phaseShift = 0) => {
    return hours.map(hour => {
      const hourNum = parseInt(hour.split(':')[0])
      const angle = ((hourNum + phaseShift) / 24) * 2 * Math.PI
      const sinValue = Math.sin(angle)
      const loadValue = baseLoad + (amplitude * sinValue)
      return Math.round(Math.max(loadValue, 450))
    })
  }

  const timeLabels = ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
  
  const baseActualData = generateSinusoidalLoad(timeLabels, 650, 120, 12)
  const basePredictedData = generateSinusoidalLoad(timeLabels, 650, 118, 12.1)
  
  // Load Forecast Data
  const loadForecastData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Actual Load',
        data: baseActualData.map(val => addJitter(val, 0.03)),
        borderColor: '#003F7F',
        backgroundColor: 'rgba(0, 63, 127, 0.1)',
        tension: 0.2,
        fill: true,
        pointBackgroundColor: '#003F7F',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4
      },
      {
        label: 'AI Predicted Load',
        data: basePredictedData.map(val => addJitter(val, 0.015)),
        borderColor: '#00A651',
        borderDash: [5, 5],
        tension: 0.2,
        fill: false,
        pointBackgroundColor: '#00A651',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4
      }
    ]
  }

  // Phase Balancing Radar Chart
  const phaseBalancingData = {
    labels: ['Phase A', 'Phase B', 'Phase C'],
    datasets: [
      {
        label: 'Before Optimization',
        data: [120, 85, 95],
        borderColor: '#DC2626',
        backgroundColor: 'rgba(220, 38, 38, 0.2)',
        pointBackgroundColor: '#DC2626',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#DC2626',
        borderWidth: 2
      },
      {
        label: 'After Optimization',
        data: [98, 99, 103],
        borderColor: '#00A651',
        backgroundColor: 'rgba(0, 166, 81, 0.2)',
        pointBackgroundColor: '#00A651',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00A651',
        borderWidth: 2
      }
    ]
  }

  const phaseBalancingOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 15,
          font: { size: 12, family: 'Inter' },
          color: '#666666',
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 12,
        cornerRadius: 8,
        titleFont: { family: 'Inter', size: 13 },
        bodyFont: { family: 'Inter', size: 12 },
        callbacks: {
          label: function(context) {
            const label = context.dataset.label;
            const value = context.parsed.r;
            return label + ': ' + value + '% load';
          },
          afterLabel: function(context) {
            if (context.datasetIndex === 1) {
              const ideal = 100;
              const deviation = Math.abs(context.parsed.r - ideal);
              return 'Deviation from ideal: ' + deviation.toFixed(1) + '%';
            }
          }
        }
      }
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          circular: true
        },
        pointLabels: {
          font: { 
            size: 14, 
            family: 'Inter',
            weight: '600'
          },
          color: '#333333',
          padding: 10
        },
        ticks: {
          font: { size: 10, family: 'Inter' },
          color: '#666666',
          backdropColor: 'transparent',
          stepSize: 20,
          callback: function(value) {
            return value + '%';
          }
        },
        suggestedMin: 60,
        suggestedMax: 140,
        beginAtZero: false
      }
    }
  }

  // Data Pipeline Performance
  const pipelineData = {
    labels: ['AMI Data', 'SCADA Telemetry', 'Weather Integration', 'Analytics Processing'],
    datasets: [{
      data: [45, 32, 18, 5],
      backgroundColor: [
        '#003F7F',
        '#0066CC', 
        '#00A651',
        '#666666'
      ],
      borderWidth: 2,
      borderColor: '#ffffff',
      hoverOffset: 8
    }]
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 15,
          font: { size: 12, family: 'Inter' },
          color: '#666666',
          generateLabels: function(chart) {
            const data = chart.data;
            return data.labels.map((label, i) => ({
              text: label + ' (' + data.datasets[0].data[i] + '%)',
              fillStyle: data.datasets[0].backgroundColor[i],
              hidden: false,
              index: i
            }));
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 12,
        cornerRadius: 8,
        titleFont: { family: 'Inter', size: 13 },
        bodyFont: { family: 'Inter', size: 12 },
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '% of total throughput';
          }
        }
      }
    },
    cutout: '60%'
  }

  const charts = [
    {
      id: 'load-forecast',
      title: 'AI-Powered Load Forecasting',
      subtitle: '24-hour ahead prediction with 97.3% accuracy',
      icon: TrendingUp,
      component: <Line data={loadForecastData} options={chartOptions} />,
      badge: 'Real-Time AI'
    },
    {
      id: 'phase-balancing',
      title: 'Phase Balancing Optimization',
      subtitle: 'Three-phase load distribution reducing line losses',
      icon: Zap,
      component: <Radar data={phaseBalancingData} options={phaseBalancingOptions} />,
      badge: 'Line Loss Reduction'
    },
    {
      id: 'pipeline-performance',
      title: 'Data Pipeline Throughput',
      subtitle: '10M+ data points processed daily',
      icon: PieChart,
      component: <Doughnut data={pipelineData} options={doughnutOptions} />,
      badge: '425% Faster'
    }
  ]

  return (
    <section id="data-visualization" className="py-16 lg:py-20 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-utility-text">
            Data-Driven Results in{' '}
            <span className="text-utility-primary">Real-Time</span>
          </h2>
          
          <p className="text-xl text-utility-textLight max-w-3xl mx-auto leading-relaxed font-body">
            Live dashboards showcasing advanced analytics implementations across utility operations,
            delivering measurable improvements in reliability and efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {charts.map((chart, index) => (
            <div
              key={chart.id}
              className={`utility-card-lg p-6 h-full hover:shadow-utility-lg transition-all duration-300 ${
                isVisible ? 'fade-in-animation' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Chart Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100">
                    <chart.icon size={24} className="text-utility-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-utility-text">
                      {chart.title}
                    </h3>
                    <p className="text-sm text-utility-textLight font-body">
                      {chart.subtitle}
                    </p>
                  </div>
                </div>
                <span className="inline-block bg-utility-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {chart.badge}
                </span>
              </div>

              {/* Chart Container */}
              <div className="h-64 w-full">
                {chart.component}
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics Summary */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="utility-card p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-utility-primary mb-1">97.3%</div>
                <div className="text-sm text-utility-textLight font-body">Forecast Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-utility-primary mb-1">10M+</div>
                <div className="text-sm text-utility-textLight font-body">Daily Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-utility-primary mb-1">35%</div>
                <div className="text-sm text-utility-textLight font-body">Line Loss Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-utility-primary mb-1">&lt;1min</div>
                <div className="text-sm text-utility-textLight font-body">Real-Time Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataVisualization