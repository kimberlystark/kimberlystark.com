import './Hero.css';

export default function Hero() {
    return (
        <section className="Hero flex-column container">
            <h1 className="Hero__intro">Hi, I'm Kimberly,
                <br />
                I'm a <span>UX/UI Designer.</span>
            </h1>

            <a href="#About"><div className="arrow-down">&darr;</div></a>
        </section>
    )
}


// document.addEventListener('DOMContentLoaded',function(event){
//     // array with texts to type in typewriter
//     var dataText = [ "Utrecht.", "Full Service.", "Webdevelopment.", "Wij zijn Codefield!"];

//     // type one text in the typwriter
//     // keeps calling itself until the text is finished
//     function typeWriter(text, i, fnCallback) {
//       // chekc if text isn't finished yet
//       if (i < (text.length)) {
//         // add next character to h1
//        document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

//         // wait for a while and call this function again for next character
//         setTimeout(function() {
//           typeWriter(text, i + 1, fnCallback)
//         }, 100);
//       }
//       // text finished, call callback if there is a callback function
//       else if (typeof fnCallback == 'function') {
//         // call callback after timeout
//         setTimeout(fnCallback, 700);
//       }
//     }
//     // start a typewriter animation for a text in the dataText array
//      function StartTextAnimation(i) {
//        if (typeof dataText[i] == 'undefined'){
//           setTimeout(function() {
//             StartTextAnimation(0);
//           }, 20000);
//        }
//        // check if dataText[i] exists
//       if (i < dataText[i].length) {
//         // text exists! start typewriter animation
//        typeWriter(dataText[i], 0, function(){
//          // after callback (and whole text has been animated), start next text
//          StartTextAnimation(i + 1);
//        });
//       }
//     }
//     // start the text animation
//     StartTextAnimation(0);
//   });








{/* <h1>Scroll Down Button #3</h1>
  <a href="#section04"><span></span>Scroll</a>
</section>
<section id="section04" class="demo"></section> */}

// #section04 { background: url(https://www.nxworld.net/example/css-scroll-down-button/bg04.jpg) center center / cover no-repeat;}