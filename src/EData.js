import Debug from './assets/images/events/debug.png'
import ai from './assets/images/events/ai.png'
import AndroidApplication from './assets/images/events/android.png'

const EData = [
    {
        imgsrc: Debug,
        name: "Debug me",
        rules: "The number of participants :01", 
        rulesone: "This event consists of two rounds.", 
        rulestwo: "In the following programming language, participants will be given code to debug.",
        rulesthree: "Language: Javascript, C++, Java, Python"
    },
    {
        imgsrc: ai,
        name: "ARTIFICIAL INTELLIGENCE",
        rules: "Students can participate solo or in teams (4 members).", 
        rulesone:"Only 1 member to register from each team in the given google form.",
        rulestwo:"This event consist of two round.",
        rulesthree:"In ronud one, the participants make presentations and present them to the judges.",
        rulesfour: "A second round will take place in which the participants present their implemented projects to the judges."
    },
    {
        imgsrc: AndroidApplication,
        name: "ANDROID APPLICATION ",
        rules: "Students can participate in solo or teams(4 members).", 
        rulesone:"Participants have make a Android application from scratch in our premises.",
        rulestwo:"In ronud one, the participants make presentations and present them to the judges.",
        rulesthree:"A second round will take place in which the participants present their implemented projects to the judges."
    },
]
export default EData