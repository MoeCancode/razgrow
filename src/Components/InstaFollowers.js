import React from 'react'

const InstaFollowers = () => {
  return (
    <div>
      <div className="hero min-h-auto bg-[#171717] mt-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-[#e737d5]">Instagram Followers</h1>
            <p className="py-6 italic">
              "Very Fast and Professional service. I achieved the results I paid
              for!" - S.James
            </p>
          </div>
        </div>
      </div>
   <div className="flex flex-row bg-[#171717] pb-10">

    {/* Cards start here */}
   
   <div className="card w-96 bg-base-100 shadow-xl mx-1">
  <figure><img src={require(`../assets/500.gif`)} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center items-center">
      <div className="text-[30px] text-[#e737d5] text-bold">$6</div>
    </h2>
    <h2 className="card-title">
      500 Followers
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p >💎 Instant Delivery</p>
    <p >💎 60-Day Guarantee</p>
    <p >💎 No Password Required</p>
    <p >💎 No Hidden Charges</p>
    <div className="card-actions justify-end my-5">
      <div className="badge badge-outline">Add to Cart</div> 
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl mx-1">
  <figure><img src={require(`../assets/1000.gif`)} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center items-center">
      <div className="text-[30px] text-[#e737d5] text-bold">$10</div>
    </h2>
    <h2 className="card-title">
      1000 Followers
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p >💎 Instant Delivery</p>
    <p >💎 60-Day Guarantee</p>
    <p >💎 No Password Required</p>
    <p >💎 No Hidden Charges</p>
    <div className="card-actions justify-end my-5">
      <div className="badge badge-outline">Add to Cart</div> 
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl mx-1">
  <figure><img src={require(`../assets/2000.gif`)} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center items-center">
      <div className="text-[30px] text-[#e737d5] text-bold">$18</div>
    </h2>
    <h2 className="card-title">
      2000 Followers
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p >💎 Instant Delivery</p>
    <p >💎 60-Day Guarantee</p>
    <p >💎 No Password Required</p>
    <p >💎 No Hidden Charges</p>
    <div className="card-actions justify-end my-5">
      <div className="badge badge-outline">Add to Cart</div> 
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl mx-1">
  <figure><img src={require(`../assets/5000.gif`)} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center items-center">
      <div className="text-[30px] text-[#e737d5] text-bold">$40</div>
    </h2>
    <h2 className="card-title">
      5000 Followers
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p >💎 Instant Delivery</p>
    <p >💎 60-Day Guarantee</p>
    <p >💎 No Password Required</p>
    <p >💎 No Hidden Charges</p>
    <div className="card-actions justify-end my-5">
      <div className="badge badge-outline">Add to Cart</div> 
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl mx-1">
  <figure><img src={require(`../assets/10000.gif`)} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center items-center">
      <div className="text-[30px] text-[#e737d5] text-bold">$75</div>
    </h2>
    <h2 className="card-title">
      10,000 Followers
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p >💎 Instant Delivery</p>
    <p >💎 60-Day Guarantee</p>
    <p >💎 No Password Required</p>
    <p >💎 No Hidden Charges</p>
    <div className="card-actions justify-end my-5">
      <div className="badge badge-outline">Add to Cart</div> 
      <div className="badge badge-outline">Buy Now</div>
    </div>
  </div>
</div>

   </div>
    </div>
  )
}

export default InstaFollowers