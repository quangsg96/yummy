// HAMBURGER
// document.getElementById('hamburger').addEventListener('click', function() {
//     var clickBtn = document.getElementById('navi-mobile');
//     clickBtn.classList.toggle('slide-down');
// });

// 2. DISPLAY MENU WHEN SCROLLING
/**
 * LIÊN QUAN ĐẾN CSS :
 *      1. nhớ thêm [ transition:height 0.6s ease-out; ] từ file .js sang hẳn file css ở breakpoint [768 ; +)
 *          #navi-relative {
 *              transition: height 0.6s ease-out;
 *          }
 * 
 *      2. (- ; 767] : thêm ngay dưới '.header' ------------ ct ko dùng đến
 *          // --------- Hide #navi-fixed when (- ; 767]
                #navi-fixed {
                    display: none;
                }

        3. chỗ MIN-WIDTH: 768 PX
            tắt [display: none;] ở #navi-fixed { }
 */
var viewportWidth = screen.width;
if (viewportWidth >= 768) {
    window.addEventListener('scroll' , function() {
        var naFi = document.getElementById('navi-fixed');
        var naRe = document.getElementById('navi-relative');
        var scroll = this.scrollY;
        if (scroll >= 178) {
            naFi.style.display = 'block';
            naRe.style.cssText = 'height:0; overflow:hidden;';
        } else {
            naFi.style.display = 'none';
            naRe.style.cssText = 'height: 34px; overflow: visible;';
        }
    })
}

// 3. :HOVER
// var allDiv = document.querySelectorAll('.trending .trending__slides > div').onmouseover = function() {
    // var allOver = document.querySelectorAll('.trending-hover');
    // for (let i = 0; i > allOver.length; i++) {
    //     allOver[i].style.display = 'block';
    // };
    // console.log('code running!');
// };

// TRENDING :HOVER
// #trending-1
function overEvent1() {
    var overDiv = document.getElementById('trending-1');
    overDiv.style.opacity = '1';
}
function outEvent1() {
    var outDiv = document.getElementById('trending-1');
    outDiv.style.opacity = '0';
}
// #trending-2
function overEvent2() {
    var overDiv = document.getElementById('trending-2');
    overDiv.style.opacity = '1';
}
function outEvent2() {
    var outDiv = document.getElementById('trending-2');
    outDiv.style.opacity = '0';
}
// #trending-3
function overEvent3() {
    var overDiv = document.getElementById('trending-3');
    overDiv.style.opacity = '1';
}
function outEvent3() {
    var outDiv = document.getElementById('trending-3');
    outDiv.style.opacity = '0';
}
// #trending-4
function overEvent4() {
    var overDiv = document.getElementById('trending-4');
    overDiv.style.opacity = '1';
}
function outEvent4() {
    var outDiv = document.getElementById('trending-4');
    outDiv.style.opacity = '0';
}
// #trending-5
function overEvent5() {
    var overDiv = document.getElementById('trending-5');
    overDiv.style.opacity = '1';
}
function outEvent5() {
    var outDiv = document.getElementById('trending-5');
    outDiv.style.opacity = '0';
}
// #trending-6
function overEvent6() {
    var overDiv = document.getElementById('trending-6');
    overDiv.style.opacity = '1';
}
function outEvent6() {
    var outDiv = document.getElementById('trending-6');
    outDiv.style.opacity = '0';
}
// #trending-7
function overEvent7() {
    var overDiv = document.getElementById('trending-7');
    overDiv.style.opacity = '1';
}
function outEvent7() {
    var outDiv = document.getElementById('trending-7');
    outDiv.style.opacity = '0';
}
// #trending-8
function overEvent8() {
    var overDiv = document.getElementById('trending-8');
    overDiv.style.opacity = '1';
}
function outEvent8() {
    var outDiv = document.getElementById('trending-8');
    outDiv.style.opacity = '0';
}
// #trending-9
function overEvent9() {
    var overDiv = document.getElementById('trending-9');
    overDiv.style.opacity = '1';
}
function outEvent9() {
    var outDiv = document.getElementById('trending-9');
    outDiv.style.opacity = '0';
}
// #trending-10
function overEvent10() {
    var overDiv = document.getElementById('trending-10');
    overDiv.style.opacity = '1';
}
function outEvent10() {
    var outDiv = document.getElementById('trending-10');
    outDiv.style.opacity = '0';
}
// #trending-11
function overEvent11() {
    var overDiv = document.getElementById('trending-11');
    overDiv.style.opacity = '1';
}
function outEvent11() {
    var outDiv = document.getElementById('trending-11');
    outDiv.style.opacity = '0';
}
// #trending-12
function overEvent12() {
    var overDiv = document.getElementById('trending-12');
    overDiv.style.opacity = '1';
}
function outEvent12() {
    var outDiv = document.getElementById('trending-12');
    outDiv.style.opacity = '0';
}

