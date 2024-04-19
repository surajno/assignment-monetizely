import React from 'react'

const HeaderTop = () => {
  return (
    <>
    <div className="bg-white dark:bg-zinc-800 p-4">
    <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg mb-4">
        <div className="flex items-center mb-2">
            <img className="h-12 w-12 rounded-full" src="https://placehold.co/50" alt="Subreddit logo"/>
            <div className="ml-2">
                <div className="text-lg font-semibold text-zinc-900 dark:text-white">r/MostBeautiful</div>
            </div>
        </div>
        <div className="flex justify-between items-center">
            {/* <div className="text-zinc-500 dark:text-zinc-300">Hot</div> */}
            <div className="text-zinc-500 dark:text-zinc-300">...</div>
        </div>
    </div>
    
    <div className="space-y-4">
        <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
            <div className="flex items-center mb-2">
                <div className="text-pink-600">👤</div>
                <div className="ml-2 text-sm text-zinc-500 dark:text-zinc-300">u/spicedpumpkins · 9 yr. ago</div>
            </div>
            <p className="text-zinc-900 dark:text-white mb-4">Feel free to share any image here but please, be polite and give a nod to this sub in your comment or title that it came from /r/MostBeautiful if you do. Thank you!</p>
            <div className="flex items-center text-zinc-500 dark:text-zinc-300 text-sm">
                <div className="flex items-center mr-4">
                    <div>👍</div>
                    <div className="ml-1">219</div>
                </div>
                <div className="flex items-center mr-4">
                    <div>💬</div>
                    <div className="ml-1">0</div>
                </div>
                <div className="flex items-center mr-4">
                    <div>🔗</div>
                    <div className="ml-1">Share</div>
                </div>
            </div>
        </div>
        
    </div>
</div>
    </>
  )
}

export default HeaderTop