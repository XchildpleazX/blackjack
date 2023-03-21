import React, {useState} from 'react';
import Playarea from './Components/Playarea/Playarea';
import './App.css';

function App() {
  //const dragChip = useRef();
  const [wagerCount, setWagerCount] = useState(0);
  function dragEnd(e) {
    setWagerCount(wagerCount + parseInt(e.target.innerHTML));
  }
  return(
    <div>
      <Playarea />
      <div className="InPlay">
        Wager: 
        {wagerCount > 0 ? <div className="WagerDashboard-Chip-Wagered">{wagerCount}</div> : "$0"}
      </div>
      <div className="WagerDashboard">
        <div className="WagerDashboard-Chip WagerDashboard-Chip-Small" draggable onDragEnd={(e) => dragEnd(e)}>10</div>
        <div className="WagerDashboard-Chip WagerDashboard-Chip-Med" draggable onDragEnd={(e) => dragEnd(e)}>25</div>
        <div className="WagerDashboard-Chip WagerDashboard-Chip-Large" draggable onDragEnd={(e) => dragEnd(e)}>50</div>
      </div>
    </div>
  );
}

export default App;
