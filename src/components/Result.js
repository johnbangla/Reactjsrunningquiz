import React, { Component } from 'react';
import Thank  from  './Thanks';
class PostForm extends Component {
  constructor(props){
    super(props);
      this.state = {
       
        activeItem:{
          id:null, 
          title:'',
          completed:true,
          score : this.props.score,
        },
        
      }  // state end
      
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getCookie = this.getCookie.bind(this)


      
  }; //constructor end 

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
handleChange(e){
  var name = e.target.name
  var value = e.target.value
 
  console.log('Name:', name)
  console.log('Value:', value)

  this.setState({
    activeItem:{
      ...this.state.activeItem,
      title:value,
      //score:value
    }
  })
}




handleSubmit(e){
  e.preventDefault()
  console.log('ITEM:', this.state.activeItem)

  var csrftoken = this.getCookie('csrftoken')

  // var url = 'http://localhost:8000/api/task-create/'
  var url = 'https://johnbangla.pythonanywhere.com/api/task-create/'




  fetch(url, {
    method:'POST',
    headers:{
      'Content-type':'application/json',
      'X-CSRFToken':csrftoken,
    },
    body:JSON.stringify(this.state.activeItem)  //writing data from reactjs to django
  }).then((response)  => {
     //showing data after insert data 
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

  alert('Exam is completed . If you want to play again click Play Again button .')
}//data sent to server

  render() {
    var self = this
    return (
      <div className="container">

        <div id="task-container">
            <div  id="form-wrapper">
  {this.state.activeItem.completed?
               <form onSubmit={this.handleSubmit}  id="form">
                  <div className="flex-wrapper">
                 
                      <div style={{flex: 6}}>
                      <label>Enter the Name</label>
                       <input onChange={this.handleChange} className="form-control" id="title" value={this.state.activeItem.title}  type="text" name="title" placeholder="Name.." />
                       </div>
                       {/* <div style={{flex: 4}}>
                          <input onChange="handleChange" className="form-control" id="score" value={this.state.activeItem.score} type="text" name="score" placeholder="Add task.." />
                       </div> */}

                       <div style={{flex: 1}}>
                          <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                        </div>
                    </div>
              </form>
  : null            
  }
           
            </div>

         
        </div>

  {!this.state.activeItem.completed?
        <button className="playBtn" onClick={this.props.playAgain}>
      Play again!
    </button>
  
   :null 
   }
        
      </div>
    );
  }
}

export default PostForm;


// {
//   this.state.show? <div><h1>Hide and Show</h1></div> : null
// }