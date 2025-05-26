import React from 'react';
import './HealthStatusCards.css';
import lungs from '../assets/images/lungs.png';
import bone from '../assets/images/bone.png';
import Theeth from '../assets/images/Theeth.jpg';
import { MoreHorizontal } from 'lucide-react';

const HealthStatusCards = ({ cards }) => {

  if (!cards || cards.length === 0) {
    return <p>No health status cards to display.</p>;
  }

  return (
    <div className="health-status-cards-container">
      {cards.map((card, index) => { 
        let imageToDisplay = null;
        let imageAltText = "Anatomical Illustration";

        
        if (index === 0) {
          imageToDisplay = lungs;
          imageAltText = card.title ? `${card.title} - Lungs` : "Lungs Illustration";
        } else if (index === 2) {
          imageToDisplay = bone;
          imageAltText = card.title ? `${card.title} - Bone` : "Bone Illustration";
        } else if (index === 1) {
           imageToDisplay = Theeth;
          imageAltText = card.title ? `${card.title} - Teeth` : "Teeth Illustration";
        }
      
        return (
          <div key={card.id} className="health-status-card card-style">
            <div className="card-header">
              <h4 className="health-card-title">{card.title}</h4>
              
            
              {imageToDisplay && (
                <img 
                  src={imageToDisplay} 
                  alt={imageAltText} 
                  className="card-image"
                />
              )}
         
              
              <MoreHorizontal size={20} className="more-icon" />
            </div>
            
            <p className="health-card-date">{card.date}</p>
            
            <div className="health-card-status">
              <span className="status-dot" style={{ backgroundColor: card.statusColor }}></span>
              {card.statusText}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;