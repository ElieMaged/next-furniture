export default function BlockOne() {
    return(

  <div className='flex flex-col md:grid md:grid-cols-6 md:grid-rows-6'>
    {/* first block */}
    <div id='squareOne' className='bg-white text-black p-5 md:col-start-1 md:col-end-5'>
<h1>Interior Design</h1>
<p>Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge 
modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication</p>
</div>
<div id='squareTwo' className=' md:col-start-5 md:col-end-7 '>
<img className='square-two-img flex flex-row' src='https://i.imgur.com/6GXUGn6.png' />
</div>
<div id='squareThree' className='p-5 md:col-start-1 md:col-end-4 bg-white '>
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">Start Project</button>
<span className='flex flex-row gap-x-14 md:gap-x-24 text-center text-black bg-white'>
 
    <div>400+<p>Project Complete</p></div>
    <div>600+<p>Satisfied Clients</p></div>
    <div>100+<p>Unique Styles</p></div>

</span>
</div>
<div  id='squareFour' className='md:col-start-4 md:col-span-4 md:flex flex-col'>
    <img className='' src='https://i.imgur.com/AZtmdbe.png' />
</div>

  </div>
  
    )
}