const stars = document.getElementById('stars');
const sparkles = document.getElementById('sparkles');
const hearts = document.getElementById('hearts');
const grassBack = document.getElementById('grassBack');
const grassFront = document.getElementById('grassFront');
const lilyField = document.getElementById('lilyField');
const petalRain = document.getElementById('petalRain');

const desktopLilies = [
  { x: 2,  w: 150, h: 350, stemH: 155, bloom: 92,  tilt: '-14deg', z: 5, sway: '5.2s', open: 0.92, buds: [] },
  { x: 10, w: 190, h: 430, stemH: 198, bloom: 116, tilt: '-10deg', z: 7, sway: '5.6s', open: 1.02, buds: [{ x: '-42px', r: '-16deg' }] },
  { x: 18, w: 170, h: 390, stemH: 182, bloom: 106, tilt: '9deg', z: 6, sway: '4.9s', open: 0.96, buds: [] },
  { x: 28, w: 220, h: 500, stemH: 242, bloom: 134, tilt: '-13deg', z: 10, sway: '5.1s', open: 1.06, buds: [{ x: '48px', r: '18deg' }] },
  { x: 39, w: 260, h: 580, stemH: 292, bloom: 160, tilt: '-6deg', z: 14, sway: '5.8s', open: 1.12, buds: [{ x: '-62px', r: '-18deg' }, { x: '56px', r: '16deg' }] },
  { x: 50, w: 290, h: 620, stemH: 312, bloom: 176, tilt: '0deg', z: 16, sway: '6.2s', open: 1.18, buds: [] },
  { x: 63, w: 255, h: 570, stemH: 286, bloom: 156, tilt: '9deg', z: 13, sway: '5.7s', open: 1.1, buds: [{ x: '-54px', r: '-12deg' }] },
  { x: 75, w: 210, h: 480, stemH: 228, bloom: 128, tilt: '14deg', z: 9, sway: '5.1s', open: 1.02, buds: [{ x: '44px', r: '20deg' }] },
  { x: 86, w: 182, h: 410, stemH: 186, bloom: 108, tilt: '-8deg', z: 7, sway: '4.8s', open: 0.96, buds: [] },
  { x: 92, w: 148, h: 342, stemH: 150, bloom: 88,  tilt: '10deg', z: 5, sway: '5.3s', open: 0.9, buds: [] }
];

const tabletLilies = [
  { x: 4,  w: 120, h: 280, stemH: 130, bloom: 78,  tilt: '-10deg', z: 5, sway: '5.1s', open: 0.9, buds: [] },
  { x: 14, w: 142, h: 330, stemH: 152, bloom: 90,  tilt: '-8deg',  z: 6, sway: '5.4s', open: 0.98, buds: [{ x: '-28px', r: '-16deg' }] },
  { x: 26, w: 150, h: 350, stemH: 168, bloom: 98,  tilt: '9deg',   z: 8, sway: '5s',   open: 1.02, buds: [] },
  { x: 38, w: 178, h: 400, stemH: 190, bloom: 114, tilt: '-7deg',  z: 11, sway: '5.8s', open: 1.06, buds: [{ x: '34px', r: '15deg' }] },
  { x: 50, w: 198, h: 450, stemH: 216, bloom: 126, tilt: '0deg',   z: 13, sway: '6.1s', open: 1.12, buds: [] },
  { x: 64, w: 176, h: 405, stemH: 190, bloom: 112, tilt: '8deg',   z: 11, sway: '5.5s', open: 1.04, buds: [{ x: '-34px', r: '-15deg' }] },
  { x: 78, w: 146, h: 336, stemH: 154, bloom: 92,  tilt: '12deg',  z: 7, sway: '5s',   open: 0.98, buds: [] },
  { x: 90, w: 118, h: 278, stemH: 128, bloom: 76,  tilt: '8deg',   z: 5, sway: '5.2s', open: 0.88, buds: [] }
];

const mobileLilies = [
  { x: 4,  w: 88,  h: 205, stemH: 94,  bloom: 56, tilt: '-8deg', z: 5, sway: '4.9s', open: 0.92, buds: [] },
  { x: 18, w: 102, h: 235, stemH: 108, bloom: 64, tilt: '-6deg', z: 6, sway: '5.2s', open: 0.98, buds: [{ x: '-18px', r: '-16deg' }] },
  { x: 33, w: 116, h: 272, stemH: 126, bloom: 74, tilt: '7deg',  z: 8, sway: '5.4s', open: 1.02, buds: [] },
  { x: 49, w: 134, h: 314, stemH: 146, bloom: 88, tilt: '0deg',  z: 11, sway: '5.8s', open: 1.08, buds: [] },
  { x: 66, w: 116, h: 272, stemH: 126, bloom: 74, tilt: '7deg',  z: 8, sway: '5.2s', open: 1.01, buds: [{ x: '18px', r: '15deg' }] },
  { x: 81, w: 100, h: 232, stemH: 108, bloom: 64, tilt: '10deg', z: 6, sway: '4.9s', open: 0.97, buds: [] }
];

