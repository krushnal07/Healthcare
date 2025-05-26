import React from 'react';
import './AnatomySection.css';
import HumanBodyPlaceholder from '../assets/images/het.jpg';
import { Heart, CheckCircle, AlertCircle, Smile, Bone as BoneIcon } from 'lucide-react'; // Using generic icons for simplicity

const AnatomySection = ({ indicators }) => {
  const getIconForIndicator = (id, status) => {
    const color = status === 'green' ? 'var(--design-green)' : 'var(--design-red)';
    const iconProps = { size: 12, color: color, fill: status === 'green' ? 'var(--design-green)' : 'none' };
    if (id === 'heart') return <Heart {...iconProps} fill={color} />; // Fill heart
    if (id === 'lungs') return <AlertCircle {...iconProps} />; // Using Alert for problem
    if (id === 'teeth') return <Smile {...iconProps} />;
    if (id === 'bone') return <BoneIcon {...iconProps} />;
    return <CheckCircle {...iconProps} />;
  };

  return (
    <div className="anatomy-section card-style">
      <h3 className="card-title">Anatomy</h3>
      <div className="anatomy-illustration-container">
        <img src={HumanBodyPlaceholder} alt="Anatomical Illustration" className="anatomy-image" />
        {indicators.map((indicator) => (
          <div
            key={indicator.id}
            className={`indicator ${indicator.status}`}
            style={{ top: indicator.top, left: indicator.left }}
          >
            <div className="indicator-icon-wrapper">
              {getIconForIndicator(indicator.id, indicator.status)}
            </div>
            <span className="indicator-text">{indicator.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;