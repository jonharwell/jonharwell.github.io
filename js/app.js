window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop > 20){
        document.getElementById('navbar').style.top = '0';
    }else{
        document.getElementById('navbar').style.top = '-50px';
    }
};

// Skills



var skillList = [
    {skill:'Community Management', description: 'I have many years of experience in event planning for small and large groups and managing teams to scale projects to completion.'},
    {skill: 'Research and Planning', description: ' Through my experience in the legal sector as part of an in-house legal team and as part of a team of paralegals, I possess the skills to conduct thorough due diligence in any capacity.'}, 
    {skill: 'Communication (Verbal, Written, Intercultural)', description:'You may understand this better through an in-person interview.'}, 
    {skill:'Japanese (JLPT N2 Passed, Business Fluent)', description: '履歴書に関するご質問等ございましたら、是非ご連絡くださいませ。'}, 
    {skill: 'Korean (Conversational)', description:'제 이력서에 대해 질문이 있으시면 언제든지 연락주세요.'}, 
    {skill: 'Microsoft Office Applications', description: 'Proficient in Word, Excel, PowerPoint, and Outlook'}, 
    {skill: 'Google Suite Applications', description: 'Well-versed in functionalities of Google Docs, Sheets, Slides, Gmail, Drive, and Calendar.'}, 
    {skill:'Basic Coding Knowledge of HTML, CSS, and JavaScript', description:'Able to design and create simple and functional websites.'}
    ];

    // for (var i = 0; i<skillList.length; i++){
    //     var abilities = document.createElement('div');
    //     abilities.className = 'skills';
    //     abilities.innerHTML = skillList[i].skill;
    //     document.body.appendChild(abilities);

       
    //     var words = document.createElement('div');
    //     words.className = 'descriptor2';
    //     words.innerHTML = skillList[i].description;
    //     document.body.appendChild(words);
    // };



// Experience




