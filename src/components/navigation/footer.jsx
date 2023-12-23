import React from 'react'
import FooterLinks from './footerLinks'

export default function Footer() {
  return (
    <div className="h-3/4 bg-primary py-20 px-5 lg:px-20 mt-10 text-white flex max-sm:flex-col max-sm:gap-10">
      {/* Footer Links */}
      <FooterLinks />
      {/* Disclaimer Text */}
      <div className="w-1/2 max-sm:w-full">
        <p>
          Stems Real Estate Investment Policy Introduction: Stems Real Estate
          recognizes the significance of sound investment policies to ensure
          sustained growth, risk mitigation, and client satisfaction. This
          investment policy serves as a guiding framework for our approach to
          real estate investment. Objective: The primary objective of Stems Real
          Estate's investment policy is to deliver consistent, long-term returns
          to our investors while maintaining a prudent risk profile. We aim to
          achieve this by identifying strategic opportunities, embracing
          innovation, and adhering to ethical business practices. Investment
          Philosophy: Stems Real Estate adheres to a balanced and diversified
          investment philosophy. We believe in the power of strategic
          diversification across various real estate sectors and geographic
          locations. Our commitment to thorough research, market analysis, and
          due diligence underpins every investment decision. Risk Management:
          Mitigating risk is a cornerstone of our investment policy. Stems Real
          Estate employs a rigorous risk management framework that includes
          scenario analysis, stress testing, and continuous monitoring of market
          dynamics. By staying ahead of potential risks, we aim to protect our
          investors' capital and enhance the resilience of our portfolio.
          Transparency and Communication: Stems Real Estate places a premium on
          transparency and communication. We are committed to providing our
          investors with clear and comprehensive information regarding their
          investments. Regular updates, performance reports, and open
          communication channels ensure that our clients are well-informed and
          confident in their investment journey. Sustainable and Responsible
          Investing: Stems Real Estate is dedicated to sustainable and
          responsible investing. We consider environmental, social, and
          governance (ESG) factors in our decision-making process. By
          incorporating ethical practices and supporting environmentally
          conscious projects, we contribute to the well-being of communities and
          the planet. Adaptability and Innovation: In a dynamic real estate
          market, adaptability and innovation are paramount. Stems Real Estate
          actively embraces technological advancements, market trends, and
          innovative strategies to stay ahead. Our commitment to continuous
          improvement ensures that our investment approach remains robust and
          responsive to evolving market conditions. Conclusion: Stems Real
          Estate's investment policy reflects our commitment to delivering value
          to our investors through prudent and forward-thinking strategies. By
          upholding the principles outlined in this policy, we aim to build
          enduring relationships, foster community development, and create a
          legacy of successful real estate investments.
        </p>
      </div>
      <div></div>
    </div>
  );
}
