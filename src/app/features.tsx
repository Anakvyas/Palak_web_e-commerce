import { Lightbulb, ShieldCheck, Star, Wrench } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 md:px-20 bg-black text-center text-white"
    >
      <h3 className="text-4xl font-bold text-amber-400 mb-10">
        Why Choose <span className="text-white">Palak Aluminium</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-transform duration-300">
          <Lightbulb className="mx-auto text-amber-400 w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Innovative Designs</h4>
          <p className="text-gray-400 text-sm">
            Every product reflects creativity and precision — built to enhance both
            aesthetics and function.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-transform duration-300">
          <ShieldCheck className="mx-auto text-amber-400 w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Unmatched Durability</h4>
          <p className="text-gray-400 text-sm">
            Our aluminium solutions are crafted for long-lasting performance with
            strength and corrosion resistance.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-transform duration-300">
          <Star className="mx-auto text-amber-400 w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
          <p className="text-gray-400 text-sm">
            Each product undergoes rigorous testing to ensure the highest level of
            craftsmanship and consistency.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-transform duration-300">
          <Wrench className="mx-auto text-amber-400 w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Customized Solutions</h4>
          <p className="text-gray-400 text-sm">
            Tailored aluminium hardware to meet unique architectural and design
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
