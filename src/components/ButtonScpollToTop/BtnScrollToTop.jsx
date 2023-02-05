import React, { useState, useEffect } from 'react';
import { BtnScrollTop } from './BtnScrollToTop.styled';

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div position="relative">
      {' '}
      {showTopBtn && (
        <BtnScrollTop className="icon-position icon-style" onClick={goToTop} />
      )}{' '}
    </div>
  );
};
