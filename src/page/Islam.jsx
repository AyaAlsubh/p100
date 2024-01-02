import React from 'react';
import { Link } from 'react-router-dom';

const Islam = () => {
  return (
    <>
      <div className='nnn'>
        <h1 style={{ fontSize: '30px' }}>العاملات المتوفرات</h1>

        <Link className='server-section-cards-containar ' id='is' to='/islamd'></Link>
        <div className='server-section-icon ' id='gm'>
          <h4 style={{ textAlign: 'center' }}>الوقت المتوفر :10صباحًا-5مساءًا</h4>
          <h4 style={{ textAlign: 'center' }}> الايام:طيلة ايام الأسبوع</h4>
          <h4 style={{ textAlign: 'center' }}> ⭐⭐⭐⭐⭐حاصلة على تقييم </h4>
          <h4 id='t' style={{ textAlign: 'center' }}>اطلب الأن بدون تردد</h4>
        </div>
      </div>

      <div className='nnn'>
        <h2 style={{ fontSize: '30px' }}>العاملات المتوفرات</h2>

        <Link className='server-section-cards-containar ' id='is' to='/islamd'></Link>
        <div className='server-section-icon ' id='gm'>
          <h4 style={{ textAlign: 'center' }}>الوقت المتوفر :9صباحًا-4مساءًا</h4>
          <h4 style={{ textAlign: 'center' }}> الايام:طيلة ايام الأسبوع</h4>
          <h4 style={{ textAlign: 'center' }}> ⭐⭐⭐⭐⭐حاصلة على تقييم </h4>
          <h4 id='t' style={{ textAlign: 'center' }}>اطلب الأن بدون تردد</h4>
        </div>
      </div>
    </>
  );
};

export default Islam;
