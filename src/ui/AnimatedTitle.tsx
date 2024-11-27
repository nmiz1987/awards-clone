import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  title: string;
  containerClass: string;
}

export const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '200 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });
      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      });

      return () => ctx.revert();
    }, containerRef);
  }, []);

  return (
    <div className={`animated-title ${containerClass}`} ref={containerRef}>
      {title.split('<br />').map((line, index) => (
        <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
          {line.split(' ').map((word, j) => (
            <span key={j} className="animated-word" dangerouslySetInnerHTML={{ __html: word }} />
          ))}
        </div>
      ))}
    </div>
  );
};
