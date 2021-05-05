import {Human} from "./classes/Human";
import {Mentor} from "./classes/Mentor";
import {OfficeWorker} from "./classes/OfficeWorker";
import {Student} from "./classes/Student";
import {Module} from "./classes/Module";
import {OfficeManager} from "./classes/OfficeManager";

const student1 = new Student("Antek", "antek@wp.pl", "PL");
const student2 = new Student("Joshin", "joshin@wh.hu", "HU");
const mentor = new Mentor("Adrian", "adrian.widlak@codecool.com", "PL");
const officeWorker = new OfficeWorker("Joanna", "joanna@wp.pl", "PL");
const officeManager = new OfficeManager('Zenon', "zenek.szpryszko@test.pl", "PL");
 
const people: Human[] = [student2, student1, mentor, officeWorker, officeManager];
 
const module = new Module("TypeScript");
module.students = [student2, student1];
module.mentor = mentor;
 
for(let person of people)
{
	console.log(person.toString(), person.say(), person.play());
}
