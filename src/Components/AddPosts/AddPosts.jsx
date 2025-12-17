import React from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { use } from 'react';


const AddPosts = () => {

const {user} = use(AuthContext)
console.log(user);


const handleSubmit = (e) => {
    e.preventDefault()
    const data  = {
        title: e.target.title.value,
        image: e.target.imageURL.value,
        description: e.target.description.value,
        category: e.target.category.value,
        expiryDate : new Date(),
       
        
        
    }

 

fetch('http://localhost:3000/models',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
       
    },
    body: JSON.stringify(data),
})
.then(res => res.json())
.then(data => {
    console.log(data);

})
.catch(err => {
    console.error(err);


})
}
return (
    

<div className="hero bg-base-200 min-h-screen">
        
  <div className="hero-content w-460  flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 gap-3 mb-19 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className='ml-22 mt-7 font-bold text-gray-400'> Added new post here</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Title</label>
          <input type="Title" name="title"className="input rounded-3xl" placeholder="Title" />
          <label className="label">Image URL</label>
          <input type="image URL" name="imageURL" className="input rounded-3xl" placeholder="" />
          <label className="label">Description</label>
          <input type="description" name="description" className="input rounded-2xl h-30 text-center" placeholder=" write food description" />
          <div>
            <label className="label">Category</label>
            <select defaultValue={""}
            name='category'
            required
            className="input rounded-3xl">
              <option value="" disabled>Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>

            </select>
         
          </div>
          <button type = "submit"className="btn btn-neutral rounded-2xl">Add Post</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default AddPosts;