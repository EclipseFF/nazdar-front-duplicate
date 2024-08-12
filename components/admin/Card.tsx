interface CardProps {
    title: string
    value: string
}

export default function Card(props:CardProps){
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold mb-2">{props.value}</div>
            <div className="text-gray-500 text-sm">{props.title}</div>
        </div>
    )
}