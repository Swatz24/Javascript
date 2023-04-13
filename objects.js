
let appData =
{
  name: 'gmail',
  personalInfo: {
      name:'swathika ravindran' ,
      birthday: 'jan 24',
      gender : 'female'
  },
  contactInfo: {
      email:"swathika.sidharth@gmail.com",
      phone: 9802820570
  },
  addressInfo: {
    home : 'Fortmill sc',
    work : 'carolina esports hub'
  },
  mailboxInfo: {
    primaryCategories : ['inbox','starred','snoozed','sent','draft','trash'],
    additionalCategories : ['important','chats','scheduled','all mail','spam']
  },
  categorieInf0 : ['primary','social','promotions', 'forums', 'updates'],

  contacts: [
    {name: 'john', email:'xyz@gmail.com'}, 
    {name:'raj', email:'abc@gmail.com'}
  ],

  myEmails: [
      {name: 'John', message: 'I have a meeting today'},
      {name:'Erin', message:'Hi. Have a great day!'}

  ]

  

  };


//console.log(typeof(appData));
/*Display the entire object
console.log(appData);
*/
//Display the type of app

  console.log("Type of app:" ,appData.name);

//Display the personal Info

  console.log("Personal Info:" , 
              "Name:" ,appData.personalInfo.name ,
               "Gender:", appData.personalInfo.gender,
                "Birthday:", appData.personalInfo.birthday);

// Display Contact Info

  console.log("Contact Info:");
  console.log("Email:", appData.contactInfo.email);
  console.log("Phone Number", appData.contactInfo.phone);

  // Display Address information

  console.log("Home Address:", appData.addressInfo.home);
  console.log("Work Address:", appData.addressInfo.work);

  // Mailbox Info

  console.log("Mailbox types:");
  console.log("Primary categories:", appData.mailboxInfo.primaryCategories);
  // Accessing mailboxes inside the primary category array

      console.log("First mailbox inside the primary:" , appData.mailboxInfo.primaryCategories[0]);
      
      //Finding the length of the array to display the last item
      console.log("Length of the array Primary: ",appData.mailboxInfo.primaryCategories.length);
      console.log("Last mailbox inside the primary:" , appData.mailboxInfo.primaryCategories[appData.mailboxInfo.primaryCategories.length-1]);

      //Displaying the complete array - primary categories

          console.log("Primary Mailbox types:" , appData.mailboxInfo.primaryCategories.join(','));

  console.log(" Additional categories:", appData.mailboxInfo.additionalCategories);

      // Accessing mailboxes inside the additional category array

      console.log("First mailbox inside the Additional:" , appData.mailboxInfo.additionalCategories[0]);
      
      //Finding the length of the array to display the last item
      console.log("Length of the array Additional: ",appData.mailboxInfo.additionalCategories.length);
      console.log("Last mailbox inside the primary:" , appData.mailboxInfo.primaryCategories[appData.mailboxInfo.primaryCategories.length-1]);

      //Displaying the complete array - primary categories

          console.log("Primary Mailbox types:" , appData.mailboxInfo.primaryCategories.join(','));


// Displaying the categories

    console.log("Different categories of mail:", appData.categorieInf0.join(','));

// Display the Contact Info

    console.log("Different contacts:" , appData.contacts);

    // Display first contact

    console.log("First contact in my contacts:" , appData.contacts[0]);

// Get list of my emails

      console.log("Emails:");
      console.log(appData.myEmails);
      // let emails = JSON.stringify(appData.myEmails);
      // console.log(emails);

//Get the text of the second email in the visible list

    console.log("Text of the second email:");
    console.log(appData.myEmails[1].message);


// Mark an email as sent

appData.myEmails.sent = 'sent';

console.log(appData.myEmails);
