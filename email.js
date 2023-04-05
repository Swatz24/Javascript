let appData= {

  mailboxInfo: {
    primaryCategories : ['inbox','starred','snoozed','sent','draft','trash'],
    additionalCategories : ['important','chats','scheduled','all mail','spam']
  },
  contacts: [
    {name: 'john', email:'xyz@gmail.com'}, 
    {name:'raj', email:'abc@gmail.com'}
  ],
  mySentEmails: [
    {name: 'John', message: 'I have a meeting today'},
    {name:'Erin', message:'Hi. Have a great day!'}
] , 

drafts :[ 
  {name: 'raj' , message: 'Good morning'} , 
  {name:'swathi', message: 'Update me'}
]

};

//Get a list of mailbox names
console.log("List of mailbox names:");
console.log(appData.mailboxInfo.primaryCategories.join(','));
console.log(appData.mailboxInfo.additionalCategories.join(','));

//Get a list of emails in mysentemails 

console.log("List of my sent emails:");

for(let i=0; i < appData.mySentEmails.length; i++){
  console.log(appData.mySentEmails[i].message);

}

//Get the text of the second email in the visible list
console.log("Text of my second email:");
console.log(appData.mySentEmails[1].message);

//Mark an email as sent

console.log("Drafts Mailbox:")
console.log(appData.drafts);
console.log("Adding a property in drafts email to say the email status is sent");
appData.drafts[1].status = 'sent';
console.log(appData.drafts);


// Moving the sent email from drafts to sent emails
appData.mySentEmails.unshift(appData.drafts.pop());  


// Delete the status that says sent, as the email is moved to the sent folder
delete(appData.mySentEmails[0].status);

console.log("My sent email list:");
console.log(appData.mySentEmails);


//Add a draft email to the drafts mailbox
console.log("Adding new email to the drafts");
let myDraft = { name:'jane', message:'My draft message'};
appData.drafts.push(myDraft);
console.log(appData.drafts);





