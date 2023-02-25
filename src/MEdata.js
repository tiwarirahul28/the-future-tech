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
        entryfees:"50",
        rules:"1. The number of participants :01 (Solo)", 
        rulesone:"2. No. of Rounds:02", 
        rulestwo:"3. Participants will be given code to debug.",
        rulesthree:"4. Programing Languages : Javascript, C++, Python.",
        rulesfour:"5. Participants have to debug the code in a certain amount of time."
    },
    {
        imgsrc: ai,
        name: "ARTIFICIAL INTELLIGENCE",
        entryfees:"200",
        rules: "1. Students can participate SOLO or in TEAM(4 members).", 
        rulesone:"2. Only 1 member to register from each team in the given google form.",
        rulestwo:"3. No. of Rounds:02",
        rulesthree:"4. Round 1, the participants has to make the presentation and present it to the judges.",
        rulesfour: "5. Round 2,the participants will present their implemented projects to the judges"
    },
    {
        imgsrc: AndroidApplication,
        name: "ANDROID APPLICATION ",
        entryfees:"200",
        rules: "1. Students can participate SOLO or in TEAM(4 members).", 
        rulesone:"2. Round 1, the participants has to make the presentation and present it to the judges.",
        rulestwo:"3. Round 2,the participants will present their implemented projects to the judges",
    },
    {
        imgsrc: BlindCoding,
        name:"Blind Coding",
        entryfees:"50",
        rules:"1. The number of participants :01 (Solo)",
        rulesone:"2. No. of Rounds:02",
        rulestwo:"3. For the problem statement, each participant must write code with the monitor off.",
        rulesthree:"4. A higher priority will be given to participants whose code is executed.",
        rulesfour:"5. Code with the least number of errors will be given preference.",
        rulesfive:"6. Programming Languages to be used: Javascript, C++, Python. Participants have to complete the code in a certain amount of time."
    },
    {
        imgsrc: EthicalHacking,
        name:"Ethical Hacking",
        entryfees:"200",
        rules:"1. Students can participate SOLO or in TEAM(4 members).",
        rulesone:"2. No. of Rounds:02",
        rulestwo:"3. Round 1, will be Hacking of WiFi.",
        rulesthree:"4. Round 2,windows cracking and removing the given folder with details.",
        rulesfour:"5. The participants have to follow all Ethical rules.",
        rulesfive:"6. No access of other machines."
    },
    {
        imgsrc: IOT,
        name:"IOT",
        entryfees:"200",
        rules: "1. Students can participate SOLO or in TEAM(4 members).", 
        rulesone:"2. Only 1 member to register from each team in the given google form.",
        rulestwo:"3. No. of Rounds:02",
        rulesthree:"4. Round 1, the participants has to make the presentation and present it to the judges.",
        rulesfour: "5. Round 2,the participants will present their implemented projects to the judges"    },
    {
        imgsrc: Kahoot,
        name:"Kahoot IT",
        entryfees:"50",
        rules:"1. Number of participant: 1 (Solo)",
        rulesone:"2. No. of Rounds:02",
        rulestwo:"3. Rules shall be disclosed on the day of event .",
        // rulesthree:"",
        // rulesfour:"",
        // rulesfive:""
    },
    {
        imgsrc: Webdesigning,
        name:"Web Designing",
        entryfees:"50",
        rules:"1. The number of participants :01 (Solo)",
        rulesone:"2. Participants are required to build a website in any of the following programming languages:HTML/CSS/JAVASCRIPT",
        rulestwo:"3. Topics : E-Commerce, Web Gallery, & Covid-19 Website.",
        rulesthree:"4. It is the participant's are requested to build and submit the website one day prior the event.",
        rulesfour:"5. There should be a minimum of 3 pages on the website and it should be static"
    },
    {
        imgsrc: Counter,
        name:"COD (mobile)",
        entryfees:"50",
        rules:"1. The rules will be disclosed on the day of the event.",
        rulesone:"2. The number of participants :01 (Solo)",
        // rulesone:"",
        // rulestwo:"",
        // rulesthree:"",
        // rulesfour:"",
        // rulesfive:""
    },
    {
        imgsrc: Treasure,
        name:"Treasure Hunt",
        entryfees:"100",
        rules:"1. The rules will be disclosed on the day of the event.",
        rulesone:"2. The number of participants :02 (DUO)",
        // rulesone:"",
        // rulestwo:"",
        // rulesthree:"",
        // rulesfour:"",
        // rulesfive:""
    },
]

export default EMdata