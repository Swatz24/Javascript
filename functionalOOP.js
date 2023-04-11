// Superclass
function Job (name, field, industry , degree, jobType){
  this.name = name;
  this.field = field;
  this.industry = industry;
  this.degree = degree;
  this.jobType = jobType;
}

// Superclass Methods
Job.prototype.getName = function(){
  return `Job Title: ${this.name} - Hiring Immediately.`;
}

Job.prototype.getFieldAndIndustry = function(){
  return `Job Field and Industry :${this.field} and ${this.industry}.`;
}

Job.prototype.requiresDegree = function(reqDegree){
  this.reqDegree = reqDegree;
  if(reqDegree =='true'){
    return `This job requires a college degree - ${this.degree}.`;      
  } else {
    return `This job doesn't require a college degree.`;
  }
}

Job.prototype.requiresExperience = function(experience){
  this.experience = experience;
  return `Wanted ${this.name} with ${this.experience} years job experience.`;
}


const job1 = new Job('Delivery Driver', 'Hospitality','Logistics' ,'','Part-time' );
  console.log(job1.getName());
  console.log(job1.getFieldAndIndustry());
  console.log(job1.requiresDegree('false'));
  console.log(job1.requiresExperience(2));
const job2 = new Job('Sales Rep' , 'Marketing','Service','diploma', 'Contract');
  console.log(job2.getName());
  console.log(job2.getFieldAndIndustry());
  console.log(job2.requiresDegree('true'));
  console.log(job2.requiresExperience(5));
const job3 = new Job('Caregiver', 'Health Care','Medical','B.sc', 'Full-time');
  console.log(job3.getName());
  console.log(job3.getFieldAndIndustry());
  console.log(job3.requiresDegree('true'));
  console.log(job3.requiresExperience(3));

  // Extended Class
function ITJob(name, field,industry, degree, jobType, location ){
    // Call constructor of superclass to initialize superclass-derived members.
    Job.call(this, name, field,industry,degree, jobType);
      // Initialize subclass's own members
    this.location = location;
}

// Inherit prototype object

ITJob.prototype = Object.create(Job.prototype);
ITJob.prototype.constructor = ITJob;

// CHILD CLASS Methods
ITJob.prototype.getJobLocation = function(location){
  return `Required ${this.name} with ${this.experience} years experience - Location - ${location}.`;
}

ITJob.prototype.getName = function() {
 
  return `Hiring ${this.name} - Please Contact XYZ@gmail.com`;
}

const ITjob1 = new ITJob('Java Developer', 'Software','I.T', 'B.E' , 'Contractor', 'Remote');
  console.log(ITjob1.getName());
  console.log(ITjob1.getFieldAndIndustry());
  console.log(ITjob1.requiresDegree('true'));
  console.log(ITjob1.requiresExperience(5));