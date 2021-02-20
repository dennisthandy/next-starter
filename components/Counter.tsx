interface Props {
    number: string;
    handleIncrement: () => void;
    handleReset: () => void;
}

const Counter: React.FC<Props> = ({ number, handleIncrement, handleReset }) => {
    return (
        <div className="grid place-items-center">
            <span>{number}</span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;
