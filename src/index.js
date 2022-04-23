import "./styles.css";

const render = (event) => {
  let c = document.getElementById("c");

  let density = 20;

  if (c) {
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    let ctx = c.getContext("2d");
    for (let i = 0; i < c.width / density; i++) {
      for (let j = 0; j < c.height / density; j++) {
        let x = i * density;
        let y = j * density;

        let dx = x - event.x;
        let dy = y - event.y;
        let r = Math.sqrt(dx * dx + dy * dy);
        let radius = 4;
        ctx.beginPath();
        ctx.arc(
          x + (30 * dx) / r,
          y + (30 * dy) / r,
          radius * Math.log(100 / r + 1) + 2,
          0,
          Math.PI * 2
        );
        //ctx.stroke();

        //        ctx.fillStyle = `rgb(${Math.min(Math.floor(100 * 1) / r, 255)}, 0, 0)`;
        ctx.fillStyle = `rgb(${255 - Math.floor(r)}, 0, 0)`;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
};

// Object.keys(window).forEach((key) => {
//   if (/^on/.test(key)) {
//     window.addEventListener(key.slice(2), (event) => {
//       //       console.log(event);
//     });
//   }
// });

// setInterval(render, 100);

render({ x: 0, y: 0 });
window.addEventListener("mousemove", render);
