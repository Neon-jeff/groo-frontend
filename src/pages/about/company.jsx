import React from 'react'
import Nav from '../../components/navigation/Nav'
import Footer from '../../components/navigation/footer';

export default function Company() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Nav />
      {/* Company Profile */}
      <div className="w-4/5  mx-auto rounded-xl shadow-md mt-48 p-10 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">About Us</h1>
        <p>
          At Stems Real Estate Investment, we cultivate prosperity by sowing the
          seeds of sound financial growth in the fertile landscape of real
          estate. With a commitment to excellence and an unwavering focus on
          sustainable investments, we embark on a journey to transform
          properties into flourishing assets.
        </p>
        <h1 className="text-2xl font-semibold">Our Mission</h1>
        <p>
          To be the premier choice for real estate investment, fostering growth
          and stability in the ever-evolving market. We aim to provide our
          clients with opportunities that not only yield impressive returns but
          also contribute to the overall vitality of the communities we serve.
        </p>
        <h1 className="text-2xl font-semibold">What Set us Apart</h1>
        <ul className="flex flex-col gap-5">
          <ol className="list-number">
            Strategic Growth: Stems navigates the real estate terrain with a
            strategic approach, identifying opportunities for growth and
            capitalizing on emerging trends to maximize returns.
          </ol>
          <ol>
            Commitment to Quality: We invest in properties that stand the test
            of time, ensuring that our portfolio is a testament to quality
            craftsmanship, sustainable design, and enduring value.
          </ol>
          <ol>
            Community Enrichment: Beyond profits, we believe in giving back.
            Stems actively engages in community initiatives, seeking to enhance
            the neighborhoods where we invest and leaving a positive, lasting
            impact.
          </ol>
          <ol>
            Transparent Partnerships: Open communication and transparency are
            the cornerstones of our client relationships. We work
            collaboratively with investors, providing them with the information
            and support they need to make informed decisions.
          </ol>
        </ul>
        <h1 className="text-2xl font-semibold">Our Portfolio</h1>
        <p>
          From residential developments to commercial ventures, Stems Real
          Estate Investment carefully curates a diverse portfolio. Whether it's
          revitalizing urban spaces or crafting serene residential communities,
          we consistently deliver exceptional results.
        </p>
      </div>
      <Footer />
    </div>
  );
}
