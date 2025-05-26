import React from 'react';
import './DashboardMainContent.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = ({
  anatomyIndicators,
  healthStatusCardsData,
  calendarData,
  upcomingScheduleData,
}) => {
  return (
    <main className="dashboard-main-content">
      <div className="content-row"> 
       
        
          <AnatomySection indicators={anatomyIndicators} />
           <HealthStatusCards cards={healthStatusCardsData} />
         
          
         
         <div className="main-column">
             
            
              <CalendarView calendarData={calendarData} />
            
         </div>
         
          <div className="side-column">
            
             
            
             
          <UpcomingSchedule scheduleData={upcomingScheduleData} />
          <ActivityFeed />
          

</div>

      
      </div>
    </main>
  );
};

export default DashboardMainContent;