export default function InputOptions({ Icon, title, color }) {
    return (
        <div className="input-options flex items-center mt-2 p-3 cursor-pointer hover:bg-zinc-800 hover:rounded-lg">
            <Icon style={{ color: color }} />
            <h4 className="text-sm font-bold text-zinc-400 ml-1">{title}</h4>
        </div>
    )
}