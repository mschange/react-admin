import React from 'react';

import SliderNav from '../../component/sliderNar/sliderNav';
import Header from '../../component/header/index';
import './index.less';
class Index extends React.Component {
  render() {
    return ( 
      <div className={'indexWrapper'} >
        <div className={'sliderWrapper'} >
          <SliderNav />
        </div> 
        <div className={'mainWrapper'} >
          <div className={'headerWrapper'}>
            <Header />
          </div> 
          <div className={'mainHeader'}> { this.props.children } </div> 
        </div>
      </div>
    )
  }
}

export default Index;