import Debug from './assets/images/events/debug.png'
import ai from './assets/images/events/ai.png'
import AndroidApplication from './assets/images/events/android.png'
import BlindCoding from './assets/images/events/blind.png'
import EthicalHacking from './assets/images/events/hacking.png'
import IOT from './assets/images/events/iot.png'
import Kahoot from './assets/images/events/kahoot.png'
import Webdesigning from './assets/images/events/web.png'
import Counter from './assets/images/events/counter.jpg'
import Treasure from './assets/images/events/treasure.jpg'

const EMdata = [
    {
        imgsrc: Debug,
        name: "Debug me",
        rules:"1. The number of participants :01", 
        rulesone:"2. This event consists of two rounds.", 
        rulestwo:"3. In the following programming language, participants will be given code to debug.",
        rulesthree:"4. Language: Javascript, C++, Java, Python"
    },
    {
        imgsrc: ai,
        name: "ARTIFICIAL INTELLIGENCE",
        rules: "1. Students can participate solo or in teams (4 members).", 
        rulesone:"2. Only 1 member to register from each team in the given google form.",
        rulestwo:"3. This event consist of two round.",
        rulesthree:"4. In ronud one, the participants make presentations and present them to the judges.",
        rulesfour: "5. A second round will take place in which the participants present their implemented projects to the judges."
    },
    {
        imgsrc: AndroidApplication,
        name: "ANDROID APPLICATION ",
        rules: "1. Students can participate in solo or teams(4 members).", 
        rulesone:"2. Participants have make a Android application from scratch in our premises.",
        rulestwo:"3. In ronud one, the participants make presentations and present them to the judges.",
        rulesthree:"4. A second round will take place in which the participants present their implemented projects to the judges."
    },
    {
        imgsrc: BlindCoding,
        name:"Blind Coding",
        rules:"1. The number of participants :01",
        rulesone:"2. This event consists of two rounds",
        rulestwo:"3. For the problem statement, each participant must write code with the monitor off.",
        rulesthree:"4. A higher priority will be given to participants whose code is executed. ",
        rulesfour:"5. Languages to be used: Javascript, C++, Python",
    },
    {
        imgsrc: EthicalHacking,
        name:"Ethical Hacking",
        rules:"1. Students can participate solo or in teams (4 members).",
        rulesone:"2. This event consists of three rounds.",
        rulestwo:"3. The participants have to follow the all Ethical rules.",
        rulesthree:"4. No access of other machine.",
    },
    {
        imgsrc: IOT,
        name:"IOT",
        rules:"1. Students can participate solo or in teams (4 members).",
        rulesone:"2. Only 1 member to register from each team in the given google form.",
        rulestwo:"3. This event consist of two round.",
        rulesthree:"4. In ronud one, the participants make presentations and present them to the judges",
        rulesfour:"5. A second round will take place in which the participants present their implemented projects to the judges",
    },
    {
        imgsrc: Kahoot,
        name:"Kahoot IT",
        rules:"1. Number of participant: 1 (Solo)",
        rulesone:"2. This event consist of two round.",
        rulestwo:"3. The participant have to answer the asked quizz question",
        // rulesthree:"",
        // rulesfour:"",
        // rulesfive:""
    },
    {
        imgsrc: Webdesigning,
        name:"Web Designing",
        rules:"1. The number of participants :01",
        rulesone:"2. Participants are required to build a website in any of the following programming",
        rulestwo:"3. languages:HTML/CSS/JAVASCRIPT",
        rulesthree:"4. Topics : E-Commerce, Web gallery, & Covide-19 Website.",
        rulesfour:"5. It is the participant's responsibility to build and submit the website one day before the event.",
    },
    {
        imgsrc: Counter,
        name:"COD",
        rules:"1. The rules will be declosed on the day of the event.",
        // rulesone:"",
        // rulestwo:"",
        // rulesthree:"",
        // rulesfour:"",
        // rulesfive:""
    },
    {
        imgsrc: Treasure,
        name:"E-Treasure Hunt",
        rules:"1. The rules will be declosed on the day of the event.",
        // rulesone:"",
        // rulestwo:"",
        // rulesthree:"",
        // rulesfour:"",
        // rulesfive:""
    },
]

export default EMdata