import React, { Component } from "react";
import "./OptionSection.scss";

class OptionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  checkOnOff = (e) => {
    console.log("e.target", e.target);
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { checked } = this.state;
    return (
      <div className='OptionSection'>
        <div className='title'>매장서비스</div>
        <div className='optionIcon'>
          <ul>
            <li title='무선 인터넷' className='rightLine'>
              <div className='wifi'></div>
              <p>무선 인터넷</p>
              <div className='checkbox'></div>
            </li>
            <li title='지하철 인접' className='rightLine'>
              <div className='subway'></div>
              <p>지하철 인접</p>
              <div className='checkbox'></div>
            </li>
            <li title='주차 가능'>
              <div className='parking'></div>
              <p>주차 가능</p>
              <div className='checkbox'></div>
            </li>
            <li title='테라스' className='rightLine'>
              <div className='terrace'></div>
              <p>테라스</p>
              <div className='checkbox'></div>
            </li>
            <li title='로스팅' className='rightLine'>
              <div className='roasting'></div>
              <p>로스팅</p>
              <div className='checkbox'></div>
            </li>
            <li title='커피 교육'>
              <div className='edu'></div>
              <p>커피 교육</p>
              <div className='checkbox'></div>
            </li>
            <li title='아이스크림' className='rightLine'>
              <div className='iceCream'></div>
              <p>아이스크림</p>
              <div className='checkbox'></div>
            </li>
            <li title='아이스크림(멀티)' className='rightLine'>
              <div className='multiIceCream'></div>
              <p>아이스크림(멀티)</p>
              <div className='checkbox'></div>
            </li>
            <li title='맥주'>
              <div className='beer'></div>
              <p>맥주</p>
              <div className='checkbox'></div>
            </li>
            <li title='싱글오리진' className='rightLine'>
              <div className='single'></div>
              <p>싱글오리진</p>
              <div className='checkbox'></div>
            </li>
            <li title='공기청정기' className='rightLine'>
              <div className='purify'></div>
              <p>공기청정기</p>
              <div className='checkbox'></div>
            </li>
            <li title='딜리버리' onClick={this.checkOnOff}>
              <div className='delivery'></div>
              <p>딜리버리</p>
              <div
                className={`${checked === true} ? checkbox checked : checkbox `}
              ></div>
            </li>
          </ul>
        </div>
        <div className='searchContainer'>
          <div className='search'>검색</div>
        </div>
      </div>
    );
  }
}

export default OptionSection;
