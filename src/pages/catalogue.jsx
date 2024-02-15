import React, { useRef, useState } from "react"
import B1 from "../images/CR Catalogue Final_page-0001.jpg"
import B2 from "../images/CR Catalogue Final_page-0002.jpg"
import B3 from "../images/CR Catalogue Final_page-0003.jpg"
import B4 from "../images/CR Catalogue Final_page-0004.jpg"
import B5 from "../images/CR Catalogue Final_page-0005.jpg"
import B6 from "../images/CR Catalogue Final_page-0006.jpg"
import B7 from "../images/CR Catalogue Final_page-0007.jpg"
import B8 from "../images/CR Catalogue Final_page-0008.jpg"
import B9 from "../images/CR Catalogue Final_page-0009.jpg"
import B10 from "../images/CR Catalogue Final_page-0010.jpg"
import B11 from "../images/CR Catalogue Final_page-0011.jpg"
import B12 from "../images/CR Catalogue Final_page-0012.jpg"
import B13 from "../images/CR Catalogue Final_page-0013.jpg"
import B14 from "../images/CR Catalogue Final_page-0014.jpg"
import B15 from "../images/CR Catalogue Final_page-0015.jpg"
import B16 from "../images/CR Catalogue Final_page-0016.jpg"
import B17 from "../images/CR Catalogue Final_page-0017.jpg"
import B18 from "../images/CR Catalogue Final_page-0018.jpg"
import B19 from "../images/CR Catalogue Final_page-0019.jpg"
import B20 from "../images/CR Catalogue Final_page-0020.jpg"
import B21 from "../images/CR Catalogue Final_page-0021.jpg"


import HTMLFlipBook from "react-pageflip";

const Catalogue = () => {

  const flipBookRef = useRef();
  const [page, setPage] = useState(1)
  const goToPreviousPage = () => {
    console.log(flipBookRef);
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const goToNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };
  const isPrevPageAvailable = () => {
    return page >= 2 ? false : true;
  };

  const isNextPageAvailable = () => {
    return page < 20 ? false : true
  };

  function onFlip(data) {
    setPage(data)
    console.log('Current page: ' + data);
  }

  return (
    <>
      <main className="h-screen flex items-center justify-center mt-10 md:mt-0">
        <React.Fragment>
          <div className="navigation-arrows__button--left">
            <svg className={`${!isPrevPageAvailable() ? 'opacity-100' : 'opacity-0'}`}
              xmlns="http://www.w3.org/2000/svg" onClick={goToPreviousPage} viewBox="0 0 72 72"><path fill="currentColor" d="M41.36 46.12c.3.32.45.48.45.68 0 .2-.15.36-.45.68l-2.57 2.74c-.34.37-.51.55-.73.55-.21 0-.39-.18-.73-.55L24.64 36.68c-.3-.32-.45-.48-.45-.68 0-.2.15-.36.45-.68l12.7-13.54c.33-.37.5-.55.72-.55.22 0 .39.18.73.55l2.57 2.74c.3.32.45.48.45.68 0 .2-.15.36-.45.68L31.88 36l9.48 10.12Z"></path></svg>
          </div>
          {/*!isPrevPageAvailable() && <div className="navigation-arrows__button--left">
              <svg xmlns="http://www.w3.org/2000/svg" onClick={goToPreviousPage} viewBox="0 0 72 72"><path fill="currentColor" d="M41.36 46.12c.3.32.45.48.45.68 0 .2-.15.36-.45.68l-2.57 2.74c-.34.37-.51.55-.73.55-.21 0-.39-.18-.73-.55L24.64 36.68c-.3-.32-.45-.48-.45-.68 0-.2.15-.36.45-.68l12.7-13.54c.33-.37.5-.55.72-.55.22 0 .39.18.73.55l2.57 2.74c.3.32.45.48.45.68 0 .2-.15.36-.45.68L31.88 36l9.48 10.12Z"></path></svg>
        </div>*/}

          <HTMLFlipBook width={475} height={645} ref={flipBookRef} onFlip={(e) => onFlip(e.data)}>
            <div className="demoPage"><img src={B1} /></div>
            <div className="demoPage"><img src={B2} /></div>
            <div className="demoPage"><img src={B3} /></div>
            <div className="demoPage"><img src={B4} /></div>
            <div className="demoPage"><img src={B5} /></div>
            <div className="demoPage"><img src={B6} /></div>
            <div className="demoPage"><img src={B7} /></div>
            <div className="demoPage"><img src={B8} /></div>
            <div className="demoPage"><img src={B9} /></div>
            <div className="demoPage"><img src={B10} /></div>
            <div className="demoPage"><img src={B11} /></div>
            <div className="demoPage"><img src={B12} /></div>
            <div className="demoPage"><img src={B13} /></div>
            <div className="demoPage"><img src={B14} /></div>
            <div className="demoPage"><img src={B15} /></div>
            <div className="demoPage"><img src={B16} /></div>
            <div className="demoPage"><img src={B17} /></div>
            <div className="demoPage"><img src={B18} /></div>
            <div className="demoPage"><img src={B19} /></div>
            <div className="demoPage"><img src={B20} /></div>
            <div className="demoPage"><img src={B21} /></div>
          </HTMLFlipBook>


          <div className="navigation-arrows__button--right">
            <svg className={`${!isNextPageAvailable() ? 'opacity-100' : 'opacity-0'}`}
              xmlns="http://www.w3.org/2000/svg" onClick={goToNextPage} viewBox="0 0 72 72"><path fill="currentColor" d="M41.36 46.12c.3.32.45.48.45.68 0 .2-.15.36-.45.68l-2.57 2.74c-.34.37-.51.55-.73.55-.21 0-.39-.18-.73-.55L24.64 36.68c-.3-.32-.45-.48-.45-.68 0-.2.15-.36.45-.68l12.7-13.54c.33-.37.5-.55.72-.55.22 0 .39.18.73.55l2.57 2.74c.3.32.45.48.45.68 0 .2-.15.36-.45.68L31.88 36l9.48 10.12Z"></path></svg>
          </div>

          {/*!isNextPageAvailable() && <div className="navigation-arrows__button--right">
              <svg xmlns="http://www.w3.org/2000/svg" onClick={goToNextPage} viewBox="0 0 72 72"><path fill="currentColor" d="M41.36 46.12c.3.32.45.48.45.68 0 .2-.15.36-.45.68l-2.57 2.74c-.34.37-.51.55-.73.55-.21 0-.39-.18-.73-.55L24.64 36.68c-.3-.32-.45-.48-.45-.68 0-.2.15-.36.45-.68l12.7-13.54c.33-.37.5-.55.72-.55.22 0 .39.18.73.55l2.57 2.74c.3.32.45.48.45.68 0 .2-.15.36-.45.68L31.88 36l9.48 10.12Z"></path></svg>
      </div>*/}
        </React.Fragment>
      </main>
    </>
  )
}

export default Catalogue