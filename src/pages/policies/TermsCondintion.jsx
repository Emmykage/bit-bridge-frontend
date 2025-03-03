import Footer from "../../compnents/footer/Footer"
import Header from "../../compnents/header/Header"
import HeroBanner from "../../compnents/hero/Hero"


const TermsCondintion = () => {
  return (
    <>
    <main className="">
      <Header />
      <HeroBanner link="policies" extra="terms and conditions" text={"Terms and Condition"}/>


      <section className=" py-10 px-4 ">

        <div className="max-w-7xl m-auto my-10">
          <h3 className="text-2xl font-semibold my-4">
          Terms and Conditions

          </h3>

          <p>
            By using the BitBridge platform, you agree to abide by the following terms and conditions:

          </p>

          <p className="font-medium text-xl my-3 text-gray-900 mt-5">Vulnerability disclosure</p>
          <ul className="list-inside list-decimal space-y-10">
            <li>Bridge Global Vulnerability Disclosure Policy
            IntroductionAt Bit Bridge Global, security is a top priority. We are committed to protecting our users' data and ensuring our platform is safe and reliable. This Vulnerability Disclosure Policy (VDP) outlines the guidelines for security researchers to report vulnerabilities responsibly </li>
            
              <li>
              ScopeThis policy applies to:
              All web applications, APIs, and services operated by Bit Bridge Global.
              Any vulnerability that could impact the confidentiality, integrity, or availability of our platform and users.
              Out of scope:
              Denial-of-Service (DoS) attacks.
              Social engineering or phishing attacks.
              Physical attacks against our employees, offices, or data centers.
              Reports based on outdated software versions that are no longer supported.
            
            </li>
              <li>
                
              Guidelines for Responsible DisclosureTo ensure a safe and ethical vulnerability reporting process, we ask researchers to:
              Avoid actions that may disrupt services (e.g., DDoS attacks, spam, etc.).
              Not access, modify, or delete any data belonging to other users.
              Report vulnerabilities promptly and privately.
              Provide a clear and detailed report, including steps to reproduce the issue.
              Give us a reasonable timeframe to investigate and resolve the issue before making any public disclosure.
              </li>
              <li>
                How to Report a VulnerabilityIf you discover a vulnerability, please report it via <a href="mailto:care@bitbridgeglobal.com" className="text-blue-500">care@bitbridgeglobal.com</a>  with the following details:
              Description: A clear explanation of the issue and potential impact.
              Steps to Reproduce: Step-by-step instructions or proof-of-concept code.
              Affected Systems: URLs, API endpoints, or other details.
              Your Contact Information: So we can follow up with questions or updates.

              </li>
            <li>
                          Our CommitmentWe will acknowledge your report within two business days.
                We will work diligently to investigate and resolve valid vulnerabilities.
                If permitted, we may publicly acknowledge your contribution.
                We will not take legal action against researchers who act in good faith and follow this policy.

            </li>
            <li>
            Recognition and Rewards We value the effort of security researchers and may offer recognition or rewards for significant findings. Any rewards will be determined based on the severity and impact of the reported vulnerability.


            </li>
            <li>
            Legal ConsiderationsThis policy does not authorize unauthorized access, data modification, or activities that would violate any applicable laws. Researchers must comply with all relevant laws and act in good faith.

            </li>
            <li>
            Contact UsFor security-related concerns or to submit a vulnerability report, contact us at care@bitbridgeglobal.com
            By following this policy, you help us maintain a secure and trusted platform for all users. We appreciate your efforts in making Bit Bridge Global safer!

            </li>
          </ul>

          
          
        </div> 
        
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default TermsCondintion