import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./assets/style.css";
import 'tachyons';
import quizService from './quizService';

import QuestionBox from './components/QuestionBox';
import PostForm from './components/Result';

class Quizbee extends Component{
  constructor(props){
    super(props);
this.state = {
questionBank : [],score : 0,responses : 0 ,
activeItem:{
  id:null, 
  title:"Arisha",
  completed:false,
  score : 100,
} ,


};
// this.handleSubmit = this.handleSubmit.bind(this)
this.getCookie = this.getCookie.bind(this)
  }//constructor end


//browser cookei was used
getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}  //browser cookei was used 


//insert command 
handleSubmit(e){
  e.preventDefault()

  
  alert('ITEM:', this.state.activeItem)

  var csrftoken = this.getCookie('csrftoken')
  this.setState({title  : 'john' ,score : this.state.score});
  //var url = 'http://localhost:8000/api/task-create/'
var url = ' http://johnbangla.pythonanywhere.com/api/task-create/'
 


  console.log('ITEM:', this.state.activeItem)
  fetch(url, {
    method:'POST',
    headers:{
      'Content-type':'application/json',
      'X-CSRFToken':csrftoken,
    },
    body:JSON.stringify(this.state.activeItem)  //writing data from reactjs to django
  }).then((response)  => {
      //this.fetchTasks()  //showing data after insert data 
      this.setState({     //after inser variable must be clear
         activeItem:{
        id:null, 
        title:'',
        completed:false,
        score:0,
      }
      })
  }).catch(function(error){
    console.log('ERROR:', error)
  })

}  //data insert method is completed here


//insert command end

getQuestions = () => {
quizService().then( question => {

  this.setState({
    questionBank : question

});
});
};

ComputedAnswer = (answer,correctAnswer) =>
{
if (answer === correctAnswer){
this.setState({score : this.state.score  + 1
});

}

this.setState({

  responses : this.state.responses < 5 ? this.state.responses + 1 : 5
});
};

playAgain = () => {
  this.getQuestions();
  this.setState({score : 0 , responses : 0
  });
};

saveResult = () => {


//alert('loading..')
//e.preventDefault()
alert('ITEM:', this.state.activeItem)

var csrftoken = this.getCookie('csrftoken')
var url = ' http://johnbangla.pythonanywhere.com/api/task-create/'
// var url = 'http://localhost:8000/api/task-create/'


fetch(url, {
  method:'POST',
  headers:{
    'Content-type':'application/json',
    'X-CSRFToken':csrftoken,
  },
  body:JSON.stringify(this.state.activeItem)  //writing data from reactjs to django
}).then((response)  => {
    //this.fetchTasks()  //showing data after insert data 
    this.setState({     //after inser variable must be clear
       activeItem:{
      id:null, 
      title:'',
      completed:false,
      score:0,
    }
    })
}).catch(function(error){
  console.log('ERROR:', error)
})



};

componentDidMount(){
this.getQuestions();

}
render(){

return(
<div className="container">

<div className="title grow">True Man True Help Quiz 2020 july</div>

{ this.state.questionBank.length > 0 && this.state.responses < 5   && this.state.questionBank.map(

({question,answers,correct,questionId}) => ( <QuestionBox question={question} options = {answers} key = {questionId} 


selected={answer => this.ComputedAnswer(answer,correct)}

/>
)


)}
{ this.state.responses === 5 ? (<PostForm  score={this.state.score} playAgain={this.playAgain}/>) : null }
</div>




);

}


}
ReactDOM.render(<Quizbee/>,document.getElementById("root"));