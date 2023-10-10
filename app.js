var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:2000,
    loading: true,
    photo: true,
    content: 'Hello. This is Alex, and I work at the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        photo: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I can help you with that. Could you tell me your order number below?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        photo: true,
        content:'Alright. Please give me a moment'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I checked your order. There has been a system error, and no driver was assigned to your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        photo: true,
        content:'I found the nearest driver, and your food can be picked up within five minutes. Would you like to proceed with your order? If not, we can cancel your order as well.'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:30000,
        loading: true,
        photo: true,
        content:'It is taking longer than usual because I am still gathering some information to process your request.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Let me keep trying to process your request. Please hold on for a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:30000,
        loading: true,
        photo: true,
        content:'I have processed your request. The issue is resolved.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2]}, "*");
};
