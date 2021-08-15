
const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
	reverse: true,
	max: 15,
	speed: 1000,
	scale: 1.02,
	glare: true,
	reset: true,
	perspective: 500,
	transition: true,
	"max-glare": 0.25,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -25,
	gyroscopeMaxAngleX: 25,
	gyroscopeMinAngleY: -25,
	gyroscopeMaxAngleY: 25
});


window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 5) nav.className = ''; else nav.className = 'scroll';
};