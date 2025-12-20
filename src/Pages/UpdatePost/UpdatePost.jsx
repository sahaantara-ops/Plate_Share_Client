import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdatePost = () => {

const data = useLoaderData();
    const model = data.result
    console.log(model);
  
const handleSubmit = (e) => {
    e.preventDefault()
    const data  = {
        title: e.target.title.value,
        image: e.target.imageURL.value,
        description: e.target.description.value,
        category: e.target.category.value,
     }
     console.log(data);

fetch(`http://localhost:3000/models/${model._id}`,{
    method: 'PUT',
    headers: {
        'Content-Type':'application/json',
       
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
      <h1 className='ml-22 mt-7 font-bold text-gray-400'> Update Post</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Title</label>
          <input type="text" defaultValue={model.title} name="title"className="input rounded-3xl" placeholder="Title" />
          <label className="label">Image URL</label>
          <input type="image URL" defaultValue={model.imageURL} name="imageURL" className="input rounded-3xl" placeholder="" />
          <label className="label">Description</label>
          <input type="description" defaultValue={model.description} name="description" className="input rounded-2xl h-30 text-center" placeholder=" write food description" />
          <div>
            <label className="label">Category</label>
            <select defaultValue={model.category}
            name='category'
            required
            className="input rounded-3xl">
              <option value="" disabled>Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>

            </select>
         
          </div>
          <button type = "submit"className="btn btn-soft btn-error">Update Post</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};


export default UpdatePost;






  

