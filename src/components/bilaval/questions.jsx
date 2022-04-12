
import oncampus from '../assets/oncampus.png';
import offcampus from '../assets/offcampus.png';
import commute from '../assets/commute.png';
import store from '../assets/store.png';
import library from '../assets/library.png';
import second from '../assets/second.png';
import cash from '../assets/cash.png';
import visa from '../assets/visa.png';
import debit from '../assets/debit.png';
import save from '../assets/save.png';
import yes from '../assets/yes.png';
import no from '../assets/no.png';
import filetax from '../assets/filetax.png';
import professional from '../assets/professional.png';
import sad from '../assets/sad.png';
  // Create ID for each question and answer
  const questions = [{
    topic: "Hello there! So before we get started with money management, first let's get you settled down",
    questionText: "Hope you were able to think about where you want to live, so what did you decide?" ,
    answerOptions: [
        {id: "oncampus" ,  answerText: "On Campus", img: oncampus, feedback: "Nice! you decided to live on campus with fellow first years. Everything is already paid up front. " },
        {id:"offcampus" , answerText: "Off Campus", img: offcampus, feedback: "Great choice! I did the same thing during my first year. You get to save quite more compared to living on campus and get to enjoy your freedom." },
        {id: "commute",  answerText: "Commute", img: commute, feedback: "Domestic bliss!. The cheapest of the three options. You will be saving a lot of money by commuting and will not have to worry too much about spending money on food and accomodation." },
    ],
    hint: "I lived on campus for my first year which was a great way to know people and make connections but this can be a bit expensive. In my second year I decided to move off campus so that I could still live near campus with my friends and also save on some rent",
    isLast: false,
    EOF: false

},
{
    topic: "Hello there! So before we get started with money management, first let's get you settled down",
    questionText: "Now that you classes have started, how are you planning to get your textbooks?" ,
    answerOptions: [
        { id:"campusstore",answerText: "Campus store", img: store, feedback: "Buying from campus store is a good idea especially if you need the latest edition but are usually expensive." },
        { id:"library", answerText: "Libraries", img: library, feedback: "Renting from libraries is always a good way to avoid paying for textbooks but remeber libraries might not have all the textbooks you require." },
        { id:"secondhand", answerText: "Buy second-hand", img: second, feedback: "Buying second-hand from someone else is most convinient way to save money on textbooks, you can also sell these to someone else once you are done with the course."}
    ],
    hint: "Pss pss! After first year, I have never bothered buying textbooks from the campus store. I usually rent from libraries or buy from someone else.",
    isLast: true,
    EOF: false

},
{
    topic: "Now that you have figured out your living and academic situation, let's get to some money and banking stuff!",
    questionText: "Regardless of where you are living, you will often do you weekly grocerries. How do you usually pay for your grocerries?",
    answerOptions: [
        
        {  id:"cash", answerText: "Cash", img: cash, feedback: 'Having cash on hand is good but having a credit card is better. Often credit cards provide alot of benifits such as cashback or even airmiles that you can use to book flight tickets' },
        { id:"creditcard", answerText: "Credit Card", img: visa, feedback: 'Perfect! Making payements using credit cards ensures that you are building up a good credit score which can help you get loan from bank or renting out apartments in future. Credit cards also provide cashbacks and other benifits that you can use to buy other things ' },
        {  id:"debitcard",answerText: "Debit Card", img: debit, feedback: 'Using a debit card is convinient having a credit card along with debit card can provide you alot more benifits such as cashbacks, airmiles and a good credit score.' }
    ],
    hint: "When I first started university, I was just using cash and debit card. But soon I realised that I was missing out on building a credit score and some other benifits obtained from using a credit card. First students can often get some additional benifits or cashback when they get their first credit card.",
    isLast: true,
    EOF:false
},
{
    topic: "After doing some grocerries and paying off your rent, you have some extra money in hand. Let us see how you can use this extra money",
    questionText: "What do you usually do with extra cash in hand",
    answerOptions: [
        { id:"invest", answerText: "Invest", img: "https://cdn-icons-png.flaticon.com/512/4221/4221642.png", feedback: "Investing your money is great way to grow it. Just make sure you do not put all your eggs in one basket and try to diversify your portfolio" },
        {  id:"save",answerText: "Save", img: save, feedback: "Saving your leftover money a good way to create an emergency fund, specially if you are out of your job or need  urgent money for some other reasons. But once you have created an emergency fund usign your saving it is good idea to start thinking about investing to compound you money." },
        { id:"spend", answerText: "Spend", img: "https://cdn-icons-png.flaticon.com/512/5068/5068196.png", feedback: 'It is nice to have some leftover cash in hand that you can use on extra stuff, but remember this extra cash can be better used to invest. This investment can be short term or long term but will definitely come in handy later in future!' }
    ],
    hint: "I personally did not even know about investing till my last year. I was usually just leaving my money in my bank account which not only does not grow but infact after inflation adjustment, loses it's value. Once I started working part time(or even coops), I started putting some portion of my earning in an investment account.",
    isLast: false,
    EOF:false
},
{
    topic: "After doing some grocerries and paying off your rent, you have some extra money in hand. Let us see how you can use this extra money",
    questionText: "Now that you know a bit about investing and its benifits, one of the best ways to start investing in Canada is to start putting some funds in your TFSA account. Do you know what a TFSA account is?",
    answerOptions: [
        {  id:"tfsayes",answerText: "Yes", img: yes, feedback: "Great! Just make sure you do not go over the limit of your TFSA to avoid paying taxes" },
        {  id:"tfsano",answerText: "No", img: no, feedback: "A TFSA is an account that can hold cash savings, as well as common investment vehicles like mutual funds, segregated funds, and more. As a student who just started their understanding how money related stuff works you might not even know what most of these things mean and that is totally fine! You just need to know that A TFSA allows you to set money aside in eligible investments and watch those savings grow tax-free throughout your lifetime" }
    ],
    hint: "I did not know how what or how TFSA works until my last year. If you do not know about TFSA, you might want to now because it is a great way to gradually increase you money. I started putting money in my TFSA account and I already have a good amount of gain on my investments.",
    isLast: true,
    EOF:false
},
{
    topic: "Regardless of whether you have a job or not, even as an University student you are required to file you taxes. So let's get started with learning about filling taxes.",
    questionText: "Have you ever filled taxes before?",
    answerOptions: [
        { id:"taxmyself", answerText: "I file my own taxes", img: filetax, feedback: "Great! Just make sure you know what you are doing and if you ever need help, McMaster has MacMoney center that runs clinics to help you do your taxes. Just make sure you have you SIN number and tax documents with you when you visit them." },
        {id:"taxprof", answerText: "Hire a professional", img: professional, feedback: "Make sure you choose a trusted professional." },
        {id:"taxnever", answerText: "No, I have never", img: sad, feedback: "Filling taxes can be intimidating, especially if you have never done them before. Filling taxes does not just mean paying money to government, infact you also get something called tax return which is basically some cash in hand that you can always save or invest." }
    ],
    hint: "I personally forgot to file my taxes in my first year before the deadline, but luckily if you are not earning any money CRA lets you file your taxes even after the deadline.",
    isLast: false,
    EOF:false
},
{
    topic: "Regardless of whether you have a job or not, even as an University student you are required to file you taxes. So let's get started with learning about filling taxes.",
    questionText: "Do you know of any websites or resources that allow you to file taxes?",
    answerOptions: [
        { id:"resourcetaxyes",answerText: "Yes", img: yes, feedback: "Great! Just make sure you are using trusted resources aproved by the government." },
        { id:"resourcetaxno",answerText: "No", img: no, feedback: "There are alot of free resources such as tax clinics and websites such as SimpleTax and TurboTax that let you file your taxes for free. " }
    ],
    hint: "I have been using SimpleTax since first year to file taxes because they provide a really straight forward way to file taxes. You only need to have access to your tax documents and they do all the work.",
    isLast: false,
    EOF:false
},
{
    topic: "Regardless of whether you have a job or not, even as an University student you are required to file you taxes. So let's get started with learning about filling taxes.",
    questionText: "Do you know which documents you require to file taxes as a university student?",
    answerOptions: [
        { id:"doctaxyes", answerText: "Yes", img: yes, feedback: "That is perfect! Seems like you are on a right track to file your taxes. Again make sure to reach out to MacMoney center if you do need any assistance." },
        { id:"doctaxno", answerText: "No", img: no, feedback: "As a university student you usually require you Tution forms that you can access through Mosaic, your rent receipts and your T4 forms if you are wokring while studying which you can get from your employer. Other than that make sure you have you SIN number with you when filling taxes." }
    ],
    hint: "Regardless of what type of resource you use, you might want to have all your tax related documents on hand when filling taxes so that you do not miss out anything. Pss pss! if you are an Engineering student, you donate a certain amount to lab funds so make sure to report that to get deductions for that in your tax return.",
    isLast: true,
    EOF:true
},
];


export default questions;
