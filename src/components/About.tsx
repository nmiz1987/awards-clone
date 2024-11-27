import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AnimatedTitle } from '../ui/AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-dvw">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-xl">Welcome to Zentry</h2>
        <AnimatedTitle title="Disc<b>o</b>ver the world's<br /> l<b>a</b>rgest shared adventure" containerClass="mt-5 !text-black text-center" />
        <div className="about-subtext">
          <p>The game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
      <div className="h-dvh w-dvw" id="clip">
        <div className="mask-clip-path about-image">
          <img src="img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
};