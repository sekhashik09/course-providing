import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Terms and Conditions</h1>

      <div className="prose lg:prose-xl">
        <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
        <p>
          Welcome to Busters! These terms and conditions govern the use of our website, services, and products. By
          accessing and using our website, you agree to comply with these terms. Please read them carefully before
          using our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">2. Intellectual Property</h2>
        <p>
          All content on the website, including text, images, graphics, logos, and trademarks, is the property of
          Busters or its licensors. You may not copy, modify, distribute, or reproduce any content from this website
          without prior written consent from Busters.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">3. Use of Our Services</h2>
        <p>
          By using our services, you agree to comply with applicable laws and regulations. You are responsible for
          ensuring that your use of our services does not violate any laws or third-party rights.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">4. User Accounts</h2>
        <p>
          If you create an account with Busters, you are responsible for maintaining the confidentiality of your
          account information and password. You agree to notify us immediately of any unauthorized access to your
          account.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">5. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">6. Payment Terms</h2>
        <p>
          Payment for products or services provided by Busters must be made in accordance with the pricing and payment
          terms outlined on the website. All payments are due upon completion of the service or purchase unless stated
          otherwise.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">7. Limitation of Liability</h2>
        <p>
          Busters shall not be liable for any indirect, incidental, or consequential damages arising from the use of
          our website or services. In no event shall our liability exceed the amount paid by you for the specific
          service or product in question.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">8. Modifications</h2>
        <p>
          Busters reserves the right to modify or update these terms at any time. The updated terms will be posted on
          this page with an updated date, and your continued use of the website or services constitutes acceptance of
          the modified terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">9. Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of [Your Country/State]. Any disputes arising from
          these terms shall be resolved in the appropriate courts of [Your Country/State].
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">10. Contact Information</h2>
        <p>
          If you have any questions or concerns about these terms and conditions, please contact us at{' '}
          <a href="mailto:support@busters.com" className="text-blue-500">support@busters.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
