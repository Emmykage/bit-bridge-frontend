import Header from "../../compnents/header/Header"
import HeroBanner from "../../compnents/hero/Hero"


const TermsCondintion = () => {
  return (
    <main>
      <Header />
      <HeroBanner link="/policies" extra="/terms and conditions" text={"Terms and Condition"}/>


    <section className="px-4">

      <div className="max-w-7xl m-auto my-10">
        <h3 className="text-2xl font-semibold my-4">
        Terms and Conditions

        </h3>

        <p>
          By using the BitBridge platform, you agree to abide by the following terms and conditions:

        </p>

        <p className="font-medium text-gray-900 mt-5">Eligibility</p>
        <ul className="list-inside list-disc">
          <li>You must be at least 18 years old to use our services </li>
          <li>You must provide accurate and truthful information when registering an account.
          </li>
        </ul>

        
        <p className="font-medium text-gray-900 mt-5">Gift Card Trading        </p>
        <ul className="list-inside list-disc">
          <li>All submitted gift cards must be valid and unused. </li>
          <li>BitBridge reserves the right to verify and validate all gift card submissions before processing payments.          </li>
          <li>Fraudulent transactions will be reported and may lead to account suspension.</li>
        </ul>

        <p className="font-medium text-gray-900 mt-5">Utility Bill Payments  </p>
        <ul className="list-inside list-disc">
          <li>Users are responsible for ensuring accurate bill details before making payments. </li>
          <li>BitBridge is not liable for any incorrect transactions resulting from user input errors.          </li>

        </ul>

        
        <p className="font-medium text-gray-900 mt-5">Utility Bill Payments  </p>
          <ul className="list-inside list-disc">
            <li>Users are responsible for ensuring accurate bill details before making payments. </li>
            <li>BitBridge is not liable for any incorrect transactions resulting from user input errors.          </li>

          </ul>   
        <p className="font-medium text-gray-900 mt-5">Payment Processing</p>
          <ul className="list-inside list-disc">
            <li>Payouts for traded gift cards will be processed promptly based on the agreed exchange rate. </li>
            <li>All transactions are final once completed.</li>

          </ul>

          <p className="font-medium text-gray-900 mt-5">Security & Privacy</p>
          <ul className="list-inside list-disc">
            <li>BitBridge implements strict security measures to protect user data and transactions. </li>
            <li>User information will not be shared with third parties without consent, except as required by law.</li>

          </ul>

          <p className="font-medium text-gray-900 mt-5">Prohibited Activities</p>
          <ul className="list-inside list-disc">
            <li>Users must not engage in fraudulent activities, including the sale of stolen or invalid gift cards. </li>
            <li>Misuse of the platform may result in account suspension or legal action.</li>

          </ul>
          <p className="font-medium text-gray-900 mt-5">Limitation of Liability</p>
          <ul className="list-inside list-disc">
            <li>BitBridge is not responsible for losses resulting from unauthorized access to user accounts. </li>
            <li>We do not guarantee the availability of all gift card types or service providers at all times.
            </li>

          </ul>
          <p className="font-medium text-gray-900 mt-5">Changes to Terms</p>
          <ul className="list-inside list-disc">
            <li>BitBridge reserves the right to update these terms at any time. Continued use of the platform constitutes acceptance of any changes. </li>

          </ul>

          <p>







































  
        </p>
      </div> 
      
      </section>
      </main>
  )
}

export default TermsCondintion