import React from "react";
import FooterLinks from "./footerLinks";

export default function Footer() {
  return (
    <div className="h-3/4 bg-primary py-20 px-5 lg:px-20 mt-10 text-white flex max-sm:flex-col max-sm:gap-10">
      {/* Footer Links */}
      <FooterLinks />
      {/* Disclaimer Text */}
      <div className="w-1/2 max-sm:w-full">
        <p>
          STEM, LLC (“stem“) operates a website at www.investwithstem.com and
          certain mobile apps (the “Platform“). By using the Platform, you
          accept our Terms of Service and Privacy Policy. All images and return
          and projection figures shown are for illustrative purposes only, may
          assume additional investments over time, and are not actual stem
          customer or model returns or projections. Past performance is no
          guarantee of future results. Any historical returns, expected returns,
          or probability projections may not reflect actual future performance.
          All securities involve risk and may result in partial or total loss.
          While the data we use from third parties is believed to be reliable,
          we cannot ensure the accuracy or completeness of data provided by
          investors or other third parties. Neither stem nor any of its
          affiliates provide tax advice and do not represent in any manner that
          the outcomes described herein will result in any particular tax
          consequence. Prospective investors should confer with their personal
          tax advisors regarding the tax consequences based on their particular
          circumstances. Neither stem nor any of its affiliates assume
          responsibility for the tax consequences for any investor of any
          investment. Full Disclosure The publicly filed offering circulars of
          the issuers sponsored by Rise Companies Corp., not all of which may be
          currently qualified by the Securities and Exchange Commission, may be
          found at stem.com/oc. For investors and potential investors who
          are residents of the State of Washington, please send all
          correspondence, including any questions or comments, to
          washingtonstate@stem.com. stem takes any potential security
          issues seriously, and encourages the responsible and timely reporting
          of unknown security issues. Please send any discovered security
          concerns to securitydisclosure@stem.com © 2024 stem, LLC. All
          Rights Reserved. eREIT, eFund and eDirect are trademarks of Rise
          Companies Corp. Google Play and the Google Play logo are registered
          trademarks of Google LLC. Apple, the Apple logo and iPhone are
          registered trademarks of Apple Inc. NerdWallet and the NerdWallet logo
          are trademarks owned by NerdWallet, Inc. and used with permission.
          Proudly designed and coded in Washington, D.C.
        </p>
      </div>
      <div></div>
    </div>
  );
}
