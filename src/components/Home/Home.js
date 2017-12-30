import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Home.css';

class Home extends Component{
  render(){
    return(
      <div className='home-container'>
        <Navbar />

        <div id="home" className="pimg1">
          <div className="ptext">
            <span className="border">
              H2GO
            </span>
          </div>
        </div>

        <section className="section section-light">

        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border-trans light-text">
              NEVER STAY THIRSTY, MY FRIENDS
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>FLUID</h2>
          <p className='japanese'> 否ろやぽー談5第づひ兄対コサ済覧ざぶ題想ラ世関イヲウ創今マキツオ頭主ょむげび隣教ケス死木に適松ょしぽ給7暑モハウ越公者体女ぐ。治レ武円レる動求質カイテ量58火リヌヤユ江下対園めらラひ市65真ロニ得指マワ周幼治ぶ検神行偵叫垂びづくや。間ほっ北野フ信因ふわまご築政さたじい基搬だれゅ朝82提そへー優朝てッ相禽断スヒウ代変交ぴょど氏択くぼこ車少シナコ長入ツイ早下中症チオラ脱占祉よとぽ。 </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border-trans light-text">
              I SELL WATER
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2> AGUA </h2>
          <p className='japanese'>音ウ堅害陣トや逆除クスメ額臓棄ネラナリ百全注16富り取円ラ間軟クげへさ成17雪賀アヲルコ半悪テ玲8真モエヱナ焼委替とドおラ。間トヌ金絡ょ信京員ちフて問日ッ菱経なル調雪でド産口えし崎4欺ハ図因修チメユ真編シ整8新ニナラ変午ッりをら大点を焼供ゃぎぽめ携如幡揃擁せご。</p>
        </section>

        <div className="pimg3"></div>

        <Footer className='footer'/>
      </div>
    )
  }
}

export default Home;
