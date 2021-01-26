import React, { useState } from 'react';
import TestLabel from './TestLabel';
import styles from './styles.scss';

let init = false;

const MOD_URL_BASE = 'apps.cnbc.com';

const PageTwo = (props) => {
  const {
    testOne,
    testTwo
  } = props;

  const [labelData, setLabelData] = useState('no data');

  const clickTest = () => {
    setLabelData('click test');
  }

  React.useEffect(() => {
    console.log("USE EFFECT CALLED !");
    init = true;

    window.addEventListener('message', function(event) {
      console.log("Message received:", event);
      if(event.origin.indexOf(MOD_URL_BASE) === -1) {
        document.querySelector("input").value = "Message received";
      }
    });   

    const url = 'https://www.toni-develops.com/external-files/examples/sample-apis/users.json.php';

    fetch(url)
      .then((res) => res.json())
      .then((newData) => {
        console.log("@#@#@#@#@", newData[0]);

        const welcomeText = `Welcome ${newData[0].first_name}`;
        setLabelData(welcomeText);

        if( document.querySelector("input") != null ) {
          console.log("useEffect:",3);
          document.querySelector("input").style.display = "";
        }
        if(document.querySelector('[data-id]')!= null) {
          console.log("###################:", welcomeText);
          document.querySelector('[data-id]').innerText = welcomeText;
        }
        return welcomeText;
      });      
  }, [init]);


  return(<div data-text={labelData} className={styles.wrapper}>
          {labelData}
          <hr />
          <TestLabel testOne={labelData}/>
          <p><button onClick={ () => { clickTest() } }>Click Test</button></p>
          <input type="text" placeholder={labelData} readOnly value={labelData} />
          <div data-id="test1">test div</div>
          <ul>
            <li><a href="#" onClick={ () => { setLabelData('one') } }>ONE</a></li>
            <li><a href="#" onClick={ () => { setLabelData('two') } }>TWO</a></li>
          </ul>   
        </div>);
}
export default PageTwo;
