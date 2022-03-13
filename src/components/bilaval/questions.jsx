
  // Create ID for each question and answer
  const questions = [{
    topic: "Hello! this is topic one",
    questionText: "Hello there! So before we get started with money management, first you should decide where you will be living for the school year",
    answerOptions: [
        { answerText: "On Campus", img: "assets/offcampus.png", feedback: "Nice! you decided to live on campus with fellow first years. Everything is already paid up front. " },
        { answerText: "Off Campus", img: "assets/oncampus.png", feedback: "Great choice! I did the same thing during my first year. You get to save quite more compared to living on campus and get to enjoy your freedom." },
        { answerText: "Commute", img: "assets/commute.png", feedback: "Domestic bliss!. The cheapest of the three options. You will be saving a lot of money by commuting and will not have to worry too much about spending money on food and accomodation." },
    ],
    hint: "Hint 1",
    isLast: false

},
{
    topic: "This is topic 1",
    questionText: "Now that you are settled in at your new place, how do you pay for grocerries?",
    answerOptions: [
        { answerText: "Cash", img: "assets/cash.png", feedback: 'Having cash on hand is good but having a credit card is better. Often credit cards provide alot of benifits such as cashback or even airmiles that you can use to book flight tickets' },
        { answerText: "Credit Card", img: "assets/oncampus.png", feedback: 'Perfect! Making payements using credit cards ensures that you are building up a good credit score which can help you get loan from bank or renting out apartments in future. Credit cards also provide cashbacks and other benifits that you can use to buy other things ' },
        { answerText: "Debit Card", img: "assets/oncampus.png", feedback: 'Using a debit card is convinient having a credit card along with debit card can provide you alot more benifits such as cashbacks, airmiles and a good credit score.' }
    ],
    hint: "Hint 2",
    isLast: true
},
{
    topic: "This is topic 2",
    questionText: "After doing some grocerries and paying off your rent, you have some extra money in hand. What would you usually do with this money?",
    answerOptions: [
        { answerText: "Invest", img: "assets/invest.png", feedback: "Investing your money is great way to grow it. Just make sure you do not put all your eggs in one basket and try to diversify your portfolio" },
        { answerText: "Save", img: "assets/save.png", feedback: "Saving your leftover money a good way to create an emergency fund, specially if you are out of your job or need  urgent money for some other reasons. But once you have create an emergency fun usign your saving it is good idea to start thinking about investing to compound you money." },
        { answerText: "Spend", img: "assets/spend.png", feedback: 'It is nice to have some leftover cash in hand that you can use on extra stuff, but remember this extra cash can be better used to invest. This investment can be short term or long term but will definitely come in handy later in future!' }
    ],
    hint: "Hint 2"
},
{
    topic: "This is topic 3",
    questionText: "Now that you know a bit about ivesting and why you shoulddo so, one of the best ways to start investing in Canada is to start putting funds in your TFSA account. Do you know what a TFSA account is?",
    answerOptions: [
        { answerText: "Yes", img: "assets/invest.png", feedback: "Great! Just make sure you do not go over the limit of your TFSA to avoid paying taxes" },
        { answerText: "No", img: "assets/save.png", feedback: "Saving your leftover money a good way to create an emergency fund, specially if you are out of your job or need  urgent money for some other reasons. But once you have create an emergency fun usign your saving it is good idea to start thinking about investing to compound you money." }
    ],
    hint: "This is hint 3"
},
];

// const questionsnew = [[{topic:"",questionText:'....', answerOptions: [...]}]]

export default questions;

// topic: { plaintText: [
//     {textMsg:"Hello welcome to ", link: "McMaster University"},
//     {textMsg:"! I am Shivam, your Student Mentor for this year. I will be helping you adjust to the new uni life with all thing finance. Let’s start with a basic tutorial on how the game will work and progress. ", link: ""}
//     ]
//  },