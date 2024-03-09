import CardProduct from "../cards/productCard";
import FeedbackCard from "../cards/CardFeedback";
export default function MainComponent(){
                    return( <>
                                       <h1 className='text-4xl p-6 font-semibold text-lime-500'>Popular product</h1>
     <section className='flex flex-wrap gap-3 justify-center'>
       <CardProduct />
       <CardProduct />
       <CardProduct />
       <CardProduct />
       <CardProduct />
       <CardProduct />
     </section>
     <h1 className='text-4xl p-12 font-semibold text-lime-500'>User Feedback</h1>
     <section className='flex lg:flex-nowrap flex-wrap gap-6 w-10/12 mx-auto'>
      <FeedbackCard />
      <FeedbackCard />
      
     </section>
                    </>)
}