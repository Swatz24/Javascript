class Job {
  constructor(name, field,industry,degree, jobType){
    this.name = name;
    this.field = field;
    this.industry = industry;
    this.degree = degree;
    this.jobType = jobType;
      }

  getName(){
    return `Job Title: ${this.name} - Hiring Immediately.`;

  }

  getFieldAndIndustry(){
      return `Job Field and Industry :${this.field} and ${this.industry}.`;
  }

  requiresDegree(reqDegree){
    this.reqDegree = reqDegree;
    if(reqDegree =='true'){
      return `This job requires a college degree. ${this.degree}`;      
    } else {
      return `This job doesn't require a college degree - ${this.degree}.`;
    }

  }
  requiresExperience(experience){
    this.experience = experience;
    return `Wanted ${this.name} with ${this.experience} years job experience.`;
  }
 
}

const job1 = new Job('Delivery Driver', 'Hospitality','Logistics', '', 'Part-time' );
  console.log(job1);
  console.log(job1.getName());
  console.log(job1.getFieldAndIndustry());
  console.log(job1.requiresDegree('false'));
  console.log(job1.requiresExperience(2));
const job2 = new Job('Sales Rep' , 'Marketing','Service', 'diploma',  'Contract');
  console.log(job2.getName());
  console.log(job2.getFieldAndIndustry());
  console.log(job2.requiresDegree('true'));
  console.log(job2.requiresExperience(5));
const job3 = new Job('Caregiver', 'Health Care','Medical', 'B.Sc', 'Full-time');
  console.log(job3.getName());
  console.log(job3.getFieldAndIndustry());
  console.log(job3.requiresDegree('true'));
  console.log(job3.requiresExperience(3));


class ITJob extends Job{

  constructor(name, field ,industry, degree ,jobType, location){
    super(name, field,industry,degree,jobType);
    this.location = location;
  }
  
  getName() {
    super.getName();
    return `Hiring ${this.name} - Please Contact XYZ@gmail.com`;
  }

  getJobLocation(){
    return `Required ${this.name} with ${this.experience} years experience - Location - ${location}.`;
  }
}

const ITjob1 = new ITJob('Java Developer', 'Software','I.T', 'Engineering-IT',  'Contractor', 'Remote');
  console.log(ITjob1.getName());
  console.log(ITjob1.getFieldAndIndustry());
  console.log(ITjob1.requiresDegree('true'));
  console.log(ITjob1.requiresExperience(5));

const ITjob2 = new ITJob('Quality Analyst', 'Software','I.T', 'Masters' , 'Full-time', 'Hybrid');
  console.log(ITjob2.getName());
  console.log(ITjob2.getFieldAndIndustry());
  console.log(ITjob2.requiresDegree('true'));
  console.log(ITjob2.requiresExperience(7));

  