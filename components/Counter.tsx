interface Props {
    number: string;
    handleIncrement: () => void;
    handleReset: () => void;
}

const Counter: React.FC<Props> = ({ number, handleIncrement, handleReset }) => {
    return (
        <div className="grid place-items-center space-y-5">
            <span className="text-4xl mb-5">{number}</span>
            <button
                onClick={handleIncrement}
                className="bg-blue-400 rounded-lg p-3 text-white shadow-lg transform transition-all focus:outline-none hover:scale-110"
            >
                Increment
            </button>
            <button onClick={handleReset} className="bg-red-400 text-white rounded-lg p-3 focus:outline-none">
                Reset
            </button>
        </div>
    );
};

export default Counter;
