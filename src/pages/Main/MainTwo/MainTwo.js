import React, { Component } from "react";
import "./MainTwo.scss";
import bottomImgOne from "../../../image/buttomBanner-1.jpg";
import bottomImgTwo from "../../../image/buttomBanner-2.jpg";
import bottomImgThree from "../../../image/buttomBanner-3.jpg";

class MainTwo extends Component {
  render() {
    return (
      <div className='MainTwo' id='bottom'>
        <div
          className='bottomBanner'
          style={{ left: this.props.veryLeft }}
          onWheel={this.props.scrollHorizontal}
        >
          {/* 이벤트 */}
          <div className='container'>
            <img src={bottomImgOne} alt='' />
            <div className='text'>
              <div className='title'>
                <span>크라운 오더</span>
                <span>1주년 기념 이벤트</span>
              </div>
              <div className='content'>
                <span>크라운 오더로 주문하고</span>
                <span>다양한 혜택을 누려보세요!</span>
              </div>
            </div>
            <div className='shown'>
              <div className='logo one'></div>
              <div className='detail'>DETAIL VIEW</div>
              <div className='showColor'></div>
            </div>
          </div>
          {/* coffee class */}
          <div className='container'>
            <img src={bottomImgTwo} alt='' />
            <div className='text'>
              <div className='title two'>
                <span>Coffee</span>
                <span>Class</span>
              </div>
              <div className='content'>
                <span>폴바셋 커피 클래스에 지금 참여해보세요</span>
              </div>
            </div>
            <div className='shown'>
              <div className='logo two'></div>
              <div className='detail'>DETAIL VIEW</div>
              <div className='showColor'></div>
            </div>
          </div>
          {/* 세번째 이미지 */}
          <div className='container imgThree'>
            <img src={bottomImgThree} alt='' />
            <div className='text'>
              <div className='title two'>
                <span>Bean</span>
                <span>Info</span>
              </div>
              <div className='content'>
                <span>폴바셋 원두 정보를 알아보세요</span>
              </div>
            </div>
            <div className='shown'>
              <div className='logo three'></div>
              <div className='detail'>DETAIL VIEW</div>
              <div className='showColor'></div>
            </div>
          </div>
        </div>
        <div className='links'>
          <div className='container'>
            <div className='mobile'></div>
            <div className='bottomText'>
              Mobile
              <br />
              App
            </div>
          </div>
          <div className='container'>
            <div className='special'></div>
            <div className='bottomText'>
              Special
              <br />
              Benefit
            </div>
          </div>
          <div className='container'>
            <div className='eshop'></div>
            <div className='bottomText'>e-Shop</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainTwo;
