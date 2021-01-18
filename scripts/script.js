/*

ALTO NIVEL DE GAMBIARRA

*/

const input = document.querySelector('.phrase-input input');

const canvas = document.querySelector('#preview');
const ctx = canvas.getContext('2d');

canvas.width = 17;
canvas.height = 16;
ctx.imageSmoothingEnabled = false;

const image = new Image();
image.onload = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(image, 0, 0);
};

const allowedCharacter = [
  'A',
  'Á',
  'À',
  'Â',
  'Ã',
  'Ä',

  'B',
  'C',
  'D',

  'E',
  'É',
  'È',
  'Ê',
  'Ë',

  'F',
  'G',
  'H',

  'I',
  'Í',
  'Ì',
  'Î',
  'Ï',

  'J',
  'K',
  'L',
  'M',
  'N',

  'O',
  'Ó',
  'Ò',
  'Ô',
  'Õ',
  'Ö',

  'P',
  'Q',
  'R',
  'S',
  'T',

  'U',
  'Ú',
  'Ù',
  'Û',
  'Ü',

  'V',
  'W',
  'X',
  'Y',
  'Z',
  ' ',
];

input.addEventListener('keypress', function (event) {
  if (!allowedCharacter.includes(event.key.toUpperCase())) {
    event.preventDefault();
  }

  if (event.key == 'Enter') {
    draw();
  }
});

input.addEventListener('input', function () {
  if (this.value == secretohehehe(true)) {
    secretohehehe();
  }

  draw();
});

let sets = [];

async function draw() {
  let value = input.value.toUpperCase();
  value = value.replaceAll('A', 'Á');
  value = value.replaceAll('À', 'Á');
  value = value.replaceAll('Ã', 'Â');
  value = value.replaceAll('Ä', 'Â');

  value = value.replaceAll('E', 'É');
  value = value.replaceAll('È', 'É');
  value = value.replaceAll('Ë', 'Ê');

  value = value.replaceAll('Í', 'I');
  value = value.replaceAll('Ì', 'I');
  value = value.replaceAll('Î', 'I');
  value = value.replaceAll('Ï', 'I');

  value = value.replaceAll('O', 'Ó');
  value = value.replaceAll('Ò', 'Ó');
  value = value.replaceAll('Õ', 'Ô');
  value = value.replaceAll('Ö', 'Ô');

  value = value.replaceAll('Ú', 'U');
  value = value.replaceAll('Ù', 'U');
  value = value.replaceAll('Û', 'U');
  value = value.replaceAll('Ü', 'U');

  value = value.split(' ');

  await createSetOfLetters(value[value.length - 1])
    .then((result) => {
      image.src = result;
      sets[value.length - 1] = result;
      sets = sets.slice(0, value.length);
      input.classList.remove('wrong');
    })
    .catch((err) => {
      console.log(err);
      input.classList.add('wrong');
    });

  drawFullText();
}

const preview = document.querySelector('#full-text img');
const fullText = document.createElement('canvas');
const fullTextContext = fullText.getContext('2d');
let previewImagesToLoad = 0;

fullText.width = 17 * 4;
fullText.height = 16;
fullTextContext.imageSmoothingEnabled = false;

function drawFullText() {
  fullText.width = 17 * sets.length;
  previewImagesToLoad = sets.length;

  fullTextContext.clearRect(0, 0, fullText.width, fullText.height);

  sets.forEach((set, index) => {
    const image = new Image();
    image.src = set;
    image.dataset.index = index;
    image.onload = function () {
      fullTextContext.drawImage(this, this.dataset.index * 17, 0);

      previewImagesToLoad--;
      if (previewImagesToLoad == 0) {
        updatePreview();
      }
    };
  });
}

function updatePreview() {
  const boxPreview = preview.parentElement;
  boxPreview.scrollLeft = boxPreview.scrollWidth;

  preview.src = fullText.toDataURL();
}

// ---------------- secreto hehe
var _0x6644 = [
  '171430wQBSLV',
  'innerHTML',
  '505001qCBOCF',
  '158785pMVsaA',
  '3EdblFQ',
  '44130TfZDsv',
  '173008gBvWMu',
  '200306EXOCGF',
  '27106tWBjLK',
  '.links',
  'querySelector',
  '1ujciUx',
  '<span\x20class=\x22secreto\x22>Eu\x20sou\x20quem\x20vocês\x20sabem\x20que\x20eu\x20sou.</span>',
];
var _0x4c84 = function (_0x204298, _0x39b0b7) {
  _0x204298 = _0x204298 - 0x9c;
  var _0x6644a = _0x6644[_0x204298];
  return _0x6644a;
};
(function (_0x4a68c5, _0x370960) {
  var _0x4f06f8 = _0x4c84;
  while (!![]) {
    try {
      var _0x37b94b =
        parseInt(_0x4f06f8(0x9f)) +
        -parseInt(_0x4f06f8(0xa3)) +
        -parseInt(_0x4f06f8(0x9c)) +
        -parseInt(_0x4f06f8(0xa2)) +
        parseInt(_0x4f06f8(0xa0)) * parseInt(_0x4f06f8(0xa4)) +
        -parseInt(_0x4f06f8(0xa1)) +
        -parseInt(_0x4f06f8(0x9e)) * -parseInt(_0x4f06f8(0xa7));
      if (_0x37b94b === _0x370960) break;
      else _0x4a68c5['push'](_0x4a68c5['shift']());
    } catch (_0x3478cc) {
      _0x4a68c5['push'](_0x4a68c5['shift']());
    }
  }
})(_0x6644, 0x26246);
function secretohehehe(_0x22c1b6) {
  var _0x57da2c = _0x4c84;
  if (_0x22c1b6) return 'bfM';
  document[_0x57da2c(0xa6)](_0x57da2c(0xa5))[_0x57da2c(0x9d)] += _0x57da2c(
    0xa8
  );
}
