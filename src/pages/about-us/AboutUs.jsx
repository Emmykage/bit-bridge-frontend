import Header from '../../compnents/header/Header'
import HeroBanner from '../../compnents/hero/Hero'

const AboutUs = () => {
  return (
    <div>
        <Header/>
        <HeroBanner text={"About Us"}/>

  

      <section id='contact-form' className='get-in-touch text-white py-20 px-4'>
        <div className='max-w-4xl  m-auto my-14'>
        <h3 className='text-5xl text-left font-semibold text-primary '>Why Choose BitBridge?</h3>
        <p className='md:text-2xl my-5 text-justify text-gray-700'>
        At BitBridge, we provide a seamless, secure, and efficient platform for converting your gift cards to cash and paying utility bills with ease. Whether you’re looking to sell gift cards for instant payment or conveniently settle your bills, BitBridge is your go-to solution!
        </p>

        <h3 className='text-3xl text-gray-800 font-semibold'>        Our Services  </h3>
        <p className='text-gray-800 text-lg my-4 font-semibold'>
            1. Trade Gift Cards for Instant Cash

        </p>
        <p className='text-gray-800 px-4'>
            Got unused or unwanted gift cards? Convert them to cash effortlessly! We support a wide range of gift cards,
        </p>
        <p className='text-gray-800 text-lg my-4 font-semibold'>
            2. Pay Utility Bills with Ease

            
        </p>
        <p className='text-gray-800 px-4 font-semibold'>
            Say goodbye to late payments! With BitBridge, you can conveniently settle your utility bills, including:
        </p>
            <ul className='list-disc list-inside text-gray-700 font-medium'>
                <li>
                Electricity Bills

                </li>
                <li>
                Water Bills

                </li>
                <li>
                Internet & Cable Subscriptions

                </li>
                <li>
                    Mobile Airtime & Data Top-ups

                </li>
                




            </ul>
            <p className='text-gray-800'>
            We support multiple service providers, ensuring you stay connected and powered up at all times.

            </p>
            <h3 className='text-3xl font-semibold text-gray-800 my-4'>
            Comprehensive Support for Your Payment Needs

            </h3>
            <p className='text-gray-700 font-medium'>
                Whether you need assistance with gift card trading, bill payments, or navigating our platform, we’re here to support your financial transactions. Our team of experts is available to provide personalized guidance and ensure a smooth experience for all your payment needs.

            </p>

            <h3 className='text-xl font-semibold text-primary my-4'>  Why BitBridge Stands Out? </h3>
            <p className='leading-7 text-gray-700 font-medium'>
            ✅ Fast Transactions – Get your payments processed instantly. <br/>
            ✅ Secure & Reliable – Your data and transactions are protected with top-tier security.<br/>
            ✅ Competitive Rates – Enjoy the best market rates for your gift card trades.<br/>
            ✅ 24/7 Customer Support – Our dedicated support team is always available to assist you.<br/>
            ✅ User-Friendly Platform – A seamless experience on both desktop and mobile devices.<br/>

            </p>

            <p className='text-xl text-primary font-semibold my-4'>
                How It Works

                </p>
                {/* <ul>

                For Gift Card Trading:

                Select the type of gift card you want to trade.

                Enter the details and upload the card.

                Receive an instant quote.

                Get paid instantly to your preferred payment method.
            </ul> */}

            <p>
                <p className='text-gray-700  font-semibold '>
                For Utility Bill Payments:

                </p>
                <ul className='text-gray-800 list-disc list-inside'>
                    <li  className='text-gray-700'>
                    Choose the bill you want to pay.

                    </li>
                    <li>
                    Enter your account details and billing amount.


                    </li>
                    <li>
                    Complete the payment securely.

                    </li>
                    <li>
                    Receive a confirmation instantly!


                    </li>




                </ul>

                <p className='text-gray-700 font-semibold my-8'>
                Join Thousands of Happy Users!
                Experience the convenience of trading gift cards and paying your bills with BitBridge. Get started today!

                </p>
           
              </p>


        <p>

        </p>

        </div>
     
      </section>
    </div>
  )
}

export default AboutUs