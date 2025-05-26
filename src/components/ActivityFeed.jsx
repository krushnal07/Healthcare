
import './ActivityFeed.css';
import image from '../assets/images/image.png';

const ActivityFeed = () => {
  
  const bars = [
    { height: '60%', label: 'Mon' },
    { height: '80%', label: 'Tue' },
    { height: '40%', label: 'Wed' },
    { height: '70%', label: 'Thu' },
    { height: '50%', label: 'Fri' },
    { height: '90%', label: 'Sat' },
    { height: '30%', label: 'Sun' },
  ];

  return (
    <div className="activity-feed card-style">
      <h3 className="card-title">Activity</h3>
      <p className="activity-summary">3 appointments on this week</p>
       <img src={image} alt="Anatomical Illustration" className="bar-image" />
      <div className="activity-chart">
       
        {bars.map((bar, index) => (
          <div key={index} className="chart-bar-wrapper">
            <div className="chart-bar" style={{ height: bar.height }}></div>
            <span className="chart-label">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;