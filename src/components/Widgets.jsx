import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';

export default function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets-article flex p-3 cursor-pointer rounded-md hover:bg-rose-900 hover:text-zinc-900'>
            <div className='widgets-article-left text-xs text-zinc-400'><FiberManualRecordSharpIcon fontSize='inherit' /></div>
            <div className='widgets-article-right ml-2'>
                <h4 className='text-sm font-semibold text-zinc-200'>{heading}</h4>
                <p className='text-xs text-zinc-400'>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets bg-zinc-900 w-1/4 border rounded-md border-zinc-700 h-fit top-20 sticky p-3">
            <div className="widgets-header flex items-center justify-between p-3">
                <h2 className='text-xl font-bold text-zinc-100'>Fangbook News</h2>
                <InfoSharpIcon className='text-rose-500 text-xs' fontSize='inherit' />
            </div>
            {newsArticle("Batman: Cultural Appropriation or Cultural Appreciation? An Essay", "Top News - 144,409 readers")}
            {newsArticle("Lady Gaga Gives Makeup Advice", "Style - 18,780 readers")}
            {newsArticle("Here's Why Familiar Care is a Struggle", "Home and Family - 3,113 readers")}
            {newsArticle("Quick Weeknight Meal Tips: Bus Stops and You", "Cuisine - 145,615 readers")}
            {newsArticle("The Van Helsings, a History of Racism and Violence", "Top News - 87,181 readers")}
        </div>
    )

}