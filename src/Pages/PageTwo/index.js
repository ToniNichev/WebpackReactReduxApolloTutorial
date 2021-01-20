import React, { useState } from 'react';
import styles from './styles.scss';

let init = false;

const PageTwo = (props) => {
  const [labelData, setLabelData] = useState('no data');

  React.useEffect(() => {
    console.log(">>>> USE EFFECT CALLED !");
    init = true;

    const url = 'https://www.toni-develops.com/external-files/examples/sample-apis/users.json.php';

    fetch(url)
      .then((res) => res.json())
      .then((newData) => {
        console.log("useEffect:",1);
        const welcomeText = `Welcome ${newData[0].first_name}`;
        setLabelData(welcomeText);
        console.log("useEffect:",2);
        if( document.querySelector("input") != null ) {
          console.log("useEffect:",3);
          document.querySelector("input").style.display = "";
        }
        return welcomeText;
      });      
  }, [init]);


  return(<div data-text={labelData} className={styles.wrapper}>
          {labelData}
          <hr />
          <input type="text" placeholder={labelData} />
          <ul>
            <li><a href="#" onClick={ () => { setLabelData('one') } }>ONE</a></li>
            <li><a href="#" onClick={ () => { setLabelData('two') } }>TWO</a></li>
          </ul>   
        </div>);
}
export default PageTwo;