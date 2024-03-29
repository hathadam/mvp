import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Khmer',
    value: 'km',
  },
  {
    label: 'Chinese (Simplified)',
    value: 'zh',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'Spanish',
    value: 'es',
  }

];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="ui container" style={{marginTop:'5px'}}>
      <div className="ui form" >
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <Convert text={text} language={language} />
      <hr />

    </div>
  );
};

export default Translate;
