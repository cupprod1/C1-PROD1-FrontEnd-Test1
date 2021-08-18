test ={
    nemoReset:{
        emailCreator: 
        {
            // suffix: '@mailinator.com',
            // url: 'http://www.mailinator.com/'
            suffix: '@mailsac.com',
            url: 'https://mailsac.com'
        },
        studentDashboard: 
        {
            //startLearningButtonText: "START LEARNING"
            startLearningButtonText: "Start learning"
        },
        teacherDashboard: 
        {
            //startTeachingButtonText: "START TEACHING",
            startTeachingButtonText: "Start teaching",
            schoolKey: "JKL-MNO-PQR"
        },
        userWithoutAccess: 
        {
            username: 'userWithoutAccess1@mailinator.com',
            password: 'Compro11',
            accessCode: 'ZK7K-K4HN-7NC7-RM4P',
            invalidAccessCode: 'ABCD-EFGH-IJKL-MNOP',
            invalidMessage: 'This code does not exist. Please, check and try again.',
            validAccessCode: 'ZB9W-P8ET-2KZ3-JA2A',
            numberOfSubscriptionDays: '364'
        },
        activityScore:
         {
          marks: '100%'
        },
        completedAct:
        {
            count: '3'
        },
        avgScore:
        {
            marks:'90%'
        },
        completedAboveAct:
        {            
            count:'3'
        },
        completedBelowAct:
        {            
            count:'0'
        },
        teacher: {
            //username: "priyatest22@yopmail.com",
            password: "Compro@1234",
           // password_admin='#compro@1254',
            classname: "Automation Test Class1",
            percentage: '80%',
            feedback: 'good'
        },
        unitprog:{
            completed:'3' 
        }
    },
    smokeTest:{
        productCode: "BD8Z-E9DC-8MK7-DY44",
        teacher_usermane: 'cupprod1autoinst1@mailsac.com',
        learner_username: 'cupprod1autostd1@mailsac.com',    
       // admin_username:'admin1_aberystwyth_prod1@comprodls.com',    
        //pname:'Evolve Level 1',
        pname:'Evolve Level 1 (C1 Live)',                 
        textn:'hi',
        savedmsg:'Saved just now',
        psskill:'Sample Productive Skill',
        submitmarking:'Submitted',
        dwnld:'Sample Audio file',
        //scorablename:'R22_EV_PE_INT_L2_U10_5_S3_V04.zip',
        scorablename:'Vocabulary: Sports 2',        
        nonscorename:'Non-Scoreable Activity1 Flashcards',
        //nonscorename:'EV_OP_INT_A2_3.5_L05_4.zip',
        inputtxt1:'about',
        inputtxt2:'watching',
        inputtxt3:'its', 
        vertext:  '1  Teacher successfully added' ,
        vertext1:'1 Teacher successfully removed',
        vertext2:'1 Learner successfully unenrolled',
        lesson: 'Lesson 4',
        prodActivity:{
            "answer":["athlete","court","fan","field","goal","gym"]
        }

        
    }
};

module.exports = test;
