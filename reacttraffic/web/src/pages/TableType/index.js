import React, { useState } from 'react';

const TableType = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [Data28, setData28] = useState({});
  const [Data28Id, setData28Id] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const Print28fn = () => {
    // 函數 Print28fn 的內容
  };

  const handleInputFocus = (input) => {
    setInputValue('');
  };

  const handleButtonClick = () => {
    const line28 = {
      Id: `${Data28Id + 1}`,
      UserName: `${inputValue1}`,
      Password: `${inputValue2}`,
    };

    setData28({ ...Data28, [Data28Id]: line28 });
    setData28Id(Data28Id + 1);
    setInputValue1('');
    setInputValue2('');
    Print28fn();
  };

  // 其他事件處理函數

  return (
    <div>
      <input
        id="Input28_1"
        value={inputValue1}
        onFocus={(e) => handleInputFocus(e)}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        id="Input28_2"
        value={inputValue2}
        onFocus={(e) => handleInputFocus(e)}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <button type='button' id="Button28" onClick={handleButtonClick}>Click Me</button>

      <table id="table28">
        <tbody id="tbody28">
          {/* 這裡將會顯示表格 */}
        </tbody>
      </table>
    </div>
  );
};

export default TableType;