// INSTAGRAM , INS :HOVER
// ins-14
function overEvent14() {
    var overDiv = document.getElementById('ins-14');
    overDiv.style.opacity = '1';
}
function outEvent14() {
    var outDiv = document.getElementById('ins-14');
    outDiv.style.opacity = '0';
}

// ins-15
function overEvent15() {
    var overDiv = document.getElementById('ins-15');
    overDiv.style.opacity = '1';
}
function outEvent15() {
    var outDiv = document.getElementById('ins-15');
    outDiv.style.opacity = '0';
}
// ins-16
function overEvent16() {
    var overDiv = document.getElementById('ins-16');
    overDiv.style.opacity = '1';
}
function outEvent16() {
    var outDiv = document.getElementById('ins-16');
    outDiv.style.opacity = '0';
}
// ins-17
function overEvent17() {
    var overDiv = document.getElementById('ins-17');
    overDiv.style.opacity = '1';
}
function outEvent17() {
    var outDiv = document.getElementById('ins-17');
    outDiv.style.opacity = '0';
}
// ins-18
function overEvent18() {
    var overDiv = document.getElementById('ins-18');
    overDiv.style.opacity = '1';
}
function outEvent18() {
    var outDiv = document.getElementById('ins-18');
    outDiv.style.opacity = '0';
}
// ins-19
function overEvent19() {
    var overDiv = document.getElementById('ins-19');
    overDiv.style.opacity = '1';
}
function outEvent19() {
    var outDiv = document.getElementById('ins-19');
    outDiv.style.opacity = '0';
}
// ins-20
function overEvent20() {
    var overDiv = document.getElementById('ins-20');
    overDiv.style.opacity = '1';
}
function outEvent20() {
    var outDiv = document.getElementById('ins-20');
    outDiv.style.opacity = '0';
}

