import "./css/TopThree.css"
function TopThree() {
    return (
      <div className="TopThree">
        <div className="TopThree_Container">
          <h1>🏆 Top three Games</h1>
          <div className="TopThree_Container--first"><h2>🥇</h2></div>
          <div className="TopThree_Container--second"><h2>🥈</h2></div>
          <div className="TopThree_Container--third"><h2>🥉</h2></div>
        </div>
      </div>
    );
  }
  
  export default  TopThree;