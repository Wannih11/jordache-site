import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalSlides = 22;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSlide = Math.round(scrollPosition / windowHeight);
      
      if (newSlide !== currentSlide && newSlide >= 0 && newSlide < totalSlides) {
        setCurrentSlide(newSlide);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  const scrollToSlide = (index: number) => {
    const slide = slideRefs.current[index];
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setSlideRef = (index: number) => (el: HTMLDivElement | null) => {
    slideRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Navigation Dots */}
      <div className="nav-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide 1: Cover */}
      <section ref={setSlideRef(0)} className="slide slide-dark relative">
        <div className="absolute inset-0">
          <img 
            src="/images/cover-woman.jpg" 
            alt="Real woman in denim" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <h1 className="editorial-title text-7xl md:text-9xl text-white mb-6 tracking-tight animate-fade-in-up">
            JORDACHE
          </h1>
          <p className="editorial-subtitle text-white/80 tracking-[0.3em] text-sm animate-fade-in-up delay-200">
            Embrace the Curves
          </p>
        </div>
      </section>

      {/* Slide 2: Opening Statement */}
      <section ref={setSlideRef(1)} className="slide slide-dark">
        <div className="flex flex-col items-center justify-center h-full text-center px-8 max-w-4xl mx-auto">
          <p className="editorial-title text-4xl md:text-6xl text-white leading-tight animate-fade-in-up">
            She's not ready.
          </p>
          <p className="editorial-title text-4xl md:text-6xl text-white leading-tight mt-4 animate-fade-in-up delay-200">
            But she shows up anyway.
          </p>
        </div>
      </section>

      {/* Slide 3: Approach / Objective */}
      <section ref={setSlideRef(2)} className="slide slide-light">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <div className="editorial-grid">
            <div>
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">01</span>
              <h2 className="editorial-title text-5xl md:text-7xl mt-4 text-[#1a2332]">
                APPROACH
              </h2>
            </div>
            <div className="animate-fade-in-up delay-200">
              <p className="editorial-body text-[#6b6b6b] leading-relaxed">
                Jordache aims to reposition itself from a denim brand into a lifestyle brand that supports real confidence.
              </p>
              <p className="editorial-body text-[#6b6b6b] leading-relaxed mt-6">
                Rather than defining what confidence should look like, the brand focuses on supporting women as they navigate real life — with all its uncertainty, pressure, and imperfection.
              </p>
              <p className="editorial-body text-[#6b6b6b] leading-relaxed mt-6">
                The objective is to build a brand that is emotionally relevant, culturally grounded, and expressed through real actions, not just messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Situation */}
      <section ref={setSlideRef(3)} className="slide slide-off-white">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <div className="editorial-grid">
            <div className="animate-fade-in-up">
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">02</span>
              <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-8">
                SITUATION
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#c41e3a] rounded-full mt-2 flex-shrink-0" />
                  <p className="editorial-body text-[#1a2332]">Denim market is saturated</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#c41e3a] rounded-full mt-2 flex-shrink-0" />
                  <p className="editorial-body text-[#1a2332]">Trend-driven</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#c41e3a] rounded-full mt-2 flex-shrink-0" />
                  <p className="editorial-body text-[#1a2332]">Low loyalty</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#c41e3a] rounded-full mt-2 flex-shrink-0" />
                  <p className="editorial-body text-[#1a2332]">Unclear positioning</p>
                </div>
              </div>
            </div>
            <div className="h-[500px] animate-fade-in delay-300">
              <img 
                src="/images/denim-store.jpg" 
                alt="Denim store" 
                className="w-full h-full object-cover img-editorial"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Category */}
      <section ref={setSlideRef(4)} className="slide slide-light">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">03</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-12">
            CATEGORY
          </h2>
          <div className="comparison-grid">
            <div className="comparison-item animate-fade-in-up">
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">Premium</h3>
              <p className="editorial-body text-[#6b6b6b]">Sell aspiration and status</p>
              <p className="editorial-body text-[#6b6b6b] mt-4">Focus on image and appearance</p>
            </div>
            <div className="comparison-item animate-fade-in-up delay-200">
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">Fast Fashion</h3>
              <p className="editorial-body text-[#6b6b6b]">Sell trends and affordability</p>
              <p className="editorial-body text-[#6b6b6b] mt-4">Disposable consumption</p>
            </div>
          </div>
          <p className="editorial-body text-center text-[#1a2332] mt-12 max-w-2xl mx-auto animate-fade-in delay-400">
            Most brands compete on how consumers look. Very few brands engage with how consumers feel or live.
          </p>
        </div>
      </section>

      {/* Slide 6: Competition */}
      <section ref={setSlideRef(5)} className="slide slide-off-white">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">04</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-16">
            COMPETITION
          </h2>
          <div className="three-col">
            <div className="animate-fade-in-up">
              <h3 className="editorial-title text-4xl text-[#1a2332] mb-4">Guess</h3>
              <p className="editorial-body text-[#6b6b6b]">Sexy, aspirational</p>
            </div>
            <div className="animate-fade-in-up delay-100 mt-12 md:mt-0">
              <h3 className="editorial-title text-4xl text-[#1a2332] mb-4">Calvin Klein</h3>
              <p className="editorial-body text-[#6b6b6b]">Minimal, premium</p>
            </div>
            <div className="animate-fade-in-up delay-200 mt-8 md:mt-0">
              <h3 className="editorial-title text-4xl text-[#1a2332] mb-4">Zara / H&M</h3>
              <p className="editorial-body text-[#6b6b6b]">Trend-driven, disposable</p>
            </div>
          </div>
          <p className="editorial-body text-center text-[#1a2332] mt-20 max-w-2xl mx-auto animate-fade-in delay-400">
            All competitors focus on image, appearance, and trend relevance. None focus on the emotional process of building confidence.
          </p>
        </div>
      </section>

      {/* Slide 7: Culture */}
      <section ref={setSlideRef(6)} className="slide slide-light">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">05</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-12">
            CULTURE
          </h2>
          <div className="editorial-grid">
            <div className="h-[400px] animate-fade-in-up">
              <img 
                src="/images/social-media-vs-real.jpg" 
                alt="Social media vs real life" 
                className="w-full h-full object-contain img-editorial"
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <p className="editorial-title text-3xl text-[#1a2332] mb-6">
                Confidence is expected to be perfect
              </p>
              <p className="editorial-body text-[#6b6b6b] mb-8">
                Social media creates unrealistic expectations, making confidence appear effortless and universal.
              </p>
              <p className="editorial-title text-3xl text-[#1a2332] mb-6">
                But reality is not
              </p>
              <p className="editorial-body text-[#6b6b6b]">
                Real confidence is inconsistent, emotional, and built over time. This gap between expectation and reality creates a powerful tension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 8: Consumer */}
      <section ref={setSlideRef(7)} className="slide slide-off-white">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <div className="editorial-grid">
            <div className="animate-fade-in-up">
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">06</span>
              <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-8">
                CONSUMER
              </h2>
              <p className="editorial-title text-2xl text-[#1a2332] mb-8">
                Women today are:
              </p>
              <div className="space-y-4">
                <p className="editorial-body text-[#1a2332] text-xl">Under pressure</p>
                <p className="editorial-body text-[#1a2332] text-xl">Uncertain</p>
                <p className="editorial-body text-[#1a2332] text-xl">Still growing</p>
              </div>
            </div>
            <div className="h-[500px] animate-fade-in delay-300">
              <img 
                src="/images/woman-contemplation.jpg" 
                alt="Woman in contemplation" 
                className="w-full h-full object-cover img-editorial"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Ambition */}
      <section ref={setSlideRef(8)} className="slide slide-light">
        <div className="flex flex-col items-center justify-center h-full text-center px-8 max-w-5xl mx-auto">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em] animate-fade-in-up">07</span>
          <h2 className="editorial-title text-6xl md:text-8xl mt-6 text-[#1a2332] animate-fade-in-up delay-200">
            Own real confidence
          </h2>
        </div>
      </section>

      {/* Slide 10: Target */}
      <section ref={setSlideRef(9)} className="slide slide-off-white">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">08</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-12">
            TARGET
          </h2>
          <div className="editorial-grid">
            <div className="h-[450px] animate-fade-in-up">
              <img 
                src="/images/diverse-women.jpg" 
                alt="Diverse women" 
                className="w-full h-full object-cover img-editorial"
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <p className="editorial-title text-4xl text-[#1a2332] mb-6">
                Women 18–45
              </p>
              <p className="editorial-body text-[#6b6b6b] text-lg mb-8">
                Still figuring life out
              </p>
              <p className="editorial-body text-[#6b6b6b]">
                They are not defined by age, but by mindset — they are navigating uncertainty and building confidence over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 11: Tension */}
      <section ref={setSlideRef(10)} className="slide slide-light">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">09</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-16">
            TENSION
          </h2>
          <div className="comparison-grid">
            <div className="comparison-item animate-fade-in-up">
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">Expected</h3>
              <p className="editorial-body text-[#6b6b6b]">Confidence is expected to be effortless and immediate.</p>
            </div>
            <div className="comparison-item animate-fade-in-up delay-200">
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">Reality</h3>
              <p className="editorial-body text-[#6b6b6b]">Confidence is built through effort, discomfort, and persistence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 12: Strategy */}
      <section ref={setSlideRef(11)} className="slide slide-off-white">
        <div className="flex flex-col items-center justify-center h-full text-center px-8 max-w-4xl mx-auto">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em] animate-fade-in-up">10</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-6 text-[#1a2332] mb-8 animate-fade-in-up delay-200">
            STRATEGY
          </h2>
          <p className="editorial-body text-xl text-[#1a2332] animate-fade-in-up delay-300">
            Jordache supports women as they navigate the curves of life.
          </p>
          <p className="editorial-body text-xl text-[#6b6b6b] mt-6 animate-fade-in-up delay-400">
            Instead of defining confidence, the brand supports the process of building it.
          </p>
        </div>
      </section>

      {/* Slide 13: Purpose / Values / DNA */}
      <section ref={setSlideRef(12)} className="slide slide-light">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">11</span>
          <div className="three-col mt-12">
            <div className="animate-fade-in-up">
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">Purpose</h3>
              <p className="editorial-body text-[#6b6b6b]">Support real confidence</p>
            </div>
            <div className="animate-fade-in-up delay-100">
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">Values</h3>
              <div className="space-y-2">
                <p className="editorial-body text-[#6b6b6b]">Real over perfect</p>
                <p className="editorial-body text-[#6b6b6b]">Process over outcome</p>
                <p className="editorial-body text-[#6b6b6b]">Support over pressure</p>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">DNA</h3>
              <div className="space-y-2">
                <p className="editorial-body text-[#6b6b6b]">Bold</p>
                <p className="editorial-body text-[#6b6b6b]">Real</p>
                <p className="editorial-body text-[#6b6b6b]">Supportive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 14: Golden Circle */}
      <section ref={setSlideRef(13)} className="slide slide-off-white">
        <div className="max-w-4xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">12</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-16">
            GOLDEN CIRCLE
          </h2>
          <div className="space-y-12">
            <div className="animate-fade-in-up">
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">WHY</span>
              <p className="editorial-title text-3xl text-[#1a2332] mt-4">
                Confidence is built, not given.
              </p>
            </div>
            <div className="animate-fade-in-up delay-100">
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">HOW</span>
              <p className="editorial-title text-3xl text-[#1a2332] mt-4">
                By supporting women through real-life experiences.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">WHAT</span>
              <p className="editorial-title text-3xl text-[#1a2332] mt-4">
                Denim products combined with storytelling, community, and real-world engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 15: Big Idea */}
      <section ref={setSlideRef(14)} className="slide slide-dark">
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <span className="editorial-subtitle text-white/60 tracking-[0.2em] animate-fade-in-up">13</span>
          <h2 className="editorial-title text-7xl md:text-9xl mt-6 text-white animate-fade-in-up delay-200">
            EMBRACE
          </h2>
          <h2 className="editorial-title text-7xl md:text-9xl text-white animate-fade-in-up delay-300">
            THE CURVES
          </h2>
          <p className="editorial-body text-white/60 mt-12 max-w-xl animate-fade-in-up delay-400">
            This idea reflects both physical curves and the curves of life — uncertainty, growth, and imperfection.
          </p>
        </div>
      </section>

      {/* Slide 16: Brand Direction */}
      <section ref={setSlideRef(15)} className="slide slide-light">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">14</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-16">
            BRAND DIRECTION
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center animate-fade-in-up">
              <p className="editorial-body text-[#6b6b6b] mb-4">From</p>
              <p className="editorial-title text-3xl text-[#1a2332]">Denim</p>
              <p className="editorial-title text-3xl text-[#1a2332] mt-2">Looking confident</p>
              <p className="editorial-title text-3xl text-[#1a2332] mt-2">Body-focused</p>
            </div>
            <div className="text-6xl text-[#c41e3a] animate-fade-in delay-300">→</div>
            <div className="text-center animate-fade-in-up delay-200">
              <p className="editorial-body text-[#6b6b6b] mb-4">To</p>
              <p className="editorial-title text-3xl text-[#1a2332]">Lifestyle</p>
              <p className="editorial-title text-3xl text-[#1a2332] mt-2">Building confidence</p>
              <p className="editorial-title text-3xl text-[#1a2332] mt-2">Life-focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 17: Brand Architecture */}
      <section ref={setSlideRef(16)} className="slide slide-dark">
        <div className="max-w-4xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-white/60 tracking-[0.2em]">15</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-white mb-16">
            BRAND ARCHITECTURE
          </h2>
          <div className="layer-stack">
            <div className="layer-item animate-fade-in-up">
              <span className="editorial-subtitle text-white/60 tracking-[0.2em]">LAYER 01</span>
              <h3 className="editorial-title text-3xl text-white mt-4">Product</h3>
              <p className="editorial-body text-white/70 mt-4">Supports the body through comfort, flexibility, and real fit</p>
            </div>
            <div className="layer-item animate-fade-in-up delay-100">
              <span className="editorial-subtitle text-white/60 tracking-[0.2em]">LAYER 02</span>
              <h3 className="editorial-title text-3xl text-white mt-4">Content</h3>
              <p className="editorial-body text-white/70 mt-4">Supports mindset through storytelling and real-life representation</p>
            </div>
            <div className="layer-item animate-fade-in-up delay-200">
              <span className="editorial-subtitle text-white/60 tracking-[0.2em]">LAYER 03</span>
              <h3 className="editorial-title text-3xl text-white mt-4">Community</h3>
              <p className="editorial-body text-white/70 mt-4">Supports growth through participation, shared experiences, and programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 18: Product */}
      <section ref={setSlideRef(17)} className="slide slide-off-white">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <div className="editorial-grid">
            <div className="h-[500px] animate-fade-in-up">
              <img 
                src="/images/denim-texture.jpg" 
                alt="Denim texture detail" 
                className="w-full h-full object-cover img-editorial"
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">16</span>
              <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-8">
                PRODUCT
              </h2>
              <p className="editorial-body text-[#1a2332] text-lg mb-4">
                Supports movement
              </p>
              <p className="editorial-body text-[#1a2332] text-lg mb-4">
                Comfort
              </p>
              <p className="editorial-body text-[#1a2332] text-lg mb-8">
                Real life
              </p>
              <p className="editorial-body text-[#6b6b6b]">
                The product does not define confidence — it supports it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 19: Place */}
      <section ref={setSlideRef(18)} className="slide slide-light">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">17</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-12">
            PLACE
          </h2>
          <p className="editorial-title text-3xl text-[#1a2332] mb-12">
            Where life happens
          </p>
          <div className="three-col gap-4">
            <div className="h-[300px] animate-fade-in-up">
              <img 
                src="/images/campus.jpg" 
                alt="Campus" 
                className="w-full h-full object-cover img-editorial"
              />
              <p className="editorial-body text-center text-[#1a2332] mt-4">Campus</p>
            </div>
            <div className="h-[300px] animate-fade-in-up delay-100">
              <img 
                src="/images/woman-workplace.jpg" 
                alt="Workplace" 
                className="w-full h-full object-cover img-editorial"
              />
              <p className="editorial-body text-center text-[#1a2332] mt-4">Work</p>
            </div>
            <div className="h-[300px] animate-fade-in-up delay-200">
              <img 
                src="/images/woman-cafe.jpg" 
                alt="Daily life" 
                className="w-full h-full object-cover img-editorial"
              />
              <p className="editorial-body text-center text-[#1a2332] mt-4">Daily Life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 20: Promotion */}
      <section ref={setSlideRef(19)} className="slide slide-dark">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <span className="editorial-subtitle text-white/60 tracking-[0.2em]">18</span>
          <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-white mb-8">
            PROMOTION
          </h2>
          <h3 className="editorial-title text-4xl text-white mb-12 animate-fade-in-up">
            STILL SHOWING UP
          </h3>
          <div className="editorial-grid">
            <div className="animate-fade-in-up delay-200">
              <p className="editorial-body text-white/80 text-lg mb-4">
                Real moments
              </p>
              <p className="editorial-body text-white/80 text-lg">
                Real stories
              </p>
            </div>
            <div className="h-[400px] animate-fade-in delay-300">
              <img 
                src="/images/woman-street.jpg" 
                alt="Real moment" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 21: Community / Program */}
      <section ref={setSlideRef(20)} className="slide slide-off-white">
        <div className="max-w-6xl mx-auto w-full px-8 md:px-16">
          <div className="editorial-grid">
            <div className="animate-fade-in-up">
              <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em]">19</span>
              <h2 className="editorial-title text-5xl md:text-6xl mt-4 text-[#1a2332] mb-8">
                COMMUNITY
              </h2>
              <h3 className="editorial-title text-3xl text-[#1a2332] mb-6">
                Jordache Confidence Program
              </h3>
              <div className="space-y-4">
                <p className="editorial-body text-[#1a2332]">Workshops</p>
                <p className="editorial-body text-[#1a2332]">Support</p>
                <p className="editorial-body text-[#1a2332]">Real growth</p>
              </div>
            </div>
            <div className="h-[500px] animate-fade-in delay-300">
              <img 
                src="/images/workshop.jpg" 
                alt="Workshop" 
                className="w-full h-full object-cover img-editorial"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 22: Manifesto */}
      <section ref={setSlideRef(21)} className="slide slide-light">
        <div className="flex flex-col items-center justify-center h-full text-center px-8 max-w-4xl mx-auto">
          <span className="editorial-subtitle text-[#c41e3a] tracking-[0.2em] animate-fade-in-up">20</span>
          <div className="mt-12 space-y-6">
            <p className="editorial-title text-3xl md:text-5xl text-[#1a2332] animate-fade-in-up delay-100">
              Confidence isn't given.
            </p>
            <p className="editorial-title text-3xl md:text-5xl text-[#1a2332] animate-fade-in-up delay-200">
              It's built.
            </p>
            <p className="editorial-title text-3xl md:text-5xl text-[#1a2332] animate-fade-in-up delay-300">
              Not perfect.
            </p>
            <p className="editorial-title text-3xl md:text-5xl text-[#1a2332] animate-fade-in-up delay-400">
              Still showing up.
            </p>
          </div>
          <div className="mt-20 animate-fade-in delay-500">
            <p className="editorial-subtitle text-[#c41e3a] tracking-[0.3em]">
              EMBRACE THE CURVES
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
