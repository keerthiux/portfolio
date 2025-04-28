import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './PillCarousel.css';

export default function PillCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: true,
    mode: 'free-snap',
    rubberband: false,
    created(slider) {
      slider.moveToIdx(5, true, { duration: 20000 }); // move slowly
    },
    updated(slider) {
      slider.moveToIdx(slider.track.details.abs + 1, true, { duration: 20000 });
    },
  });

  const items = [
    'Competitive analysis',
    'Heuristic analysis',
    'Information architecture',
    'Interaction design',
    'Prototyping',
    'Task flows',
    'User research',
    'Usability testing',
  ];

  return (
    <div ref={sliderRef} className="keen-slider">
      {items.map((item, idx) => (
        <div key={idx} className="keen-slider__slide pill">
          {item}
        </div>
      ))}
    </div>
  );
}
