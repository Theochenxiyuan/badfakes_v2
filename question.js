const totalNumber = 20;
let questionNumber = 0;
let questions = [];
let correct = 0;
let correctRate = 0;
const cutOff = 60;
const explanations = [
  'You can see his face has a different skin colour and texture compared to his forehead and neck.',
  'You can see there are some unnatural shadows around his nose and left eye.',
  'You can see a clear boundary on her cheek.',
  "Judging by his cloth and hair, the person is most likely facing at an orange-ish lighting. However, you can't see any orange tinge or reflection on his face skin. ",
  'While it is not guaranteed, keep in mind that the non-stereotypical gender presentation can be a result of face swapping between a man and a woman.',
  'While there is no clear boundary, the texture on his face is slightly different to the top of his forehead. Additionally, his nose looks like it is printed on a surface instead of being a solid body. ',
  "It's not hard to tell because there are too many unnatural movements. Some weird artifacts also appear near his mouth. ",
  "This one is hard but if you pay attention, you can see, unlike his left eye, his right eye isn't even fully opened for the most part of the video as supposed. You may also notice some inconsistency of skin colour right under his forehead. ",
  'You can see some small artifacts keeps showing up and his chin moves a bit unnaturally. ',
  'You can see the colour of her lips is inconsistent. Additionally, her face skin is weirdly bright and reflective compared to her neck and hair. ',
];

class Question {
  constructor(type, ans, num, exp = 'No explanation needed.') {
    this.type = type;
    this.ans = ans;
    this.num = num;
    this.exp = explanations[exp];
    const ext = this.type === 'img' ? 'jpg' : 'mp4';
    this.src = `${this.type}/${this.ans}/${this.num}.${ext}`;
  }
}

let orders = [];

while (orders.length < totalNumber) {
  let random = (Math.random() * (totalNumber - 1)).toFixed();
  random = Number(random);
  if (!orders.includes(random)) {
    orders.push(random);
  }
}

questions[orders[0]] = new Question('img', 'real', 1);
questions[orders[1]] = new Question('img', 'real', 2);
questions[orders[2]] = new Question('img', 'real', 3);
questions[orders[3]] = new Question('img', 'real', 4);
questions[orders[4]] = new Question('img', 'real', 5);
questions[orders[5]] = new Question('img', 'real', 6);

questions[orders[6]] = new Question('img', 'fake', 1, 0);
questions[orders[7]] = new Question('img', 'fake', 2, 1);
questions[orders[8]] = new Question('img', 'fake', 3, 2);
questions[orders[9]] = new Question('img', 'fake', 4, 3);
questions[orders[10]] = new Question('img', 'fake', 5, 4);
questions[orders[11]] = new Question('img', 'fake', 6, 5);

questions[orders[12]] = new Question('vid', 'real', 1);
questions[orders[13]] = new Question('vid', 'real', 2);
questions[orders[14]] = new Question('vid', 'real', 3);
questions[orders[15]] = new Question('vid', 'real', 4);

questions[orders[16]] = new Question('vid', 'fake', 1, 6);
questions[orders[17]] = new Question('vid', 'fake', 2, 7);
questions[orders[18]] = new Question('vid', 'fake', 3, 8);
questions[orders[19]] = new Question('vid', 'fake', 4, 9);
