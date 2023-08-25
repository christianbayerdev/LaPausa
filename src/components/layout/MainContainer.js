import React from 'react';

function MainContainer() {
  return (
    <main>
       <div className="container">
        <div className="container-menu texture">
          <ul className="lapausa-selection">
            <li>Ausstehende Arbeitszeit</li>
            <li>Urlaubsplaner</li>
            <li>Überstunden</li>
          </ul>
        </div>
        <div className="container-content texture">
          <div className="calculator">
            <form>
              <label htmlFor="hours">Stundenanzahl</label>
              <input type="number" id="hours" name="hours"></input>
            </form>
          </div>
        </div>
       </div>
    </main>
  );
}

export default MainContainer;