// 4. VIDEO & VIDEO__HIDDEN
    // 4.1. hide the videos when clicking the 'x' buttons
        // '.video' - the circle-video
            document.getElementById('close-video').addEventListener('click', function() {
                var hideVideo = document.getElementById('video');
                hideVideo.style.display = 'none';
            })
        // '.video__hidden' - the zoom-video
            document.getElementById('close-video-2').addEventListener('click', function() {
                var hideVideo2 = document.getElementById('video__hidden');
                hideVideo2.style.display = 'none';
            })

    // 4.2. Show '.video__hidden' when clicking somewhere in '.video'
        document.getElementById('video').addEventListener('click', function() {
        var showVideoHidden = document.getElementById('video__hidden');
        showVideoHidden.style.display = 'block';
        })

    // 4.3. '#video__chapters--control'
        var chaptersControler = document.getElementById('video__chapters--control');
        var videoHidden = document.querySelector('.video__hidden video'); 
        // 4.3.1. Show '#video__chapters--control' n pause the video
            document.getElementById('video__chapters--open').addEventListener('click' , function() {
                chaptersControler.style.display = 'block';
                videoHidden.pause();
                videoHidden.style.cssText = 'filter: blur(6px); -webkit-filter: blur(6px);';
            });
    
        // 4.3.2. Hide '#video__chapters--control' n play the video
            document.getElementById('chapters-icon').addEventListener('click' , function() {
                chaptersControler.style.display = 'none';
                videoHidden.play();
                videoHidden.style.cssText = 'filter: none; -webkit-filter: none;';
            });

    // 4.4. CHAPTERS BORDER LEFT
        // var borderLeft1 = document.querySelector('#borderLeft1 span');
        // var borderLeft2 = document.querySelector('#borderLeft2 span');
        // var borderLeft3 = document.querySelector('#borderLeft3 span');
        // var borderLeft4 = document.querySelector('#borderLeft4 span');
        // var borderLeft5 = document.querySelector('#borderLeft5 span');

        // var leftVid1 = document.getElementById('leftVid1');
        // var leftVid2 = document.getElementById('leftVid2');
        // var leftVid3 = document.getElementById('leftVid3');
        // var leftVid4 = document.getElementById('leftVid4');
        // var leftVid5 = document.getElementById('leftVid5');

        // var leftVid = document.querySelector('.leftVid');

        // borderLeft1
            document.getElementById('borderLeft1').addEventListener('click' , function() {
            // Hide option
            // borderLeft2.classList.remove('chapters-border-left');
            // borderLeft3.classList.remove('chapters-border-left');
            // borderLeft4.classList.remove('chapters-border-left');
            // borderLeft5.classList.remove('chapters-border-left');
            // Hide video
            // leftVid2.style.display = 'none';
            // leftVid3.style.display = 'none';
            // leftVid4.style.display = 'none';
            // leftVid5.style.display = 'none';

            // Show option
            // borderLeft1.classList.add('chapters-border-left');
            // Show video
            // leftVid1.style.display = 'block';
            });
        // borderLeft2
            document.getElementById('borderLeft2').addEventListener('click' , function() {
            // Hide
            // borderLeft1.classList.remove('chapters-border-left');
            // borderLeft3.classList.remove('chapters-border-left');
            // borderLeft4.classList.remove('chapters-border-left');
            // borderLeft5.classList.remove('chapters-border-left');
            // Hide video
            // leftVid1.style.display = 'none';
            // leftVid3.style.display = 'none';
            // leftVid4.style.display = 'none';
            // leftVid5.style.display = 'none';

            // Show option
            // borderLeft2.classList.add('chapters-border-left');
            // Show video
            // leftVid2.style.display = 'block';
            });
        // borderLeft3
            document.getElementById('borderLeft3').addEventListener('click' , function() {
            // Hide
            // borderLeft1.classList.remove('chapters-border-left');
            // borderLeft2.classList.remove('chapters-border-left');
            // borderLeft4.classList.remove('chapters-border-left');
            // borderLeft5.classList.remove('chapters-border-left');
            // Hide video
            // leftVid1.style.display = 'none';
            // leftVid2.style.display = 'none';
            // leftVid4.style.display = 'none';
            // leftVid5.style.display = 'none';

            // Show option
            // borderLeft3.classList.add('chapters-border-left');
            // Show video
            // leftVid3.style.display = 'block';
            });
        // borderLeft4
            document.getElementById('borderLeft4').addEventListener('click' , function() {
            // Hide
            // borderLeft1.classList.remove('chapters-border-left');
            // borderLeft2.classList.remove('chapters-border-left');
            // borderLeft3.classList.remove('chapters-border-left');
            // borderLeft5.classList.remove('chapters-border-left');
            // Hide video
            // leftVid1.style.display = 'none';
            // leftVid2.style.display = 'none';
            // leftVid3.style.display = 'none';
            // leftVid5.style.display = 'none';

            // Show option
            // borderLeft4.classList.add('chapters-border-left');
            // Show video
            // leftVid4.style.display = 'block';
            });
        // borderLeft5
            document.getElementById('borderLeft5').addEventListener('click' , function() {
            // Hide
            // borderLeft1.classList.remove('chapters-border-left');
            // borderLeft2.classList.remove('chapters-border-left');
            // borderLeft3.classList.remove('chapters-border-left');
            // borderLeft4.classList.remove('chapters-border-left');
            // Hide video
            // leftVid1.style.display = 'none !important';
            // leftVid2.style.display = 'none';
            // leftVid3.style.display = 'none';
            // leftVid4.style.display = 'none';

            // Show option
            // borderLeft5.classList.add('chapters-border-left');
            // Show video
            // leftVid5.style.display = 'block';
            });

// 5. SALEOFF & MISSOUT-CONTAINER
    var missoutContainer = document.getElementById('missout-container');
    var saleOff = document.getElementById('saleoff');
    // Show
        document.getElementById('saleoff').addEventListener('click' , function() {
            this.style.cssText = 'bottom: -100%; transition: all 4s';
            missoutContainer.style.display = 'block';
        })
    // Hide
        document.getElementById('missout-close').addEventListener('click' , function() {
            missoutContainer.style.display = 'none';
            saleOff.style.cssText = 'bottom: 0%; transition: all 0.5s';
        })

// 6. MESSAGES
    var messNotify = document.getElementById('messages');
    // MESSAGES ICONS
        var messIcon1 = document.getElementById('mess1');
        var messIcon2 = document.getElementById('mess2');
        document.getElementById('messages__icon').addEventListener('click' , function() {
            messIcon1.classList.toggle('ihidden');
            messIcon2.classList.toggle('ishow');
            // for show/hidden #messages at 768 point
            var screenWidth = screen.width;
            if (screenWidth < 768) {
                messNotify.style.display = 'block';
            }
            if (screenWidth >= 768) {
                messNotify.classList.toggle('messNotify');
            }
        })
    // TO CLOSE MESSAGES
        document.getElementById('welcome__close').addEventListener('click' , function() {
            // for show/hidden #messages at 768 point
            var screenWidth = screen.width;
            if (screenWidth < 768) {
                messNotify.style.display = 'none';
            }
            if (screenWidth >= 768) {
                messNotify.classList.toggle('messNotify');
            }
            messIcon1.classList.toggle('ishow');
            messIcon2.classList.toggle('ihidden');
        });

