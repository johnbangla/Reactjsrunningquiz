const qBank = [
  {
    question:
      "বিশ্বের সেরা ব্যক্তিত্ব?   ",
    answers: ["ইব্রাহিম", "ওমর (রাঃ)", "আদম()", "হযরত মোহাম্মদ (ছাঃ)"],
    correct: "হযরত মোহাম্মদ (ছাঃ)",
    questionId: "099099"
  },
  {
    question:
    'বদরের যুদ্ধে। জেনারেলের প্রধানের নাম কী?',
    answers: ["Hazrat Ali (R)", "হযরত মোহাম্মদ (ছাঃ)", "Hazrat Umar (R)", "Hazrat Abu Bakar"],
    correct: "হযরত মোহাম্মদ (ছাঃ)",
    questionId: "183452"
  },
  {
    question:
      "কোন নবী বিশেষ দুআ ব্যবহার করেননি??",
      answers : ["মুসা",
        "ইব্রাহিম",
        "সুলেমান",
        "হযরত মোহাম্মদ (ছাঃ)"],
        
    correct: "হযরত মোহাম্মদ (ছাঃ)",
    questionId: "267908"
  },
  {
    question:"নবী হজরত মুহাম্মদ (ছাঃ) কীভাবে তিনি তাঁর সম্প্রদায়কে ডেকেছিলেন।?",
    answers: ["বন্ধু"," কাজিন ",  
      "আত্মীয় ",  "ভাই  "],
      
    correct: "ভাই",
    questionId: "333247"
  },
 
  {
    question: "একজন ধনী মহিলা কি তার গরীব স্বামীকে যাকাত দিতে পারে?",
    answers : ["না",
      "হ্যাঁ",
      "হতে পারে",
      "সম্ভবত না"],
      
    correct: "হ্যাঁ",
    questionId: "2838920"
  },
  {
  question: "কোন বইটি বিশ্বব্যাপী সবচেয়ে বেশি গবেষণা হচ্ছে?" ,
  answers : ["আল কোরআন "," কবিতা "," ফিল্ম","গানের বই"],
  correct: "আল কোরআন",
  questionId: "2838901"
  },
  {
    question:"অবিশ্বাসী লোকেরা কীভাবে ইসলামকে গোমরাহ করে??",
  answers : ["মিথ্যা মিশ্রিত করে", "আধো গল্প প্রচার",  
   "সত্য রেফারেন্স", "সম্পূর্ণ গল্প"],
   correct: "আধো গল্প প্রচার",
   questionId: "2838921"
  },
  {

    question:"Hazrat Mus’ab (pbuh) accepted islam on the ___ year of prophethood of prophet (sm)?",
  answers : ["2nd"  ," 3rd", "4th", " 5th"], 
  correct: "4th",
  questionId: "2838902"
  },
  
  
  {
  
    question: "What is the meaning of arabic word Asadullah?",
  answers : ["The tiger of Allah",
  "The lion of Allah",
  "The kobra of Allah",
  "The elephant of Allah"],
  correct: "The lion of Allah",
  questionId: "2838903"
  },

  {
  
    question:"Who was the third caliph of islam?",
  answers : ["Hazrat Abu Bakar (R)", "Hazrat Umar (R)","Hazrat Osman(R)"],
  correct: "Hazrat Osman(R)",
  questionId: "2838904"
  
  },
  {
  question:"Asadullah was the title of?",
  answers : [" Hazrat Umar  (R) ", "Hazrat Abu Huraira (R) ", 
  " Hazrat Ubaid ",  "Hazrat Hamza"],
  correct: "Hazrat Hamza",
  questionId: "2838905"
  },
  
  {
  question:"Which is the 69th sura of Holy quaran?",
  answers : ["Sura Al haqqah",  "Sura taha",   
  "Sura takasur",  " Sura bani israil"],
  correct: "Sura Al haqqah",
  questionId: "2838966"
  },

  {
  
  question:"Hazrat Hamza (R) was ___ of prophet (Sm)?",
  answers : ["Uncle",   " Cousin",   " Brother in law", " nephew"],
  correct: "Uncle",
  questionId: "2838907"
  },
  {
  question:"What is the meaning of Allahu Akber?",
  answers : ["Allah hears every thing",
  "Allah can do every thing",
  "Allah is greatest",
  "Allah is mind reader"],
  correct: "Allah is greatest",
  questionId: "28389008"
  },

  

  

  
  
];

export default (n = 20) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
