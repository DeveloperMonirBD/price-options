import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        { id: 1, name: 'Alice', math: 85, physics: 90, chemistry: 78 },
        { id: 2, name: 'Bob', math: 78, physics: 82, chemistry: 80 },
        { id: 3, name: 'Charlie', math: 92, physics: 88, chemistry: 85 },
        { id: 4, name: 'David', math: 88, physics: 76, chemistry: 90 },
        { id: 5, name: 'Eva', math: 74, physics: 80, chemistry: 72 },
        { id: 6, name: 'Frank', math: 90, physics: 85, chemistry: 88 },
        { id: 7, name: 'Grace', math: 82, physics: 79, chemistry: 84 },
        { id: 8, name: 'Hannah', math: 76, physics: 74, chemistry: 78 },
        { id: 9, name: 'Ian', math: 94, physics: 91, chemistry: 89 },
        { id: 10, name: 'Jack', math: 80, physics: 86, chemistry: 82 }
    ];



    return (
        <div className="max-w-7xl mx-auto mt-20 flex justify-center items-center">
            <LChart width={800} height={400} data={studentMarks}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Line dataKey="math" stroke="#8884d8" />
                <Line dataKey="physics" stroke="#ffffff" />
            </LChart>
        </div>
    );
};

export default LineChart;
