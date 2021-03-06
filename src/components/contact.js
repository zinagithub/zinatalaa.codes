import React from 'react';
import './contact.css';
import './skills.css';


class Contact extends React.Component {

  render() {
  	const arrLinks = [
    {name :'GitHub', adress : 'https://github.com/zinagithub/'},
    {name :'CodePen', adress : 'https://codepen.io/zinafreecode'},
    {name :'LinkedIn', adress : 'https://www.linkedin.com/in/zina-talaa-b0808b177/'},
    {name :'Instagram', adress :'https://www.instagram.com/zinatalaa/'},
    {name:'Email', adress :'mailto:talazina@gmail.com'}];
    const displayLinks = arrLinks.map((val, i) => {
    	return <div className="col-xs-12  col-sm-2 links" key = {i}><a href = {val.adress} target="_blank" rel="noopener noreferrer">{val.name} </a></div>
    }

    ); 
  	return (
      <div className = "container contact">
         <h3 className = 'title'>Contact</h3>
         <div className = "my-contact-form">
            <form>

              <div className = "col-xs-12 col-sm-6">
              <p>First Name</p>

              <input type="text"id="fname"name="firstname"placeholder="Your name.."/>

              <p>Last Name</p>

              <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>
              </div>

              <div className = "col-xs-12 col-sm-6">
              <p>Email</p>

              <input type="email"id="email"name="email"placeholder="Your email" />


              <p>Subject</p>

              <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg ctc-btn">Submit</button> 
            </form>


          </div>
          <div className='footer'>
          
            <h2>Looking to start a project?</h2>
            <p>Lets talk</p>                      
              {displayLinks}           
          </div>
      </div>
  		
  		);
  }

}

export default Contact;
