
import { Link } from 'react-router';



const handleSearch =(e) =>{
  e.preventDefault()
  const search_text = e.target.search.value
  console.log(search_text)

  fetch(`https://server-ten-teal-26.vercel.app/search?search=${search_text}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    
  })
}

const Banner = () => {
    return (
        <div
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Share Food, Spread Smiles
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Discover fresh, home-cooked meals shared by people around you. 
          Reduce food waste and help those in need.
        </p>

      <div className="flex justify-center gap-4">
        
      <form onSubmit={handleSearch}>
      <label className="input">
      <svg className="h-[1em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill=""
      stroke="black"
      >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
      </g>
     </svg>
     <input className='text-black'name="search" type="search" required placeholder="Search" />
     </label>
      <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
            Search Food
      </button>
      </form>
          

          <button >
          <Link to='/allfoods' className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition">  View All Foods
          </Link> </button>
        </div>
      </div>
    </div>
    );
};

export default Banner;