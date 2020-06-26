import React, {useState} from 'react';
import './mine/css/main.css';
import HeaderRender from "./mine/Header";
import ProductRender from "./mine/Product";
import jsonLipstick from "./mine/json_data/lipstick"
function App() {

    const [menuChoice, setChoice] = useState(jsonLipstick);
    
    function menuFunc(list) {
        setChoice(list);
    }
    
    return (
      <div>
        <HeaderRender appCallback={menuFunc}/>
        <main>
          <div className="container">
            <div className="product_list">
                {
                    Object.keys(menuChoice).map(item =><ProductRender key={[item]} setItem={menuChoice[item]} />)
                }
            </div>
          </div>
        </main>
      </div>

    // {for (i = 0; i <= jsonLength; i++) {console.log(i);}}

    );
}

export default App;
