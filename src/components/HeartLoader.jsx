import { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';

const HeartLoader = ({ onFinish }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const bar = new ProgressBar.Path(pathRef.current, {
      easing: 'easeInOut',
      duration: 1400,
    });

    bar.set(0);
    bar.animate(1.0, () => {
      if (onFinish) onFinish();
    });
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <svg viewBox="0 0 100 100" className="w-40 h-40 text-pink-500">
        <path
          fillOpacity="0"
          strokeWidth="1"
          stroke="#bbb"
          d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032
             C44.74,13.612,29.879,8.657,18.511,13.923  
             C6.402,19.539,0.613,33.883,10.175,50.804
             c6.792,12.04,18.826,21.111,39.831,37.379
             c20.993-16.268,33.033-25.344,39.819-37.379
             C99.387,33.883,93.598,19.539,81.495,13.923z"
        />
        <path
          ref={pathRef}
          fillOpacity="0"
          strokeWidth="3"
          stroke="currentColor"
          d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032
             C44.74,13.612,29.879,8.657,18.511,13.923  
             C6.402,19.539,0.613,33.883,10.175,50.804
             c6.792,12.04,18.826,21.111,39.831,37.379
             c20.993-16.268,33.033-25.344,39.819-37.379
             C99.387,33.883,93.598,19.539,81.495,13.923z"
        />
      </svg>
    </div>
  );
};

export default HeartLoader;