function chooseSceneProfile() {
  const width = window.innerWidth;
  if (width <= 520) {
    return {
      stars: 60,
      sparkles: 16,
      backGrass: 56,
      frontGrass: 84,
      lilies: mobileLilies
    };
  }

  if (width <= 900) {
    return {
      stars: 82,
      sparkles: 22,
      backGrass: 72,
      frontGrass: 104,
      lilies: tabletLilies
    };
  }

  return {
    stars: 110,
    sparkles: 26,
    backGrass: 95,
    frontGrass: 130,
    lilies: desktopLilies
  };
}

function clearScene() {
  stars.innerHTML = '';
  sparkles.innerHTML = '';
  grassBack.innerHTML = '';
  grassFront.innerHTML = '';
  lilyField.innerHTML = '';
}

function createStars(count) {
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement('span');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 70}%`;
    star.style.opacity = (0.18 + Math.random() * 0.75).toFixed(2);
    star.style.setProperty('--dur', `${2 + Math.random() * 3.6}s`);
    stars.appendChild(star);
  }
}

function createSparkles(count) {
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.style.left = `${6 + Math.random() * 88}%`;
    spark.style.top = `${48 + Math.random() * 34}%`;
    spark.style.setProperty('--dur', `${1.8 + Math.random() * 2.4}s`);
    sparkles.appendChild(spark);
  }
}

function createGrass(container, count, minHeight, maxHeight) {
  for (let i = 0; i < count; i += 1) {
    const blade = document.createElement('span');
    blade.className = 'grass-blade';
    const height = minHeight + Math.random() * (maxHeight - minHeight);
    blade.style.left = `${(i / count) * 100}%`;
    blade.style.height = `${height}px`;
    blade.style.setProperty('--dur', `${2.8 + Math.random() * 2.8}s`);
    blade.style.transform = `rotate(${(-10 + Math.random() * 20).toFixed(2)}deg)`;
    container.appendChild(blade);
  }
}

function createPetals() {
  return Array.from({ length: 6 }, (_, index) => {
    const angle = index * 60;
    return `<span class="petal" style="transform: rotate(${angle}deg)"></span>`;
  }).join('');
}

function createStamens() {
  return [-18, 0, 18].map((angle) => (
    `<span class="stamen" style="transform: translateX(-50%) rotate(${angle}deg)"></span>`
  )).join('');
}

function createLily(config) {
  const lily = document.createElement('div');
  lily.className = 'lily';
  lily.style.setProperty('--x', `${config.x}%`);
  lily.style.setProperty('--w', `${config.w}px`);
  lily.style.setProperty('--h', `${config.h}px`);
  lily.style.setProperty('--stem-h', `${config.stemH}px`);
  lily.style.setProperty('--bloom', `${config.bloom}px`);
  lily.style.setProperty('--tilt', config.tilt);
  lily.style.setProperty('--z', config.z);
  lily.style.setProperty('--sway', config.sway);
  lily.style.setProperty('--open', config.open);

  lily.innerHTML = `
    <div class="stem"></div>
    <div class="leaf left"></div>
    <div class="leaf right"></div>
    <div class="bloom-wrap">
      <div class="bloom">
        ${createPetals()}
        ${createStamens()}
        <div class="center"></div>
      </div>
    </div>
    ${config.buds.map((bud) => `
      <div class="bud" style="--bud-x:${bud.x}; --bud-r:${bud.r};"></div>
    `).join('')}
  `;

  lilyField.appendChild(lily);
}

function buildScene() {
  clearScene();

  const profile = chooseSceneProfile();
  const isMobile = window.innerWidth <= 520;

  createStars(profile.stars);
  createSparkles(profile.sparkles);
  createGrass(grassBack, profile.backGrass, isMobile ? 28 : 40, isMobile ? 70 : 100);
  createGrass(grassFront, profile.frontGrass, isMobile ? 38 : 55, isMobile ? 92 : 135);
  profile.lilies.forEach(createLily);
}

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  const mobile = window.innerWidth <= 520;
  const size = mobile ? 18 + Math.random() * 18 : 22 + Math.random() * 24;
  heart.style.setProperty('--size', `${size}px`);
  heart.style.left = `${12 + Math.random() * 76}%`;
  heart.style.bottom = `${8 + Math.random() * 18}vh`;
  heart.style.setProperty('--dur', `${5 + Math.random() * 3.6}s`);
  heart.style.setProperty('--drift', `${-20 + Math.random() * 40}px`);
  heart.style.background = `rgba(255, ${160 + Math.floor(Math.random() * 45)}, ${205 + Math.floor(Math.random() * 35)}, ${0.62 + Math.random() * 0.24})`;
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 9000);
}

function spawnPetal() {
  const petal = document.createElement('span');
  petal.className = 'petal-fall';
  petal.style.left = `${8 + Math.random() * 84}%`;
  petal.style.top = `${14 + Math.random() * 18}%`;
  petal.style.setProperty('--dur', `${7 + Math.random() * 4}s`);
  petal.style.setProperty('--drift', `${-70 + Math.random() * 140}px`);
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  petalRain.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

buildScene();

for (let i = 0; i < 10; i += 1) {
  setTimeout(spawnHeart, i * 520);
}

for (let i = 0; i < 6; i += 1) {
  setTimeout(spawnPetal, i * 900);
}

setInterval(spawnHeart, 820);
setInterval(spawnPetal, 1600);

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildScene, 180);
});
