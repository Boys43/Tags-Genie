import React from 'react';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Results",
      description: "Get optimized tags, titles, and descriptions in seconds, not hours. Our AI processes your content instantly."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Data-Driven Precision",
      description: "Real-time YouTube analytics ensure your content targets the right keywords and audience segments."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Boost Your Reach",
      description: "Increase your video visibility and engagement with SEO-optimized content that ranks higher."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "YouTube Algorithm Ready",
      description: "Our suggestions are tailored to work with YouTube's latest algorithm updates and best practices."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Hours of Work",
      description: "Eliminate the guesswork and manual research. Focus on creating great content while we handle the SEO."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track how our optimizations improve your video performance with detailed insights and metrics."
    }
  ];

  const stats = [
    { number: "10M+", label: "Tags Generated" },
    { number: "500K+", label: "Creators Helped" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Available" }
  ];

  return (
    <section className="relative mt-20 py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)]/20 to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="main-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Why Choose{" "}
            <span className="font-tomorrow bg-gradient-to-r from-[#ff0000] to-[#ff4d4d] bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]">
              VIEW Rize
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Join thousands of creators who trust our AI-powered platform to{" "}
            <span className="font-semibold text-[var(--btn-primary)]">maximize their YouTube success</span>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-gray-300/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl overflow-hidden md:text-4xl font-bold text-[var(--btn-primary)] mb-2">
                {stat.number}
              </div>
              <div className="text-[var(--text-secondary)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-white/5 backdrop-blur-md border border-gray-300/10 
                         hover:bg-white/10 hover:border-[var(--btn-primary)]/30 
                         transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#ff0000]/20 to-[#ff4d4d]/20 
                               text-[var(--btn-primary)] group-hover:from-[#ff0000]/30 group-hover:to-[#ff4d4d]/30 
                               transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl overflow-hidden font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--btn-primary)] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[var(--bg-secondary)]/30 to-[var(--bg-accent)]/30 
                        rounded-2xl p-12 backdrop-blur-md border border-gray-300/10">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-[var(--btn-primary)]" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Ready to Boost Your YouTube Success?
          </h3>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Join the thousands of creators already using <span className="font-semibold text-[var(--btn-primary)]">View Rize</span> to optimize their content and grow their channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="primary flex items-center gap-2">
              <CheckCircle size={20} />
              Start Free Today
            </button>
            <button className="secondary">
                Use Generators
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;