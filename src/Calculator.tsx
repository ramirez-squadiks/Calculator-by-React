import React, { useState } from 'react';
import './Calculator.css';
import Modal from './Modal';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>('');

    const handleButtonClick = (value: string) => {
        setInput(prev => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            const evalResult = eval(input);
            setResult(evalResult.toString());
            setModalMessage(`Результат: ${evalResult}`);
            setIsModalOpen(true);
        } catch (error) {
            setModalMessage('Ошибка в выражении');
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="calculator">
            <h1>Калькулятор</h1>
            <div>
                <input type="text" value={input} readOnly />
            </div>
            <div>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick ={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} message={modalMessage} />
        </div>
    );
};

export default Calculator;
