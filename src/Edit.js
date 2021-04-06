import './Edit.css';
import React, { useEffect, useState } from 'react'
function Edit() {
  const [users, setUser] = useState([])
  const [categoryName, setcategoryName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [_id,set_id]=useState("")

  useEffect(() => {
    getUsers();
  }, [])


  function getUsers() {
    fetch("http://192.168.0.63:8020/categorypost/categories").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp.categoryposts)
        set_id(resp._id)
        setimageUrl(resp.imageUrl)
        setcategoryName(resp.categoryName)
      })
    })
  } 






  function deleteUser(_id) {
    fetch(`http:/192.168.0.63:8020/categorypost/delete/${_id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  /*
  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
        setEmail(item.email)
        setMobile(item.mobile);
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,mobile,email}
    console.warn("item",item)
    fetch(`http://localhost:4000/todo/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  } */
  return (
    <div className="card">
        
        {
        users.map(person => (
          <div key={person._id}>
            <div className="cardItem">
             <div classname="image" >
               <img src={person.imageUrl}  />
            </div>
              <div className="content">
              <div className="font">{person.categoryName}</div>
              <div className="font">{person.name}</div>
              <div className="font">{person.description}</div>
              <div>
                <button onClick={() => deleteUser(person._id)} className="btn">Delete</button>
              </div>
              </div>
              
            </div>
          </div>
        ))}       
       

<div>
</div>
</div>
  );

}
export default Edit;












/* import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  state = {
    loading: true,
    people: []
  };


  async componentDidMount() {
    const url = "http://192.168.0.63:8020/categorypost/categories";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.categoryposts, loading: false });
  }

  handleClick() {
    alert("You have just Clicked !")
  }


  render() {

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get Menu</div>;
    }

    
    return (
      
      <div className="card">
        
        {this.state.people.map(person => (
          <div key={person._id}>
            <div className="cardItem">
             <div classname="image" >
             <Link to='/subcategory-indian'>
               <img src={person.imageUrl}  /></Link>
            </div>
              <div className="content">
              <div className="font">{person.categoryName}</div>
              <div className="font">{person.name}</div>
              <div className="font">{person.description}</div>
              <div>
                <button onClick={this.handleClick} className="btn">Add to Cart</button>
              </div>
              </div>
              
            </div>
          </div>
        ))}       
        </div>
    );
  }
}

export default Menu; 


 <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
      */