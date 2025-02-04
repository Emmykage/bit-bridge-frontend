import Header from '../../compnents/header/Header'
import HeroBanner from '../../compnents/hero/Hero'

const PrivacyPolicies = () => {
  return (
    <main>
    <Header />
    <HeroBanner link="policies" extra="privacy" text={"Privacy Policy"}/>


  <section className="px-4">

    <div className="max-w-7xl m-auto my-10">
      <h3 className="text-2xl font-semibold my-4">
     Privacy Policy

      </h3>

      <p>
      BitBridge is committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information.


      </p>

      <p className="font-medium text-gray-900 mt-5">Information We Collect      </p>
      <ul className="list-inside list-disc">
        <li>Personal details such as name, email, phone number, and payment details.
        </li>
        <li>Transaction history and usage patterns to improve our services.        </li>        
        <li>Technical data, including IP addresses and device information, for security purposes.        </li>
      </ul>

      
      <p className="font-medium text-gray-900 mt-5">How We Use Your Information</p>
      <ul className="list-inside list-disc">
        <li>To provide, manage, and improve our services.        </li>
        <li>To process transactions and payments securely. </li>
        <li>To communicate with you regarding support, updates, and promotions.</li>
        <li>To ensure compliance with legal and regulatory obligations.</li>
      </ul>

      <p className="font-medium text-gray-900 mt-5">Data Protection  </p>
      <ul className="list-inside list-disc">
        <li>We implement advanced security measures to safeguard your personal data. </li>
        <li>Access to personal information is restricted to authorized personnel only.     </li>

      </ul>

      
      <p className="font-medium text-gray-900 mt-5">Third-Party Sharing </p>
        <ul className="list-inside list-disc">
          <li>We do not sell or rent your personal information.</li>
          <li>Your data may be shared with trusted service providers for payment processing and security enhancements.     </li>
          <li>We may disclose information if required by law or in response to legal processes.    </li>
        </ul>   
      <p className="font-medium text-gray-900 mt-5">Your Rights</p>
        <ul className="list-inside list-disc">
          <li>You have the right to access, update, or request deletion of your personal data. </li>
          <li>You can opt out of marketing communications at any time.</li>
            <li>For data-related inquiries, contact our support team.</li>
        </ul>

        <p className="font-medium text-gray-900 mt-5">Cookies & Tracking</p>
        <ul className="list-inside list-disc">
          <li>We use cookies to enhance your user experience and analyze website traffic.</li>
          <li>You can manage cookie preferences in your browser settings.</li>

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

export default PrivacyPolicies