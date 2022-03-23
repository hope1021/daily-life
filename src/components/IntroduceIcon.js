import React from 'react';
import './IntroduceIcon.css';

const IntroduceIcon = () => {
    return (
        <div className='iconBox'>
            <div className='dailyLifeIntro'>
                <h3>Daily-Life ?</h3>
                <p> 나의 중요했던 일이나 경험, 느낌을 간단하게 작성해서 <br/>
                    하루를 의미있게 보낼 수 있도록 기록하는 웹 사이트 입니다.</p>
                    <img src='img/intro1.png'/>
                    
                <h3>Daily-Life 핵심 기능</h3>
                     <img src='img/intro2.png'/>

            </div>
            <h3>Daily-Life의 기분이들을 소개합니다.</h3>
            <div className='iconRow'>
                <div className='iconItemImg'>
                    <img src='img/glad.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/happy.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/proud.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/calm.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/special.png'/>
                </div>
            </div>
            <div className='txtRow'>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>스퐁이</h3>
                        <p className='iconDetail'>기쁨의 아이콘.<br/>바다에서 올라온 지 얼마 되지 않아 육지의 모든 것이 신기하고 재미있다.</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>햄볶이</h3>
                        <p className='iconDetail'>행복의 아이콘.<br/>바다에서 올라온 지 얼마 되지 않아 육지의 모든 것이 신기하고 재미있다.</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>척척이</h3>
                        <p className='iconDetail'>뿌듯의 아이콘.<br/>주어진 일은 무엇이든 해내는 척척박사.</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>시몬이</h3>
                        <p className='iconDetail'>편안의 아이콘.<br/>시몬스에서 내려온 지 얼마 되지 않아 이 세상 모든 것이 편안하다.</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>별똥이</h3>
                        <p className='iconDetail'>축하의 아이콘.<br/>바다에서 올라온 지 얼마 되지 않아 육지의 모든 것이 신기하고 재미있다.</p>
                    </div>
                </div>
            </div>
            <div className='iconRow'>
                <div className='iconItemImg'>
                    <img src='img/dissatisfaction.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/angry.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/depressed.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/unrest.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/sad.png'/>
                </div>
                <div className='iconItemImg'>
                    <img src='img/tired.png'/>
                </div>
            </div>
            <div className='txtRow'>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>뿡칫이</h3>
                        <p className='iconDetail'>불만의 아이콘.<br/>바다에서 올라온 지 얼마 되지 않아 육지의 모든 것이 신기하고 재미있다.</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>앵글이</h3>
                        <p className='iconDetail'>화남의 아이콘.<br/>바다에서 올라온 지 얼마 되지 않아 육지의 모든 것이 신기하고 재미있다.</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>우우리</h3>
                        <p className='iconDetail'>우울의 아이콘.<br/>바다에서 올라온 지 얼마 되지 않아 육지의 모든 것이 신기하고 재미있다.</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>덜덜이</h3>
                        <p className='iconDetail'>불안의 아이콘.<br/>난 아직 세상이 두려워...</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>훌쩍이</h3>
                        <p className='iconDetail'>슬픔의 아이콘.<br/>흑흑... 훌쩍 훌쩍...</p>
                    </div>
                </div>
                <div className='iconItem'>
                    <div className='iconTxtBox'>
                        <h3 className='iconName'>피고니</h3>
                        <p className='iconDetail'>피곤의 아이콘.<br/>바다에서 올라온 지 얼마 되지 않아 육지의 모든 것이 신기하고 재미있다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroduceIcon;