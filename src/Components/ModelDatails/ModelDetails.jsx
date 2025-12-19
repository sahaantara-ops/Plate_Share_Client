import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ModelDetails = () => {
  const navigate = useNavigate();
    const data = useLoaderData();
    const model = data.result
    console.log(model);


     const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://3d-model-server.vercel.app/models/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/allfoods");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };




    return (
         <div className="w-270 h-160 mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 h-full shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col h-full md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full h-full md:w-1/2">
            <img
              src={model.image}
              alt=""
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {model.name}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                {model.category}
              </div>

              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                Quantity {model.quantity}
              </div>
               <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                 {model.status}
              </div>
              
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {model.description}
            </p>

            <div className="flex gap-3 mt-6">
              <Link
                to={`/update-post/${model._id}`}
                className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
              >
                Update Model
              </Link>
              <button
                onClick={''}
                className="btn btn-secondary rounded-full"
              >
                Food Request
              </button>
              <button
                onClick={handleDelete}
                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ModelDetails;