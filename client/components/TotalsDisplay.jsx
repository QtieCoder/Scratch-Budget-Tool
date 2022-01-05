import React, { useState } from 'react';

const TotalsDisplay = ({ totalCards, totalMarkets, syncMarkets, synced }) => (
  <div className='innerbox' id='totals'>
    <div>
      <LabeledText label='Total Cards' text={totalCards} />
      <LabeledText label='Total Markets' text={totalMarkets} />
    </div>
    <button
      id='sync'
      className='secondary'
      onClick={syncMarkets}
      disabled={synced}
    >
      Sync
    </button>
  </div>
);
export default TotalsDisplay;
